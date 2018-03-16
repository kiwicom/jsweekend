// @flow

import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Row, Col } from "antd";
import idx from "idx";

import Airlines from "./Airlines";
import DateTime from "../common/DateTime";
import DateTimeRange from "../common/DateTimeRange";
import Duration from "../common/Duration";
import type { FlightItemHeader_flight as FlightHeaderType } from "./__generated__/FlightItemHeader_flight.graphql";

type Props = {
  flight: FlightHeaderType
};

const FlightItemHeader = ({ flight }: Props) => {
  const departureTime = idx(flight, _ => _.departure.localTime);
  const arrivalTime = idx(flight, _ => _.arrival.localTime);
  const departureName = idx(flight, _ => _.departure.airport.city.name);
  const arrivalName = idx(flight, _ => _.arrival.airport.city.name);
  const departureId = idx(flight, _ => _.departure.airport.locationId);
  const arrivalId = idx(flight, _ => _.arrival.airport.locationId);
  const priceAmount = idx(flight, _ => _.price.amount) || "?";
  const priceCurrency = idx(flight, _ => _.price.currency) || "";
  return (
    <div className="flight-item-header">
      <Row>
        <Col span={6}>
          <Airlines data={flight} />
        </Col>
        <Col span={4}>
          <Row>
            <DateTimeRange
              departureTime={departureTime}
              arrivalTime={arrivalTime}
            />
          </Row>
          <Row>
            <DateTime value={departureTime} isDate />
          </Row>
        </Col>
        <Col span={4}>
          <Duration value={flight.duration} />
        </Col>
        <Col span={6}>
          {departureName} ({departureId}) - {arrivalName} ({arrivalId})
        </Col>
        <Col span={4}>
          <div className="price">
            {priceAmount} {priceCurrency}
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .price {
          text-align: right;
        }
      `}</style>
    </div>
  );
};

export default createFragmentContainer(
  FlightItemHeader,
  graphql`
    fragment FlightItemHeader_flight on Flight {
      ...Airlines
      departure {
        localTime
        airport {
          locationId
          city {
            name
          }
        }
      }
      arrival {
        localTime
        airport {
          locationId
          city {
            name
          }
        }
      }
      duration
      price {
        amount
        currency
      }
    }
  `
);
