// @flow

import * as React from "react";
import { Row, Col } from "antd";
import moment from "moment";

type Props = {
  flight: Flight
};

type Flight = {
  departure: Object,
  arrival: Object,
  duration: number,
  legs: Leg[],
  price: Object
};

type Leg = {
  id: string,
  airline: {
    name: string,
    logoUrl: string
  },
  arrival: {
    time: string,
    airport: {
      name: string,
      city: {
        name: string
      }
    }
  },
  departure: {
    time: string,
    airport: {
      name: string,
      city: {
        name: string
      }
    }
  }
};

const FlightItemHeader = ({
  flight: { departure, arrival, duration, legs, price }
}: Props) => {
  const durationFormatted = moment.duration(duration, "minutes");

  return (
    <Row type="flex" justify="space-between">
      <Row>
        {legs.map(leg => {
          return (
            <Col key={leg.id} style={{ marginBottom: 10 }}>
              <img
                src={leg.airline.logoUrl}
                alt={leg.airline.name}
                width={32}
                height={32}
                style={{ marginRight: 10 }}
              />
              <span>{leg.airline.name}</span>
            </Col>
          );
        })}
      </Row>
      <Col>
        <Row>
          <time dateTime={departure.time}>
            {moment.utc(departure.time).format("HH:mm")}
          </time>
          <span> - </span>
          <time dateTime={arrival.time}>
            {moment.utc(arrival.time).format("HH:mm")}
          </time>
        </Row>
        <Row>
          <time dateTime={departure.time}>
            {moment.utc(departure.time).format("dd MMM D")}
          </time>
        </Row>
      </Col>
      <Col>
        {durationFormatted.hours()}h {durationFormatted.minutes()}m
      </Col>
      <Col>
        {departure.airport.city.name} ({departure.airport.locationId}) -{" "}
        {arrival.airport.city.name} ({arrival.airport.locationId})
      </Col>
      <Col>
        <div>
          {price.amount} {price.currency}
        </div>
      </Col>
    </Row>
  );
};

export default FlightItemHeader;
