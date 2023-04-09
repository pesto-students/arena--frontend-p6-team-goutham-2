import '@/styles/globals.css';
import {NextPageWithLayout } from '../lib/next/types'
import "./../pages/customcss.css";
import "../styles/calendar.css"
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
