// @flow

import * as React from "react";
import { Col, Row, Card } from "antd";
import { createFragmentContainer, graphql } from "react-relay";
import idx from "idx";

import DateTime from "../../common/DateTime";
import DateTimeRange from "../../common/DateTimeRange";
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

const Leg = ({ leg }: Props) => {
  const departureTime = idx(leg, _ => _.departure.localTime);
  const arrivalTime = idx(leg, _ => _.arrival.localTime);
  const departureName = idx(leg, _ => _.departure.airport.name);
  const arrivalName = idx(leg, _ => _.arrival.airport.name);
  return (
    <Card
      title={
        <DateTimeRange
          departureTime={departureTime}
          arrivalTime={arrivalTime}
          areDates
        />
      }
      className={`card ${cardStyles.className}`}
    >
      <Row type="flex" justify="start" gutter={16}>
        <Col>
          <Row>
            <DateTime value={departureTime} />
          </Row>
          <Row>
            <DateTime value={arrivalTime} />
          </Row>
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
