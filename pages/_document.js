import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import GoogleAnalyticsTag from 'components/GoogleAnalyticsTag'

// For styled components + Next.js SSR prerender styles
export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        {/*<GoogleAnalyticsTag
          trackingId={'UA-76371065-1'}
        />*/}
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
