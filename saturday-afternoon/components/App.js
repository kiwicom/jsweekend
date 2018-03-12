// @flow

import React, { Component } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { Row, Col } from "antd";
import moment from "moment";
import Search from "./search/Search";
import Flights from "./flights/Flights";

type State = {
  from: string,
  to: string,
  date: string
};

class App extends Component<{}, State> {
  state = {
    from: "Prague",
    to: "Barcelona",
    date: moment().format("YYYY-MM-DD")
  };

  handleChangeFrom = (value: string, option: Object) => {
    this.setState({ from: option.props.children });
  };

  handleChangeTo = (value: string, option: Object) =>
    this.setState({ to: option.props.children });

  handleChangeDate = (date: Object, dateString: string) =>
    this.setState({ date: dateString });

  render() {
    const { from, to, date } = this.state;
    return (
      <Row>
        <Col span={14} offset={5}>
          <Search
            from={from}
            to={to}
            date={date}
            changeFrom={this.handleChangeFrom}
            changeTo={this.handleChangeTo}
            changeDate={this.handleChangeDate}
          />
          <Flights from={from} to={to} date={date} />
        </Col>
      </Row>
    );
  }
}

export default App;
