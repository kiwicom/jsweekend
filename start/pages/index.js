import React from "react";
import moment from "moment";
import Head from "next/head";

import { fetchFlights } from "../services/FlightsFetcher";
import Flight from "../components/Flight";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const flightFrom = "Prague";
    const flightTo = "Barcelona";
    const flightDate = moment().add(7, "d");

    const flights = await fetchFlights(
      flightFrom,
      flightTo,
      flightDate.format("YYYY-MM-DD")
    );

    return {
      flightFrom,
      flightTo,
      flightDate: flightDate.format(),
      flights
    };
  }

  render() {
    const flightDate = moment(this.props.flightDate);

    return (
      <React.Fragment>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.1/antd.min.css"
          />
          <title>Flight search</title>
        </Head>
        <body style={{ padding: "30px" }}>
          <h1>
            From {this.props.flightFrom} to {this.props.flightTo} on{" "}
            {flightDate.format("dddd, D.M.YYYY")}
          </h1>
          <div className="ant-list ant-list-split">
            {this.props.flights.map(({ node: flight }) => (
              <Flight flight={flight} key={flight.id} />
            ))}
          </div>
        </body>
      </React.Fragment>
    );
  }
}
