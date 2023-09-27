import { useEffect } from "react";
// import TagManager from "react-gtm-module";
import FacebookPixel from "../src/components/FacebookPixel";
import "../styles/tailwind.css";
import "../styles/globals.scss";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../src/libs/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <FacebookPixel>
        <Component {...pageProps} />
      </FacebookPixel>
    </>
  );
}

export default MyApp;
