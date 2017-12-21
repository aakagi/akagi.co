export default () => (
  <style jsx global>{`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
    }

    ol, ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    /* Reset 'button' and button-style 'input' default styles */
    input[type="submit"],
    input[type="reset"],
    input[type="button"],
    button {
        background: none;
        border: 0;
        color: inherit;
        /* cursor: default; */
        font: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        -webkit-appearance: button; /* for input */
        -webkit-user-select: none; /* for button */
           -moz-user-select: none;
            -ms-user-select: none;
    }
    input::-moz-focus-inner,
    button::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    /* Make 'a' like a button */
    [role="button"] {
        color: inherit;
        cursor: default;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        white-space: pre;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
    }

    /* Base CSS */
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: gotham, helvetica, arial, sans-serif;
    }

    .scraps {
      font-size: 30px;
      margin-top: 6px;
    }
  `}</style>
)
