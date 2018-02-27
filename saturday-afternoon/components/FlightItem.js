// @flow

import * as React from "react";
import { Row, Timeline, Button } from "antd";

type Flight = {};

type Props = {
  flight: Flight
};

const FlightItem = (props: Props) => (
  <div>
    <Row>
      <Timeline>
        <Timeline.Item>step1</Timeline.Item>
        <Timeline.Item>step2</Timeline.Item>
      </Timeline>
    </Row>
    <Row>
      <Button type="primary" style={{ width: "100%" }}>
        Buy (120 EUR)
      </Button>
    </Row>
  </div>
);

export default FlightItem;
