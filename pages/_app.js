import { useEffect } from "react";
import TagManager from "react-gtm-module";
import FacebookPixel from "../components/FacebookPixel";
import Layout from "../components/layout/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MVR37S9" });
  }, []);

  return (
    <FacebookPixel>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FacebookPixel>
  );
}

export default MyApp;
