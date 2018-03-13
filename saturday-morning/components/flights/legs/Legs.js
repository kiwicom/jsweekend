// @flow

import * as React from "react";
import { Timeline } from "antd";

import Leg from "./Leg";

type Props = {
  legs: Object[]
};

const Legs = ({ legs }: Props) => (
  <Timeline>
    {legs &&
      legs.length &&
      legs.map(leg => (
        <Timeline.Item key={leg.id}>
          <Leg leg={leg} />
        </Timeline.Item>
      ))}
  </Timeline>
);

export default Legs;
