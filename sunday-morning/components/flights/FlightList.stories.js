// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { graphql } from "graphql-tools";

import { getMockData } from "./MockProvider";
import RelayMock from "../../.storybook/RelayMock";
import FlightList from "./FlightList";

const Query = graphql`
  query FlightListQuery($search: FlightsSearchInput!) {
    ...FlightList
  }
`;

const variables = {
  search: {
    from: [{ location: "Prague" }],
    to: [{ location: "Barcelona" }],
    date: { exact: "2018-03-18" }
  }
};

storiesOf("Flight/List", module).add("short list", () => (
  <RelayMock
    mocks={getMockData(3)}
    query={Query}
    variables={variables}
    render={data => <FlightList data={data} />} // eslint-disable-line react/jsx-no-bind
  />
));

storiesOf("Flight/List", module).add("long list", () => (
  <RelayMock
    mocks={getMockData(10)}
    query={Query}
    variables={variables}
    render={data => <FlightList data={data} />} // eslint-disable-line react/jsx-no-bind
  />
));
