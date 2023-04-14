import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head ><script src="https://checkout.razorpay.com/v1/checkout.js"></script><link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
