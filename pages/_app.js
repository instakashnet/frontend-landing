import { useEffect } from "react";
import TagManager from "react-gtm-module";
import FacebookPixel from "../src/components/FacebookPixel";
// import Layout from '../src/components/layout/Layout';

import "../styles/tailwind.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MVR37S9" });
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <FacebookPixel>
      <Component {...pageProps} />
    </FacebookPixel>
  );
}

export default MyApp;
