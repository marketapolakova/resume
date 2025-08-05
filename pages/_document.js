// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="cs">
        <Head>
          {/* favicon */}
          <link rel="icon" href="/logo.png" />
          {/* apple touch icon */}
          <link rel="apple-touch-icon" href="/logo.png" />
          {/* další globální link/meta, např. manifest */}
          <link rel="manifest" href="/manifest.json" />
          {/* viewport, SEO tagy, fonty… */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
