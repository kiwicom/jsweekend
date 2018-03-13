// @flow

import * as React from "react";
import { Row, Button } from "antd";

import Legs from "./legs/Legs";

type Props = {
  flight: Object
};

class FlightItem extends React.Component<Props> {
  handleBuy = () => {
    const bookingUrl = this.props.flight.bookingUrl;

    bookingUrl && window.open(bookingUrl);
  };

  render() {
    const flight = this.props.flight;

    return (
      <div>
        <Row>
          <Legs legs={flight.legs} />
        </Row>
        <Row>
          <Button
            type="primary"
            className="buy"
            style={{ width: "100%" }}
            onClick={this.handleBuy}
          >
            Buy for {flight.price.amount} {flight.price.currency}
          </Button>
        </Row>
      </div>
    );
  }
}

export default FlightItem;
