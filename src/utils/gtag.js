// VIA https://medium.com/frontend-digest/using-nextjs-with-google-analytics-and-typescript-620ba2359dea

const __PROD__ = process.env.NODE_ENV === 'production'

export const GA_TRACKING_ID = 'UA-76371065-1'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (__PROD__) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (__PROD__) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
