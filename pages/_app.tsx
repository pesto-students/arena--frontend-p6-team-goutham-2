import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {NextPageWithLayout } from '../lib/next/types'
import "./../pages/customcss.css";
import "../styles/calendar.css"
import 'bootstrap/dist/css/bootstrap.css'
type CustomAppProps = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
