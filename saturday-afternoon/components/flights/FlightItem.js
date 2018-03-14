// @flow

import * as React from "react";
import { Row, Button } from "antd";
import { createFragmentContainer, graphql } from "react-relay";
import idx from "idx";

import resolveScopedStyles from "../../utils/resolveScopedStyles";
import Legs from "./legs/Legs";
import type { FlightItem_flight as FlightItemType } from "./__generated__/FlightItem_flight.graphql";

type Props = {
  flight: FlightItemType
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

class FlightItem extends React.Component<Props> {
  handleBuy = () => {
    const bookingUrl = this.props.flight.bookingUrl;

    bookingUrl && window.open(bookingUrl);
  };

  render() {
    const flight = this.props.flight;
    const amount = idx(flight, _ => _.price.amount) || "?";
    const currency = idx(flight, _ => _.price.currency) || "";
    if (flight) {
      return (
        <div>
          <Row>
            <Legs data={flight} />
          </Row>
          <Row>
            <Button
              type="primary"
              className={`buy ${buttonStyles.className}`}
              onClick={this.handleBuy}
            >
              Buy for {amount} {currency}
            </Button>
          </Row>
          {buttonStyles.styles}
        </div>
      );
    }
    return null;
  }
}

export default createFragmentContainer(
  FlightItem,
  graphql`
    fragment FlightItem_flight on Flight {
      id
      ...Legs
      price {
        amount
        currency
      }
      bookingUrl
    }
  `
);
