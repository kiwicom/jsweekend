// @flow

import * as React from "react";
import { Row, Col } from "antd";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import Airlines from "./Airlines";

momentDurationFormatSetup(moment);

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
        <time dateTime={departure.localTime}>
          {moment.utc(departure.localTime).format("HH:mm")}
        </time>
        <span> - </span>
        <time dateTime={arrival.localTime}>
          {moment.utc(arrival.localTime).format("HH:mm")}
        </time>
      </Row>
      <Row>
        <time dateTime={departure.localTime}>
          {moment.utc(departure.localTime).format("dd MMM D")}
        </time>
      </Row>
    </Col>
    <Col span={4}>
      {moment.duration(duration, "minutes").format("h[h] m[m]")}
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
