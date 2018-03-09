// @flow

import * as React from "react";
import moment from "moment";
import { Form, Row, Col, Input, DatePicker, AutoComplete } from "antd";
import uniqBy from "lodash/uniqBy";

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
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  };
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
      <Row>
        <Col span={8}>
          <Form.Item label="From" colon {...formItemLayout}>
            <AutoComplete
              value={props.from}
              onSelect={props.changeFrom}
              filterOption
            >
              {generateOptions()}
            </AutoComplete>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="To" colon {...formItemLayout}>
            <AutoComplete
              value={props.to}
              onSelect={props.changeTo}
              filterOption
            >
              {generateOptions()}
            </AutoComplete>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Departure" colon {...formItemLayout}>
            <DatePicker
              disabledDate={disabledDepartureDate}
              onChange={props.changeDate}
              value={moment(props.date, dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
        </Col>
      </Row>
      <style jsx>{`
        div {
          padding: 20px 0;
        }
      `}</style>
    </div>
  );
};

export default SearchForm;
