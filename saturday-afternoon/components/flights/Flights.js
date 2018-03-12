// @flow

import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";

import environment from "../../lib/environment";
import FlightList from "./FlightList";

const query = graphql`
  query FlightsQuery($search: FlightsSearchInput!) {
    ...FlightList
  }
`;

type Props = {
  from: string,
  to: string,
  date: string
};

class Flights extends Component<Props> {
  generateRender = ({ error, props }: Object) => {
    if (!error && !props) return <div>Loading</div>;
    if (error) return <div>Error happened: {error.message}</div>;

    return <FlightList data={props} />;
  };

  render() {
    const { from, to, date } = this.props;
    return (
      <div>
        <h2>
          List of flights from <em>{from}</em> to <em>{to}</em> on{" "}
          <em>{date}</em>
        </h2>
        <QueryRenderer
          environment={environment}
          query={query}
          variables={{
            search: {
              from: [{ location: from }],
              to: [{ location: to }],
              date: { exact: date }
            }
          }}
          render={this.generateRender}
        />
      </div>
    );
  }
}

export default Flights;
