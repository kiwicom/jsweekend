import { Component } from "react";
import moment from "moment";

class FlightItem extends Component {
  render() {
    const {
      departure,
      arrival,
      duration,
      legs,
      price
    } = this.props.flight.node;
    const durationFormatted = moment.duration(duration, "minutes");

    return (
      <div style={{ padding: 10, border: "1px solid black", marginBottom: 10 }}>
        <p>Departure: {moment(departure.time).format("llll")}</p>
        <p>Arrival: {moment(arrival.time).format("llll")}</p>
        <p>
          Duration: {durationFormatted.hours()}h {durationFormatted.minutes()}m
        </p>
        {legs.map(leg => {
          return (
            <div
              key={leg.id}
              style={{
                display: "grid",
                gridTemplateColumns: "150px auto auto",
                marginBottom: 10
              }}
            >
              <img src={leg.airline.logoUrl} alt={leg.airline.name} />
              <p>{leg.departure.airport.name}</p>
              <p>{leg.arrival.airport.name}</p>
            </div>
          );
        })}
        <p>
          Price: {price.amount} {price.currency}
        </p>
      </div>
    );
  }
}

export default FlightItem;
