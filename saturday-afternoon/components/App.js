// @flow

import React, { Component } from "react";
import { Row, Col } from "antd";
import moment from "moment";
import SearchForm from "./SearchForm";
import FlightList from "./flights/FlightList";

type State = {
  from: string,
  to: string,
  date: string
};

class App extends Component<{}, State> {
  state = {
    from: "Prague",
    to: "Barcelona",
    date: "2018-03-09"
  };

  handleChangeFrom = (value: string) => this.setState({ from: value });

  handleChangeTo = (value: string) => this.setState({ to: value });

  handleChangeDate = (date: Object, dateString: string) =>
    this.setState({ date: dateString });

  render() {
    const { from, to, date } = this.state;
    return (
      <Row>
        <Col span={14} offset={5}>
          <SearchForm
            from={from}
            to={to}
            date={date}
            changeDate={this.handleChangeDate}
            changeTo={this.handleChangeTo}
            changeFrom={this.handleChangeFrom}
          />
          <FlightList from={from} to={to} date={date} />
        </Col>
      </Row>
    );
  }
}

export default App;
