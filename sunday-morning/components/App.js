// @flow

import React, { Component } from "react";
import { Row, Col } from "antd";
import moment from "moment";

import Search from "./search/Search";
import Flights from "./flights/Flights";

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

  onSubmit = (newValues: State) => {
    this.setState(newValues);
  };

  render() {
    const { from, to, date } = this.state;
    return (
      <Row>
        <Col span={14} offset={5}>
          <Search from={from} to={to} date={date} onSubmit={this.onSubmit} />
          <Flights from={from} to={to} date={date} />
        </Col>
      </Row>
    );
  }
}

export default App;
