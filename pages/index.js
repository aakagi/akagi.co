import React from "react";
import Head from "next/head";

import GlobalStyle from "components/GlobalStyle";
import Home from "compounds/Home";

export default function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>Home · Alex Akagi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />

      <GlobalStyle />
    </div>
  );
}
