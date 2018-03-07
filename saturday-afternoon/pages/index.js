// @flow

import * as React from "react";
import Head from "next/head";
import { Row, Col } from "antd";

import SearchForm from "./../components/SearchForm";
import FlightList from "./../components/flights/FlightList";

export default () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.1/antd.min.css"
      />
    </Head>
    <Row>
      <Col span={14} offset={5}>
        <SearchForm />
        <FlightList />
      </Col>
    </Row>
  </div>
);
