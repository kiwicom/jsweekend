// @flow

import * as React from "react";
import { Row, Button } from "antd";

import Legs from "./Legs";
import resolveScopedStyles from "../../utils/resolveScopedStyles";

type Props = {
  flight: Object
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

const FlightItem = ({ flight }: Props) => (
  <div>
    <Row>
      <Legs legs={flight.legs} />
    </Row>
    <Row>
      <Button type="primary" className={`buy ${buttonStyles.className}`}>
        Buy for {flight.price.amount} {flight.price.currency}
      </Button>
    </Row>
    {buttonStyles.styles}
  </div>
);

export default FlightItem;
