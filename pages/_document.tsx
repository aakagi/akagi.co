import React from 'react';
import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface Props {
  styleTags: Array<React.ReactElement<{}>>;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return {
      ...initialProps,
      ...page,
      styleTags,
    };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
