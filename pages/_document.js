import Document, { Head, Html, Main, NextScript } from "next/document";

const { GA_TRACKING_ID, FB_PIXEL_ID_MAIN, FB_PIXEL_ID_WEBTILIA } = process.env;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es_PE" className="notranslate" translate="no">
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/png" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
          <script
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
                fbq('init', ${FB_PIXEL_ID_MAIN});
                fbq('init', ${FB_PIXEL_ID_WEBTILIA});
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img height="1" width="1" style={{ display: "none" }} src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID_MAIN}&ev=PageView&noscript=1`} />
            <img height="1" width="1" style={{ display: "none" }} src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID_WEBTILIA}&ev=PageView&noscript=1`} />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
