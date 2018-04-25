import NextHead from 'next/head'
import Router from 'next/router'

const dev = process.env.NODE_ENV !== 'production'

const GoogleAnalyticsTag = ({ gaTrackingId }) => {
  // Tracks the page location etc for GA on route change
  Router.onRouteChangeComplete = () => {
    if (window.gtag) {
      window.gtag('config', window.gaTrackingId, {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      })
    }
  }
  
  return dev ? <div /> : (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
      <meta name="google-site-verification" content="MoopvqQmoDTts7VxfGEDuplqnFeErmfT1jQVKgdJIYk" />
      
      {/*
        This ensures that the first page view gets sent to GA. All subsequent
        page views will be handled by the `Router.onRouteChangeComplete`
        method we set up above.
      */}

      <script dangerouslySetInnerHTML={{ __html: `
        window.gaTrackingId = '${gaTrackingId}'
        window.dataLayer = window.dataLayer || []
        function gtag(){
          dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', '${gaTrackingId}')
      `}} />
    </Helmet>
  )
}

export default GoogleAnalyticsTag
