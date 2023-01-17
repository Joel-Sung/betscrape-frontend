import '@/styles/globals.css';
// import * as dotenv from 'dotenv';
import type { AppProps } from 'next/app';
// dotenv.config();
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
