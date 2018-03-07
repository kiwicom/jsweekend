// @flow

import * as React from "react";
import { Timeline } from "antd";

import Leg from "./Leg";

const Legs = props => (
  <Timeline>
    {props.legs &&
      props.legs.length &&
      props.legs.map(leg => (
        <Timeline.Item key={leg.id}>
          <Leg leg={leg} />
        </Timeline.Item>
      ))}
  </Timeline>
);

export default Legs;
