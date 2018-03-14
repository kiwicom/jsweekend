// @flow

import React, { Component } from "react";

type Props = {
  message: string
};

const Error = ({ message }: Props) => (
  <div className="error">
    <h2>{message}</h2>
    <style jsx>{`
      .error {
        height: 100vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      h2 {
        font-size: 14px;
        font-weight: normal;
        line-height: inherit;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);

export default Error;
