// @flow

import * as React from "react";
import Head from "next/head";

import App from "./../components/App";

export default () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.1/antd.min.css"
      />
    </Head>
    <App />
    <style jsx>{`
      div {
        padding-top: 50px;
      }
    `}</style>
  </div>
);
