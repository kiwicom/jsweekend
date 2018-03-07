// @flow

import * as React from "react";
import { Col, Row, Card } from "antd";

import resolveScopedStyles from "../../../utils/resolveScopedStyles";

const cardStyles = resolveScopedStyles(
  <scope>
    <style jsx>{`
      .card {
        margin-top: 6px;
      }
    `}</style>
  </scope>
);

const Leg = ({ leg }) => (
  <Card
    title="Mon 26 Mar — Tue 27 Mar"
    className={`card ${cardStyles.className}`}
  >
    <Row type="flex" justify="space-between">
      <Col>
        <Row>
          <div>{leg.departure.localTime}</div>
        </Row>
        <Row>
          <div>{leg.arrival.localTime}</div>
        </Row>
      </Col>
      <Col>
        <Row>
          <div>{leg.departure.airport.name}</div>
        </Row>
        <Row>
          <div>{leg.arrival.airport.name}</div>
        </Row>
      </Col>
    </Row>
    {cardStyles.styles}
  </Card>
);

export default Leg;
