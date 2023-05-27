import Head from 'next/head';
// import Link from 'next/link';
import Script from 'next/script';
// COMPONENTS
// import { BaseModal } from '../src/components/UI/Modal';
import styles from '../styles/beneficios.module.scss';
import { getBenefits } from '../sanity/utils';
import Layout from '../src/components/layout/Layout';
import BenefitItem from '../src/components/benefits/BenefitItem';

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
  // const [modalType, setModalType] = useState(''),
  //   [isModalOpen, setIsModalOpen] = useState(false);

  // // HANDLERS
  // // const openModalHandler = (type) => {
  // //   setModalType(type);
  // //   setIsModalOpen(true);
  // // };

  // // const closeModalHandler = () => {
  // //   setModalType('');
  // //   setIsModalOpen(false);
  // // };

  return (
    <>
      <Head>
        <title>Beneficios de Cambiar Dólares a Soles en Instakash</title>
        <meta name='title' content='Beneficios de Cambiar en Instakash Casa de Cambio Online' />
        <meta name='description' content='Aprovecha los cupones, sorteos y más beneficios que te da Instakash por cambia dólares a Soles. ¡Enterate Aquí!' />
        <meta httpEquiv='content-language' content='es_PE' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://instakash.net/beneficios' />
        <meta name='author' content='Instakash' />
        <meta name='url' content='https://instakash.net/beneficios' />

        <meta property='og:title' content='Beneficios de Cambiar Dólares a Soles en Instakash' />
        <meta property='og:site_name' content='Instakash' />
        <meta property='og:url' content='https://instakash.net/beneficios' />
        <meta property='og:description' content='Aprovecha los cupones, sorteos y más beneficios que te da Instakash por cambia dólares a Soles' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='' />
      </Head>
      <section>
        <div className='container section-wrapper text-center mt-16 mb-24'>
          <h1 className={styles.Title}>Beneficios</h1>
          <hr className='mx-auto w-1/3 my-6' />
          <h3 className={styles.Subtitle}>
            Todos los meses tenemos diferentes formas de ayudarte a conseguir las mejores tasas <br /> y que puedas sacar el mayor provecho a tu dinero.
          </h3>

          <article className={styles.PromotionsWrapper}>
            {benefits.length > 0 ? benefits.map((benefit) => <BenefitItem key={benefit._id} benefit={benefit} />) : <p>No hay beneficios activos en este momento</p>}
          </article>
        </div>
      </section>
      {/* <BaseModal isOpen={isModalOpen} onClose={closeModalHandler}>
        {modalType === 'supercoupons' ? (
          <SuperCouponsModal />
        ) : (
          <video controls loop muted style={{ width: '100%' }}>
            <source src={modalType === 'usercode' ? '/videos/refer_a_friend.mp4' : '/videos/coupon_usage.mp4'} />
          </video>
        )}
      </BaseModal> */}
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
          `,
        }}
      />
    </>
  );
}

Promociones.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// const SuperCouponsModal = () => (
//   <div className='modal-body'>
//     <h3 className='modal-title'>Supermontos INSTAKASH</h3>
//     <p className='mb-2'>
//       Cuando desees cambiar montos desde 5000 USD en adelante, te ofrecemos hasta 3 cupones para que ahorres y obtengas una de las mejores tasas del mercado y sin límite de uso.
//     </p>
//     <ul>
//       <li>
//         Para montos desde 5MIL USD usa nuestro cupón <b>DESDE5000</b>
//       </li>
//       <li>
//         Para montos desde 10MIL USD usa nuestro cupón <b>DESDE10000</b>
//       </li>
//       <li>
//         Para montos desde 20MIL USD usa nuestro cupón <b>DESDE20000</b>
//       </li>
//     </ul>
//     <Link className='mx-auto mt-6 block' href='/terminos-y-condiciones#cupones'>
//       <b>Conoce más sobre el uso de nuestros cupones aquí</b>
//     </Link>
//   </div>
// );
