import Head from "next/head";
// import Link from 'next/link';
import Script from "next/script";
// COMPONENTS
// import { BaseModal } from '../src/components/UI/Modal';
import styles from "../styles/beneficios.module.scss";
import { getBenefits } from "../sanity/utils";
import Layout from "../src/components/layout/Layout";
import BenefitItem from "../src/components/benefits/BenefitItem";

export const getStaticProps = async () => {
  let benefits = [];

  try {
    const benefitsResults = await getBenefits();

    if (benefitsResults?.length > 0) {
      benefits = benefitsResults;
    }
  } catch (error) {
    console.error(error);
  }

  return { props: { benefits } };
};

export default function Promociones({ benefits = [] }) {
  return (
    <>
      <Head>
        <title>Beneficios de Cambiar Dólares a Soles en Instakash</title>
        <meta name='title' content='Beneficios de Cambiar en Instakash Casa de Cambio Online' />
        <meta
          name='description'
          content='Aprovecha los cupones, sorteos y más beneficios que te da Instakash por cambia dólares a Soles. ¡Enterate Aquí!'
        />
        <meta httpEquiv='content-language' content='es_PE' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://instakash.net/beneficios' />
        <meta name='author' content='Instakash' />
        <meta name='url' content='https://instakash.net/beneficios' />

        <meta property='og:title' content='Beneficios de Cambiar Dólares a Soles en Instakash' />
        <meta property='og:site_name' content='Instakash' />
        <meta property='og:url' content='https://instakash.net/beneficios' />
        <meta
          property='og:description'
          content='Aprovecha los cupones, sorteos y más beneficios que te da Instakash por cambia dólares a Soles'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='' />
      </Head>
      <section>
        <div className='container section-wrapper text-center mt-16 mb-24'>
          <h1 className={styles.Title}>Beneficios</h1>
          <hr className='mx-auto w-1/3 my-6' />
          <h3 className={styles.Subtitle}>
            Todos los meses tenemos diferentes formas de ayudarte a conseguir las mejores tasas <br /> y que puedas sacar el mayor provecho
            a tu dinero.
          </h3>

          <article className={styles.PromotionsWrapper}>
            {benefits.length > 0 ? (
              benefits.map((benefit) => <BenefitItem key={benefit._id} benefit={benefit} />)
            ) : (
              <p>No hay beneficios activos en este momento</p>
            )}
          </article>
        </div>
      </section>
      <Script
        strategy='afterInteractive'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org/", "@type": "WebSite",
            "url": "https://instakash.net/beneficios", "potentialAction": {
            "@type": "SearchAction",
            "target": "https://instakash.net/beneficios{search_term_string}", "query-input": "required name=search_term_string"
            } }
          `
        }}
      />
    </>
  );
}

Promociones.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
