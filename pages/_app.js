import { useEffect } from "react";
import { useRouter } from "next/router";
import { pdfjs } from "react-pdf";
import * as gtag from "../utils/gtag";
import Layout from "../components/layout/Layout";
import FacebookPixel from "../components/FacebookPixel";

import "../styles/globals.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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

  return (
    <FacebookPixel>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FacebookPixel>
  );
}

export default MyApp;
