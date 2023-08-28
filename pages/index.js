import Head from "next/head";
import Image from "next/legacy/image";
import Script from "next/script";
import { FaCheckCircle } from "react-icons/fa";
// import Callout from "../src/components/UI/Callout";
import Card from "../src/components/UI/Card";
import AdsCarousel from "../src/components/UI/carousels/Ads";
import BenefitsCarousel from "../src/components/UI/carousels/Benefits";
import { BaseModal } from "../src/components/UI/Modal";
// CLASSES
import styles from "../styles/Home.module.scss";
import Layout from "../src/components/layout/Layout";
import { getBanners, getBenefits, getPopup } from "../sanity/utils";
import Counters from "../src/components/home/Counters";
import Steps from "../src/components/home/Steps";
import KashSection from "../src/components/home/KashSection";
import MainBanner from "@components/home/main-banner/MainBanner";

const Home = ({ benefits = [], popup = null, banners = [] }) => {
  return (
    <>
      <Head>
        <title>Casa de Cambio Online | Cambiar Dólares a Soles | Instakash</title>
        <meta name='title' content='Instakash Casa de Cambio Online | Cambia Dólares a Soles' />
        <meta
          name='description'
          content='Cambia dólares a Soles en la casa de cambio online que tiene el mejor tipo de cambio. Instakash es regulada por la SBS Cambia Seguro, Cambia aquí.'
        />
        <meta httpEquiv='content-language' content='es_PE' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://instakash.net/' />
        <meta name='author' content='InstaKash' />
        <meta name='url' content='https://instakash.net/' />

        <meta property='og:title' content='Casa de Cambio Online | Cambiar Dólares a Soles' />
        <meta property='og:site_name' content='Instakash' />
        <meta property='og:url' content='https://instakash.net/' />
        <meta property='og:description' content='Instakash es la casa de cambio online con el mejor tipo de cambio de dólares a soles.' />
        <meta property='og:type' content='https://instakash.net/' />
        <meta property='og:image' content='' />
      </Head>
      {/* <Callout type="info">
      <div className="container p-0">
        <p>
          A partir del 14/10/2022 por regulaciones de la SBS <b>solo se realizarán transferencias a cuentas del mísmo titular.</b>
        </p>
      </div>
    </Callout> */}

      <AdsCarousel banners={banners} />
      <MainBanner />
      <section className={styles.UsersSection}>
        <div className='container'>
          <div className={styles.BanksWrapper}>
            <Card className={styles.BankCard}>
              <div className='flex items-center'>
                <div className={styles.BankInfoCircle}>
                  <Image
                    src='/images/icons/thunder.svg'
                    width={30}
                    height={30}
                    alt='Cambia dólares online'
                    className={styles.BankInfoIcon}
                  />
                </div>
                <div>
                  <h3 className={styles.BanksInfoTitle}>
                    <strong>Cambia dólares online</strong>
                  </h3>
                  <p>Inmediato</p>
                </div>
              </div>
              <div className={styles.BanksInfoImageWrapper}>
                <Image src='/images/banks/interbank.svg' alt='Banco Interbank' width={80} height={25} />
                <Image src='/images/banks/bcp.svg' alt='Banco BCP' width={80} height={30} />
              </div>
            </Card>
            <Card className={styles.BankCard}>
              <div className='flex items-center'>
                <div className={styles.BankInfoCircle}>
                  <Image
                    src='/images/icons/horizontal-arrows.svg'
                    width={30}
                    height={30}
                    alt='Cambia dólares online'
                    className={styles.BankInfoIcon}
                  />
                </div>
                <div>
                  <h3 className={styles.BanksInfoTitle}>
                    <strong>Cambia dólares online</strong>
                  </h3>
                  <p>Hasta 24 horas</p>
                </div>
              </div>
              <div className={styles.BanksInfoImageWrapper}>
                <div className='mr-3'>
                  <Image src='/images/banks/scotiabank.svg' alt='Banco Scotiabank' width={90} height={40} />
                </div>
                <div className='mr-3'>
                  <Image src='/images/banks/bbva.svg' alt='Banco BBVA' width={70} height={25} />
                </div>
                <div className='mr-3'>
                  <Image src='/images/banks/pichincha.svg' alt='Banco Pichincha' width={70} height={25} />
                </div>
                <p>y otros</p>
              </div>
            </Card>
          </div>
          <Counters />
        </div>
      </section>
      <section className='container !my-24'>
        <div className='text-center'>
          <h2 className={styles.Title}>
            Beneficios de Instakash <br /> tu casa de cambio online
          </h2>
          <p className={styles.Subtitle}>En Instakash te ayudamos a tener un mejor tipo de cambio de forma simple.</p>
        </div>
        <BenefitsCarousel benefits={benefits} />
      </section>
      <Steps />
      <KashSection />
      <section className='container'>
        <div className={styles.AppWrapper}>
          <div className={styles.AppImage}>
            <Image src='/images/illustrations/app.png' alt='Descarga Instakash App' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.AppInfoWrapper}>
            <h2>
              Descarga Instakash App <br /> casa de cambio online
            </h2>
            <p>Con el mejor tipo de cambio comienza el cambio, fácil y seguro del Perú. Disponible para android y IOS.</p>
            <ul>
              <li>
                <FaCheckCircle size={20} className='mr-2' /> Notificaciones en el mejor momento para cambiar.
              </li>
              <li>
                <FaCheckCircle size={20} className='mr-2' /> Beneficios exclusivos para nuestros usuarios.
              </li>
              <li>
                <FaCheckCircle size={20} className='mr-2' /> Servicio al cliente personalizado cuando lo necesites.
              </li>
            </ul>
            <div className='flex items-center justify-center md:justify-start mt-6'>
              <a href='https://play.google.com/store/apps/details?id=net.instakash.app' className={styles.AppDownloadIcon}>
                <Image src='/images/illustrations/playstore.svg' alt='Descarga Instakash en play store' layout='fill' objectFit='contain' />
              </a>
              <a href='https://apps.apple.com/pe/app/instakash/id1601561803' className={styles.AppDownloadIcon}>
                <Image src='/images/illustrations/appstore.svg' alt='Descarga Instakash en app store' layout='fill' objectFit='contain' />
              </a>
            </div>
          </div>
        </div>
      </section>
      <BaseModal popup={popup} />

      <Script
        strategy='afterInteractive'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org/", "@type": "WebSite",
          "name": "InstaKash",
          "url": "https://instakash.net/", "potentialAction": {
          "@type": "SearchAction",
          "target": "{search_term_string}",
          "query-input": "required name=search_term_string"
          } }
        `
        }}
      />
    </>
  );
};

export async function getServerSideProps() {
  let benefits = [],
    banners = [],
    popup = null;

  try {
    benefits = await getBenefits();
    banners = await getBanners();
    popup = await getPopup();
  } catch (error) {
    console.log("Hay un error", error);
  }

  return {
    props: {
      benefits,
      popup,
      banners
    }
  };
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
