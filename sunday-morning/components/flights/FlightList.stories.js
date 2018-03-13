// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { graphql, MockList } from "graphql-tools";
import faker from "faker";

import RelayMock from "../../.storybook/RelayMock";
import FlightItem from "./FlightItem";
import FlightItemHeader from "./FlightItemHeader";
import FlightList from "./FlightList";

faker.seed(554);

function getMockData(count: number) {
  return {
    FlightConnection: () => ({
      edges: () => new MockList(count, () => ({ cursor: faker.random.uuid() }))
    }),
    Flight: () => ({
      id: faker.random.uuid(),
      bookingUrl: faker.internet.url(),
      price: {
        amount: faker.random.number(200),
        currency: "EUR"
      },
      duration: faker.random.number(300),
      legs: () => new MockList(1)
    }),
    Leg: () => ({
      id: faker.random.uuid()
    }),
    RouteStop: () => ({
      localTime: faker.date.future(2018)
    }),
    Location: () => ({
      locationId: faker.helpers.shuffle(["PRG", "BCN"])[0],
      name: faker.address.city()
    }),
    Airline: () => ({
      name: faker.company.companyName(0),
      logoUrl: () => {
        const code = faker.helpers.shuffle(["OK", "W6"])[0];
        return `https://images.kiwi.com/airlines/64/${code}.png`;
      }
    }),
    LocationArea: () => ({
      name: faker.address.city(0)
    })
  };
}

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

storiesOf("Flights", module).add("list", () => (
  <RelayMock
    mocks={getMockData(3)}
    query={Query}
    variables={variables}
    render={data => <FlightList data={data} />} // eslint-disable-line react/jsx-no-bind
  />
));
