// @flow

import * as React from "react";
import { Col, Row, Card } from "antd";
import { createFragmentContainer, graphql } from "react-relay";
import moment from "moment";

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

const formatDate = dateTime => moment(dateTime).format("dd MMM D");

const Leg = ({ leg }: Props) => (
  <Card
    title={`${formatDate(leg.departure.localTime)} - ${formatDate(
      leg.departure.localTime
    )}`}
    className={`card ${cardStyles.className}`}
  >
    <Row type="flex" justify="start" gutter={16}>
      <Col>
        <Row>
          <div>{moment(leg.departure.localTime).format("HH:MM")}</div>
        </Row>
        <Row>
          <div>{moment(leg.arrival.localTime).format("HH:MM")}</div>
        </Row>
      </Col>
      <Col>
        <Row>
          <div>{leg.departure.airport.name}</div>
        </Row>
        <Row>
          <div>{leg.arrival.airport.name}</div>
        </Row>
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
        time
        localTime
        airport {
          name
          city {
            name
          }
        }
      }
      departure {
        time
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
