// @flow

import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Row, Col } from "antd";
import moment from "moment";

type Props = {
  flight: Flight
};

type Flight = {
  departure: Object,
  arrival: Object,
  duration: Object,
  legs: Object,
  price: Object
};

const FlightItemHeader = ({
  flight: { departure, arrival, duration, legs, price }
}: Props) => {
  const durationFormatted = moment.duration(duration, "minutes");

  return (
    <div>
      <Row>
        <Col span={6}>
          <Row>
            {legs.map(leg => {
              return (
                <Col key={leg.id} style={{ marginBottom: 10 }}>
                  <img
                    src={leg.airline.logoUrl}
                    alt={leg.airline.name}
                    width={32}
                    height={32}
                    style={{ marginRight: 10 }}
                  />
                  <span>{leg.airline.name}</span>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col span={4}>
          <Row>
            <time dateTime={departure.localTime}>
              {moment.utc(departure.localTime).format("HH:mm")}
            </time>
            <span> - </span>
            <time dateTime={arrival.localTime}>
              {moment.utc(arrival.localTime).format("HH:mm")}
            </time>
          </Row>
          <Row>
            <time dateTime={departure.localTime}>
              {moment.utc(departure.localTime).format("dd MMM D")}
            </time>
          </Row>
        </Col>
        <Col span={4}>
          {durationFormatted.hours()}h {durationFormatted.minutes()}m
        </Col>
        <Col span={6}>
          {departure.airport.city.name} ({departure.airport.locationId}) -{" "}
          {arrival.airport.city.name} ({arrival.airport.locationId})
        </Col>
        <Col span={4}>
          <div className="price">
            {price.amount} {price.currency}
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
      legs {
        id
        airline {
          name
          logoUrl
        }
      }
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
