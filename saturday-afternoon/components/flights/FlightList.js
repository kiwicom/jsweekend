// @flow

import React, { Component } from "react";
import {
  graphql,
  createPaginationContainer,
  type RelayPaginationProp
} from "react-relay";
import idx from "idx";
import { Button, Collapse } from "antd";

import type { FlightList as FlightListType } from "./__generated__/FlightList.graphql";
import FlightEmptyList from "./FlightEmptyList";
import FlightItem from "./FlightItem";
import FlightItemHeader from "./FlightItemHeader";

type Props = {
  data: FlightListType,
  relay: RelayPaginationProp
};

type State = {
  loading: boolean
};

const PAGE_SIZE = 5;

class FlightList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.relay.isLoading()
    };
  }

  onLoadMore = () => {
    const { relay } = this.props;

    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }

    this.setState({ loading: true });

    this.props.relay.loadMore(PAGE_SIZE, () =>
      this.setState({
        loading: false
      })
    );
  };

  render() {
    const { relay, data } = this.props;
    const flightEdges = idx(data, _ => _.allFlights.edges) || [];
    return (
      <div>
        <Collapse bordered={false}>
          {flightEdges.length &&
            flightEdges.map(flight => {
              if (flight) {
                return (
                  <Collapse.Panel
                    key={flight.cursor}
                    header={<FlightItemHeader flight={flight.node} />}
                  >
                    <FlightItem flight={flight.node} />
                  </Collapse.Panel>
                );
              }
              return null;
            })}
        </Collapse>
        <div className="loadMore">
          <Button
            onClick={this.onLoadMore}
            type="primary"
            loading={this.state.loading}
            disabled={!relay.hasMore()}
          >
            {relay.isLoading() ? "Loading" : "Load more"}
          </Button>
        </div>
        <style jsx>{`
          .loadMore {
            margin: 20px 0;
            width: 100%;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default createPaginationContainer(
  FlightEmptyList(FlightList),
  graphql`
    fragment FlightList on RootQuery
      @argumentDefinitions(
        first: { type: "Int", defaultValue: 5 }
        after: { type: "String" }
      ) {
      allFlights(search: $search, first: $first, after: $after)
        @connection(key: "FlightList_allFlights") {
        edges {
          cursor
          node {
            ...FlightItem_flight
            ...FlightItemHeader_flight
          }
        }
      }
    }
  `,
  {
    direction: "forward",
    getVariables: (props, { count, cursor }, fragmentVariables) => {
      return {
        ...fragmentVariables,
        first: count,
        after: cursor
      };
    },
    query: graphql`
      query FlightListPaginationQuery(
        $first: Int
        $after: String
        $search: FlightsSearchInput!
      ) {
        ...FlightList @arguments(first: $first, after: $after)
      }
    `,
    getConnectionFromProps: props => {
      return props.data.allFlights;
    }
  }
);
