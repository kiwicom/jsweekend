// @flow

import * as React from "react";
import moment from "moment";
import { Form, Row, Col, DatePicker, AutoComplete, Button } from "antd";

type Props = {
  from: string,
  to: string,
  date: string,
  onSubmit: ({| from: string, to: string, date: string |}) => void,
  locations?: Object
};

type State = {|
  from: string,
  to: string,
  date: string
|};

const dateFormat = "YYYY-MM-DD";

const disabledDepartureDate = currentDate =>
  currentDate < moment().startOf("day");

class SearchForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      from: props.from,
      to: props.to,
      date: props.date
    };
  }

  changeFrom = (value: string, option: Object) => {
    this.setState({ from: option.props.children });
  };

  handleSearchFrom = (from: string) => {
    this.setState({ from });
  };

  handleChangeTo = (value: string, option: Object) => {
    this.setState({ to: option.props.children });
  };

  handleSearchTo = (to: string) => {
    this.setState({ to });
  };

  changeDate = (date: Object, dateString: string) => {
    this.setState({ date: dateString });
  };

  handleSearchClick = () => {
    if (!this.isSearchable()) {
      return;
    }

    this.props.onSubmit(this.state);
  };

  isSearchable = () => {
    const state = this.state;

    return state.from && state.to && state.date;
  };

  generateOptions = () => {
    const props = this.props;
    const Option = AutoComplete.Option;

    if (props.locations && props.locations.edges.length) {
      const nodes = props.locations.edges.map(edge => edge.node);
      return nodes.map(node => (
        <Option key={node.locationId} value={node.locationId}>
          {node.name}
        </Option>
      ));
    }
    return [];
  };

  render() {
    const state = this.state;

    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <Form.Item label="From" colon>
              <AutoComplete
                value={state.from}
                onSearch={this.handleSearchFrom}
                onSelect={this.changeFrom}
                filterOption
              >
                {this.generateOptions()}
              </AutoComplete>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="To" colon>
              <AutoComplete
                value={state.to}
                onSearch={this.handleSearchTo}
                onSelect={this.handleChangeTo}
                filterOption
              >
                {this.generateOptions()}
              </AutoComplete>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Departure" colon>
              <DatePicker
                allowClear={false}
                disabledDate={disabledDepartureDate}
                onChange={this.changeDate}
                value={moment.utc(state.date, dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col>
            <Button
              type="primary"
              onClick={this.handleSearchClick}
              disabled={!this.isSearchable()}
            >
              Search
            </Button>
          </Col>
        </Row>
        <style jsx>{`
          div {
            padding: 10px;
            margin: 10px 0;
            background-color: #fafbfc;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </div>
    );
  }
}

export default SearchForm;
