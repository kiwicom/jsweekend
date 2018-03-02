// @flow

import * as React from "react";
import { Row, Col } from "antd";

const FlightItemHeader = () => (
  <Row type="flex" justify="space-between">
    <Col>
      <img
        src="https://images.kiwi.com/airlines/64/S7.png"
        width={32}
        height={32}
      />
    </Col>
    <Col>Azul, Norwegian</Col>
    <Col>
      <Row>
        <time datetime="2018-03-18T10:25:00+00:00">10:25</time>
        <span> - </span>
        <time datetime="2018-03-18T15:10:00+00:00">15:10</time>
      </Row>
      <Row>
        <time datetime="2018-03-18T10:25:00+00:00">Sun 18 Mar</time>
      </Row>
    </Col>
    <Col>Prague (PRG) - Bangkok (BKK)</Col>
    <Col>
      <div>120 EUR</div>
    </Col>
  </Row>
);

export default FlightItemHeader;
