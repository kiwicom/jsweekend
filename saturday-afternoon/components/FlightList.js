// @flow

import * as React from "react";
import { Collapse } from "antd";
import FlightItemHeader from "./FlightItemHeader";
import FlightItem from "./FlightItem";

const FlightList = () => {
  return (
    <Collapse bordered={false}>
      {[1, 2, 3, 4].map((item, i) => (
        <Collapse.Panel key={i} header={<FlightItemHeader />}>
          <FlightItem flight={{}} />
        </Collapse.Panel>
      ))}
    </Collapse>
  );
};

export default FlightList;
