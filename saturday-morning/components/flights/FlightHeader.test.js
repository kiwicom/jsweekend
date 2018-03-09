// @flow

import React from "react";
import { shallow } from "enzyme";

import FlightItemHeader from "./FlightItemHeader";

const data = {
  id: "RmxpZ2h0OjM2NTI1Nzc5NzgyMDI2NjlfMHwzNjExODk2NDM2MTYxMzI5XzA=",
  departure: {
    time: "2018-03-16T07:40:00.000Z",
    airport: { locationId: "PRG", city: { name: "Prague" } }
  },
  arrival: {
    time: "2018-03-16T15:45:00.000Z",
    airport: { locationId: "BCN", city: { name: "Barcelona" } }
  },
  duration: 485,
  legs: [
    {
      id: "TGVnOjM2NTI1Nzc5NzgyMDI2NjlfMA==",
      airline: {
        name: "Ryanair",
        logoUrl: "https://images.kiwi.com/airlines/64/FR.png"
      },
      arrival: {
        airport: {
          name: "Brussels South Charleroi",
          city: { name: "City of Brussels" }
        }
      },
      departure: {
        time: "2018-03-16T07:40:00.000Z",
        localTime: "2018-03-16T08:40:00.000Z",
        airport: {
          name: "Václav Havel Airport Prague",
          city: { name: "Prague" }
        }
      }
    },
    {
      id: "TGVnOjM2MTE4OTY0MzYxNjEzMjlfMA==",
      airline: {
        name: "Ryanair",
        logoUrl: "https://images.kiwi.com/airlines/64/FR.png"
      },
      arrival: {
        airport: { name: "Barcelona–El Prat", city: { name: "Barcelona" } }
      },
      departure: {
        time: "2018-03-16T13:40:00.000Z",
        localTime: "2018-03-16T14:40:00.000Z",
        airport: {
          name: "Brussels South Charleroi",
          city: { name: "City of Brussels" }
        }
      }
    }
  ],
  price: { amount: 130, currency: "EUR" }
};

describe("FlightItemHeader", () => {
  it("should match snapshot", () => {
    expect(shallow(<FlightItemHeader flight={data} />)).toMatchSnapshot();
  });
});
