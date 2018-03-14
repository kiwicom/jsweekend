// @flow

import * as React from "react";
import { Col, Row, Card } from "antd";
import { createFragmentContainer, graphql } from "react-relay";
import moment from "moment";
import idx from "idx";

import resolveScopedStyles from "../../../utils/resolveScopedStyles";
import type { Leg_leg as LegType } from "./__generated__/Leg_leg.graphql.js";

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
  leg: LegType
};

const formatDate = dateTime => moment.utc(dateTime).format("dd MMM D");
const formatTime = dateTime => moment.utc(dateTime).format("HH:MM");

const Leg = ({ leg }: Props) => {
  const departureTime = idx(leg, _ => _.departure.localTime);
  const arrivalTime = idx(leg, _ => _.arrival.localTime);
  const departureName = idx(leg, _ => _.departure.airport.name);
  const arrivalName = idx(leg, _ => _.arrival.airport.name);

  return (
    <Card
      title={`${formatDate(departureTime)} - ${formatDate(arrivalTime)}`}
      className={`card ${cardStyles.className}`}
    >
      <Row type="flex" justify="start" gutter={16}>
        <Col>
          <Row>{formatTime(departureTime)}</Row>
          <Row>{formatTime(arrivalTime)}</Row>
        </Col>
        <Col>
          <Row>{departureName}</Row>
          <Row>{arrivalName}</Row>
        </Col>
      </Row>
      {cardStyles.styles}
    </Card>
  );
};

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
