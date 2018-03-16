// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { graphql } from "graphql-tools";
import { Collapse } from "antd";

import { getMockData } from "./MockProvider";
import RelayMock from "../../.storybook/RelayMock";
import FlightItem from "./FlightItem";
import FlightItemHeader from "./FlightItemHeader";

storiesOf("Flight/Detail", module).add("1 leg", () => (
  <OpenedFlight legsCount={1} />
));
storiesOf("Flight/Detail", module).add("2 legs", () => (
  <OpenedFlight legsCount={2} />
));
storiesOf("Flight/Detail", module).add("3 legs", () => (
  <OpenedFlight legsCount={3} />
));

storiesOf("Flight/Collapsed", module).add("1 leg", () => (
  <CollapsedFlight legsCount={1} />
));
storiesOf("Flight/Collapsed", module).add("2 legs", () => (
  <CollapsedFlight legsCount={2} />
));
storiesOf("Flight/Collapsed", module).add("3 legs", () => (
  <CollapsedFlight legsCount={3} />
));
storiesOf("Flight/Collapsed", module).add("4 legs", () => (
  <CollapsedFlight legsCount={4} />
));

const Query = graphql`
  query FlightQuery($search: FlightsSearchInput!) {
    allFlights(search: $search) {
      edges {
        cursor
        node {
          ...FlightItem_flight
          ...FlightItemHeader_flight
        }
      }
    }
  }
`;

const variables = {
  search: {
    from: [{ location: "Prague" }],
    to: [{ location: "Barcelona" }],
    date: { exact: "2018-03-18" }
  }
};

const OpenedFlight = ({ legsCount }) => (
  <RelayMock
    mocks={getMockData(1, legsCount)}
    query={Query}
    variables={variables}
    // eslint-disable-next-line react/jsx-no-bind
    render={data => {
      const flight = data.allFlights.edges[0].node;
      return (
        <div style={{ padding: 20 }}>
          <FlightItemHeader flight={flight} />
          <FlightItem flight={flight} />
        </div>
      );
    }}
  />
);

const CollapsedFlight = ({ legsCount }) => (
  <RelayMock
    mocks={getMockData(1, legsCount)}
    query={Query}
    variables={variables}
    // eslint-disable-next-line react/jsx-no-bind
    render={data => {
      const flight = data.allFlights.edges[0].node;
      return (
        <Collapse bordered={false}>
          <Collapse.Panel header={<FlightItemHeader flight={flight} />}>
            <FlightItem flight={flight} />
          </Collapse.Panel>
        </Collapse>
      );
    }}
  />
);
