// @flow

import * as React from "react";
import { Row, Button } from "antd";

import Legs from "./Legs";
import resolveScopedStyles from "../utils/resolveScopedStyles";

type Flight = {};

type Props = {
  flight: Flight
};

const buttonStyles = resolveScopedStyles(
  <scope>
    <style jsx>{`
      .buy {
        width: 100%;
      }
    `}</style>
  </scope>
);

const FlightItem = (props: Props) => (
  <div>
    <Row>
      <Legs />
    </Row>
    <Row>
      <Button type="primary" className={`buy ${buttonStyles.className}`}>
        Buy (120 EUR)
      </Button>
    </Row>
    {buttonStyles.styles}
  </div>
);

export default FlightItem;
