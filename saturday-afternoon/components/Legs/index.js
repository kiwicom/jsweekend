// @flow

import * as React from "react";
import { Timeline } from "antd";

import Leg from "./Leg";

const Legs = () => (
  <Timeline>
    {[0, 1].map(() => (
      <Timeline.Item>
        <Leg />
      </Timeline.Item>
    ))}
  </Timeline>
);

export default Legs;
