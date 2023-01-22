import 'tailwindcss/tailwind.css'
import useGoogleAnalytics from '../hooks/useGoogleAnalytics'

export default function MyApp({ Component, pageProps }: any) {
  useGoogleAnalytics()
  return <Component {...pageProps} />
}
