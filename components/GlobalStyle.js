import React from "react";

export default function GlobalStyle(props) {
  return (
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: gotham, helvetica, arial, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      p {
        margin: 0;
        padding: 0;
        line-height: 1.4;
        margin-bottom: 1em;
      }
    `}</style>
  );
}
