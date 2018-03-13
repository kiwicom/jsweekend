import React from "react";
import moment from "moment";
import "moment-precise-range-plugin";

export default ({ flight }) => (
  <div className="ant-list-item">
    <div className="ant-list-item-meta-content">
      <h2 className="ant-list-item-meta-title">
        <strong>{`${formatPrice(flight.price)}`}</strong>,{" "}
        {formatTimes(flight.arrival, flight.departure)}
      </h2>
      <div className="ant-list-item-meta-description">
        {formatDescription(flight.airlines.slice(0))}
      </div>
    </div>
  </div>
);

function formatPrice(price) {
  return `${price.amount} ${price.currency}`;
}

function formatTimes(arrival, departure) {
  const start = moment.utc(departure.localTime).format("LT");
  const end = moment.utc(arrival.localTime).format("LT");
  const duration = moment.preciseDiff(departure.localTime, arrival.localTime);
  return `${start} – ${end} (${duration})`;
}

function formatDescription(airlines) {
  if (airlines.length === 1) {
    return `Direct journey with ${airlines[0].name}`;
  } else if (airlines.length > 1) {
    const last = airlines.pop();
    return `${airlines.length} ${
      airlines.length === 1 ? "stop" : "stops"
    } journey with ${airlines.map(a => a.name).join(", ")} and ${last.name}`;
  } else {
    return "";
  }
}
