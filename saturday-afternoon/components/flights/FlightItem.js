// @flow

import * as React from "react";
import { Row, Button } from "antd";

import Legs from "./Legs";
import resolveScopedStyles from "../../utils/resolveScopedStyles";

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
      <Legs legs={props.flight.legs} />
    </Row>
    <Row>
      <Button type="primary" className={`buy ${buttonStyles.className}`}>
        Buy for {props.flight.price.amount} {props.flight.price.currency}
      </Button>
    </Row>
    {buttonStyles.styles}
  </div>
);

export default FlightItem;
