import React, { Fragment } from "react";
import { Col, Row, Avatar } from "antd";
import idx from "idx";

const Airlines = props => {
  const legs = props.legs || [];
  return (
    <Fragment>
      {legs.map(leg => {
        if (!leg) return null;
        const logoUrl = idx(leg, _ => _.airline.logoUrl);
        const airlineName = idx(leg, _ => _.airline.name) || "";
        return (
          <Row key={leg.id} style={{ marginBottom: 10 }}>
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={airlineName}
                width={32}
                height={32}
                style={{ marginRight: 10 }}
              />
            ) : (
              <Avatar shape="square">{airlineName}</Avatar>
            )}
            <span>{airlineName}</span>
          </Row>
        );
      })}
    </Fragment>
  );
};

export default Airlines;
