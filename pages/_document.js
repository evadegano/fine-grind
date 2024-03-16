import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google tag (gtag.js) --> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-6280K5FJRS" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        {/* <!-- Meta Pixel Code --> */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=299117336217786&ev=PageView&noscript=1"
            alt="Meta pixel"
          />
        </noscript>
        {/* <!-- Google One Tap --> */}
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
