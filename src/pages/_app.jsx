import 'tailwindcss/tailwind.css'
import useGoogleAnalytics from 'hooks/useGoogleAnalytics'

export default function MyApp({ Component, pageProps }) {
  useGoogleAnalytics()
  return <Component {...pageProps} />
}
