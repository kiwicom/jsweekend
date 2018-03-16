// @flow

import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Kiwi.com search flights app</title>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.1/antd.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
