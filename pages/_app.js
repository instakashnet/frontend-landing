import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import FacebookPixel from '../src/components/FacebookPixel';
import Layout from '../src/components/layout/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MVR37S9' });
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
