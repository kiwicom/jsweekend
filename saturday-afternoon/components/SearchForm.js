// @flow

import * as React from "react";
import moment from "moment";
import { Form, Row, Col, Input, DatePicker, AutoComplete } from "antd";

type Props = {
  from: string,
  to: string,
  date: string,
  changeFrom: (value: string) => void,
  changeTo: (value: string) => void,
  changeDate: (date: Object, dateString: string) => void
};

const disabledDepartureDate = currentDate =>
  currentDate < moment().startOf("day");

const SearchForm = (props: Props) => {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  };
  const dateFormat = "YYYY-MM-DD";

  return (
    <div>
      <Row>
        <Col span={8}>
          <Form.Item label="From" colon {...formItemLayout}>
            <AutoComplete
              value={props.from}
              onSelect={props.changeFrom}
              dataSource={["Paris", "Lisbon"]}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="To" colon {...formItemLayout}>
            <AutoComplete
              value={props.to}
              onSelect={props.changeTo}
              dataSource={["Berlin", "Amsterdam"]}
            />
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
