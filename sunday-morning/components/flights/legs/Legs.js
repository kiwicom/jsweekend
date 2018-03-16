// @flow

import * as React from "react";
import { Timeline } from "antd";
import { createFragmentContainer, graphql } from "react-relay";

import Leg from "./Leg";
import type { Legs as LegsType } from "./__generated__/Legs.graphql.js";

type Props = {
  data: LegsType
};

const Legs = ({ data: { legs } }: Props) => (
  <Timeline>
    {legs &&
      legs.length &&
      legs.map(leg => {
        if (leg) {
          return (
            <Timeline.Item key={leg.id}>
              <Leg leg={leg} />
            </Timeline.Item>
          );
        }
        return null;
      })}
  </Timeline>
);

export default createFragmentContainer(
  Legs,
  graphql`
    fragment Legs on Flight {
      legs {
        id
        ...Leg_leg
      }
    }
  `
);
