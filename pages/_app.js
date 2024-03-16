import "../styles/global.scss";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      {/* <!-- Meta Pixel Code --> */}
      <Script
        id="facebook-pixel"
        dangerouslySetInnerHTML={{
          __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '299117336217786');
                fbq('track', 'PageView');
              `,
        }}
      />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-6280K5FJRS`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6280K5FJRS', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </SessionProvider>
  );
};

export default App;
