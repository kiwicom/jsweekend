// @flow

import faker from "faker";
import { MockList } from "graphql-tools";

faker.seed(554);

export function getMockData(listSize: number, legsCount: number = 1) {
  return {
    FlightConnection: () => ({
      edges: () =>
        new MockList(listSize, () => ({ cursor: faker.random.uuid() }))
    }),
    Flight: () => ({
      id: faker.random.uuid(),
      bookingUrl: faker.internet.url(),
      price: {
        amount: faker.random.number(200),
        currency: "EUR"
      },
      duration: faker.random.number(300),
      legs: () => new MockList(legsCount)
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
