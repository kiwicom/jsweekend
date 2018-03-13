// @flow

import * as React from "react";
import moment from "moment";
import { Form, Row, Col, DatePicker, AutoComplete } from "antd";

type Props = {
  from: string,
  to: string,
  date: string,
  changeFrom: (value: string, option: Object) => void,
  changeTo: (value: string, option: Object) => void,
  changeDate: (date: Object, dateString: string) => void,
  locations?: Object
};

const disabledDepartureDate = currentDate =>
  currentDate < moment().startOf("day");

const SearchForm = (props: Props) => {
  const dateFormat = "YYYY-MM-DD";

  const Option = AutoComplete.Option;
  const generateOptions = () => {
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

  return (
    <div>
      <Row type="flex" justify="space-between" align="middle">
        <Col>
          <Form.Item label="From" colon>
            <AutoComplete
              value={props.from}
              onSelect={props.changeFrom}
              filterOption
            >
              {generateOptions()}
            </AutoComplete>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="To" colon>
            <AutoComplete
              value={props.to}
              onSelect={props.changeTo}
              filterOption
            >
              {generateOptions()}
            </AutoComplete>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Departure" colon>
            <DatePicker
              disabledDate={disabledDepartureDate}
              onChange={props.changeDate}
              value={moment.utc(props.date, dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
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
};

export default SearchForm;
