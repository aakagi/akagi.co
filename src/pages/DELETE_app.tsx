import 'tailwindcss/tailwind.css'
import useGoogleAnalytics from '../hooks/use-google-analytics'

export default function MyApp({ Component, pageProps }: any) {
  useGoogleAnalytics()
  return <Component {...pageProps} />
}
