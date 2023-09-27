import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='es_PE' className='notranslate' translate='no'>
        <Head>
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
                fbq('init', ${process.env.NEXT_PUBLIC_FB_PIXEL_ID_MAIN});
              `
            }}
          />
          {/* This site is converting visitors into subscribers and customers with  - https://app.respond.io */}
          <script
            id='respondio__widget'
            src='https://cdn.respond.io/webchat/widget/widget.js?cId=91468e0a7ac078cb31aca9f170c31687e3c4f1fe4b6b27ab1cfd30e7ef2eda19'
          ></script>
          {/* https://app.respond.io */}
          <noscript>
            <img
              height='1'
              width='1'
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID_MAIN}&ev=PageView&noscript=1`}
            />
          </noscript>
          <link rel='icon' href='/favicon.ico' type='image/png' />
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
