import React from "react";
import Head from "next/head";

import GlobalStyle from "components/GlobalStyle";
import Seo from "components/Seo";
import Home from "compounds/Home";

export default function HomePage() {
  return (
    <div className="container">
      <Seo title="Home · Alex Akagi" />

      <Home />

      <GlobalStyle />
    </div>
  );
}
