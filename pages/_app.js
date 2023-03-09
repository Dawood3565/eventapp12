import '@/styles/globals.css'
import Navbar from '/pages/navbar'
export default function App({ Component, pageProps }) {
  return <> <Navbar/> <Component {...pageProps} /></>
}
