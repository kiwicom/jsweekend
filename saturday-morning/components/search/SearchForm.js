// @flow

import * as React from "react";
import moment from "moment";
import { QueryRenderer, graphql } from "react-relay";
import {Col, Row, Input, Button, DatePicker, Form, AutoComplete} from "antd";
import environment from "../../../saturday-afternoon/lib/environment";

type Props = {
  from: string,
  to: string,
  date: string,
  onSubmit: (Object) => void
};

type State = {|
  from: string,
  to: string,
  date: string,
|};

const dateFormat = "YYYY-MM-DD";

const query = graphql`
  query SearchFormLocationsQuery($search: String) {
    allLocations(search: $search, first: 20) {
      edges {
        node {
          locationId
          name
        }
      }
    }
  }
`;

const disabledDepartureDate = currentDate =>
  currentDate < moment().startOf("day");

class SearchForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      from: props.from,
      to: props.to,
      date: props.date,
    };
  };

  renderAutocompleteFrom = ({ error, props }: Object) => {
    const { from } = this.state;

    return (
      <AutoComplete
        value={from}
        onSearch={this.handleSearchFrom}
        onSelect={this.changeFrom}
      >
        {props &&
        props.allLocations &&
        props.allLocations.edges.map(edge => (
          <AutoComplete.Option
            key={edge.node.locationId}
            value={edge.node.locationId}
          >
            {edge.node.name}
          </AutoComplete.Option>
        ))}
      </AutoComplete>
    );
  };

  renderAutocompleteTo = ({ error, props }) => {
    const { to } = this.state;

    return (
      <AutoComplete
        value={to}
        onSearch={this.handleSearchTo}
        onSelect={this.changeTo}
      >
        {props &&
        props.allLocations &&
        props.allLocations.edges.map(edge => (
          <AutoComplete.Option
            key={edge.node.locationId}
            value={edge.node.locationId}
          >
            {edge.node.name}
          </AutoComplete.Option>
        ))}
      </AutoComplete>
    );
  };

  handleSearchTo = (to: string) => {
    this.setState({to});
  };

  changeFrom = (value: string, option: Object) => {
    this.setState({ from: option.props.children });
  };

  changeTo = (value: string, option: Object) => {
    this.setState({ to: option.props.children });
  };

  handleSearchFrom = (from: string) => {
    this.setState({from});
  };

  changeDate = (date: Object, dateString: string) => {
    this.setState({ date: dateString });
  };

  onSubmit = () => {
    if (!this.state.from || !this.state.to) {
      return;
    }

    this.props.onSubmit(this.state);
  };

  render = () => {
    const { from, to, date } = this.state;

    return (
      <div>
        <Row type="flex" justify="space-around" align-items="center">
          <Col>
            <QueryRenderer
              environment={environment}
              query={query}
              render={this.renderAutocompleteFrom}
              variables={{ search: from }}
            />
          </Col>
          <Col>
            <QueryRenderer
              environment={environment}
              query={query}
              render={this.renderAutocompleteTo}
              variables={{ search: to }}
            />
          </Col>
          <Col>
            <Form.Item label="Departure" colon>
              <DatePicker
                allowClear={false}
                disabledDate={disabledDepartureDate}
                onChange={this.changeDate}
                value={moment.utc(date, dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col>
            <Button onClick={this.onSubmit}>Search</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchForm;

