// @flow

import * as React from "react";
import { Col, Row, Card } from "antd";
import { createFragmentContainer, graphql } from "react-relay";

import DateTime from "../../common/DateTime";
import DateTimeRange from "../../common/DateTimeRange";
import resolveScopedStyles from "../../../utils/resolveScopedStyles";

const cardStyles = resolveScopedStyles(
  <scope>
    <style jsx>{`
      .card {
        margin-top: 6px;
      }
    `}</style>
  </scope>
);

type Props = {
  leg: Object
};

const Leg = ({ leg }: Props) => (
  <Card
    title={
      <DateTimeRange
        departureTime={leg.departure.localTime}
        arrivalTime={leg.arrival.localTime}
        areDates
      />
    }
    className={`card ${cardStyles.className}`}
  >
    <Row type="flex" justify="start" gutter={16}>
      <Col>
        <Row>
          <DateTime value={leg.departure.localTime} />
        </Row>
        <Row>
          <DateTime value={leg.arrival.localTime} />
        </Row>
      </Col>
      <Col>
        <Row>{leg.departure.airport.name}</Row>
        <Row>{leg.arrival.airport.name}</Row>
      </Col>
    </Row>
    {cardStyles.styles}
  </Card>
);

export default createFragmentContainer(
  Leg,
  graphql`
    fragment Leg_leg on Leg {
      id
      airline {
        name
        logoUrl
      }
      arrival {
        localTime
        airport {
          name
          city {
            name
          }
        }
      }
      departure {
        localTime
        airport {
          name
          city {
            name
          }
        }
      }
    }
  `
);
