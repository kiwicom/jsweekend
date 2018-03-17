// @flow

import React, { Component } from "react";
import { Row, Col } from "antd";
import moment from "moment";

import SearchForm from "./search/SearchForm";
import FlightList from "./flights/FlightList";

type State = {|
  from: string,
  to: string,
  date: string
|};

class App extends Component<{}, State> {
  state = {
    from: "Prague",
    to: "Barcelona",
    date: moment()
      .add(7, "d")
      .format("YYYY-MM-DD")
  };

  onSubmit = (search: Object) => {
    this.setState(search);
  };

  render() {
    const { from, to, date } = this.state;
    return (
      <Row>
        <Col span={14} offset={5}>
          <SearchForm from={from} to={to} date={date} onSubmit={this.onSubmit} />
          <FlightList from={from} to={to} date={date} />
        </Col>
      </Row>
    );
  }
}

export default App;
