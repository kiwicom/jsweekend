import { Component, Fragment } from "react";
import Head from "next/head";

import FlightList from "../components/flights/FlightList";

class Index extends Component {
  render() {
    return <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.1/antd.min.css"
        />
      </Head>
      <FlightList />
    </Fragment>;
  }
}

export default Index;
