import React from 'react';
import { NextContext, NextComponentType } from 'next';
import App, { Container } from 'next/app'

interface AppProps {
  ctx: NextContext;
  Component: NextComponentType;
}

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }: AppProps) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
