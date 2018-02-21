// @flow

import * as React from 'react';
import moment from 'moment';
import { Form, Row, Col, Input, DatePicker } from 'antd';

const disabledDepartureDate = (currentDate) => currentDate < moment().startOf('day');

const SearchForm = () => {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <Form.Item label='From' colon {...formItemLayout}>
            <Input/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label='To' colon {...formItemLayout}>
            <Input/>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item label='Departure' colon {...formItemLayout}>
            <DatePicker disabledDate={disabledDepartureDate} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label='Return' colon {...formItemLayout}>
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default SearchForm;
