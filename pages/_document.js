import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { initStore } from 'store'
// import GoogleAnalyticsTag from 'components/GoogleAnalyticsTag'

// 
// Custom document for pre-rendered code on server
// 
export default class MyDocument extends Document {
  static getInitialProps ({ renderPage, req }) {
    // Render styled components on server
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    // Init MobX store
    const isServer = !!req
    const store = initStore(isServer)

    return {
      ...page,
      styleTags,
      isServer,
      lastUpdate: store.lastUpdate,
    }
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
        </Head>
        {/*<GoogleAnalyticsTag trackingId={'UA-76371065-1'} />*/}
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
