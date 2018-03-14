// @flow

import React, { Component } from "react";

import Error from "./error";
import App from "./../components/App";

type Props = {
  error: string
};

export default class extends Component<Props> {
  static getInitialProps() {
    const env = process ? process.env.GRAPHQL_ENDPOINT_URL : null;
    if (!env) {
      return {
        error: "GRAPHQL_ENDPOINT_URL is not defined in .env file"
      };
    }
    return {};
  }
  render() {
    if (this.props.error) {
      return <Error message={this.props.error} />;
    }
    return (
      <div>
        <App />
        <style jsx>{`
          div {
            padding-top: 50px;
          }
        `}</style>
      </div>
    );
  }
}
