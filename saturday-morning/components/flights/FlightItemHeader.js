// @flow

import * as React from "react";
import { Row, Col } from "antd";

import Airlines from "./Airlines";
import DateTime from "../common/DateTime";
import DateTimeRange from "../common/DateTimeRange";
import Duration from "../common/Duration";

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
  }
};

const FlightItemHeader = ({
  flight: { legs, departure, arrival, duration, price }
}: Props) => (
  <Row type="flex" justify="space-between">
    <Col span={6}>
      <Airlines legs={legs} />
    </Col>
    <Col span={4}>
      <Row>
        <DateTimeRange
          departureTime={departure.localTime}
          arrivalTime={arrival.localTime}
        />
      </Row>
      <Row>
        <DateTime value={departure.localTime} isDate />
      </Row>
    </Col>
    <Col span={4}>
      <Duration value={duration} />
    </Col>
    <Col span={6}>
      {departure.airport.city.name} ({departure.airport.locationId}) -{" "}
      {arrival.airport.city.name} ({arrival.airport.locationId})
    </Col>
    <Col span={4}>
      {price.amount} {price.currency}
    </Col>
  </Row>
);

export default FlightItemHeader;
