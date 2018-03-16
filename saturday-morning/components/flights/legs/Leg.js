// @flow

import * as React from "react";
import { Col, Row, Card } from "antd";
import moment from "moment";

import DateTime from "../../common/DateTime";
import DateTimeRange from "../../common/DateTimeRange";

type Props = {
  leg: Object
};

const Leg = ({ leg }: Props) => (
  <Card
    title={
      <DateTimeRange
        departureTime={leg.departure.localTime}
        arrivalTime={leg.arrival.localTime}
        areDates
      />
    }
    className={`card`}
  >
    <Row type="flex" justify="start" gutter={16}>
      <Col>
        <Row>
          <DateTime value={leg.departure.localTime} />
        </Row>
        <Row>
          <DateTime value={leg.arrival.localTime} />
        </Row>
      </Col>
      <Col>
        <Row>{leg.departure.airport.name}</Row>
        <Row>{leg.arrival.airport.name}</Row>
      </Col>
    </Row>
  </Card>
);

export default Leg;
