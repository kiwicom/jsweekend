// @flow

import * as React from "react";
import { Col, Row, Card } from "antd";

import resolveScopedStyles from "../../utils/resolveScopedStyles";

const cardStyles = resolveScopedStyles(
  <scope>
    <style jsx>{`
      .card {
        margin-top: 6px;
      }
    `}</style>
  </scope>
);

const Leg = () => (
  <Card
    title="Mon 26 Mar — Tue 27 Mar"
    className={`card ${cardStyles.className}`}
  >
    <Row type="flex" justify="space-between">
      <Col>
        <Row>
          <div>15:05</div>
        </Row>
        <Row>
          <div>17:55</div>
        </Row>
      </Col>
      <Col>
        <Row>
          <div>Faro FAO</div>
        </Row>
        <Row>
          <div>London LTN</div>
        </Row>
      </Col>
    </Row>
    {cardStyles.styles}
  </Card>
);

export default Leg;
