import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
// COMPONENTS
import Card from '../src/components/UI/Card';
import { BaseModal } from '../src/components/UI/Modal';
import styles from '../styles/beneficios.module.scss';

const Promociones = () => {
  const [modalType, setModalType] = useState(''),
    [isModalOpen, setIsModalOpen] = useState(false);

  // HANDLERS
  const openModalHandler = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalType('');
    setIsModalOpen(false);
  };

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
            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src='/images/beneficios/cupon-mes.webp' alt='Mejora el tipo de cambio con INSTAKASH usando nuestro cupón del mes.' layout='fill' objectFit='cover' />
              </div>
              <div className={styles.Info}>
                <h3>Cupón del mes</h3>
                <h2>INSTAVERANO23</h2>
                <p className={styles.Date}>
                  <time dateTime='01-01-2023'>01/01</time> al <time dateTime='30-04-2023'>30/04</time> del 2023
                </p>
                <p>
                  Celebra todo el verano 2023 realizando tus cambios con el cupón INSTAVERANO23 y obtén 10 puntos a favor de tu cambio. Válido para 2 cambios a partir de $100 USD.
                </p>
                <div className={styles.Actions}>
                  <a href='https://app.instakash.net/login' className='mr-4'>
                    Acceder y usar cupón
                  </a>
                  <button type='button' onClick={() => openModalHandler('coupons')}>
                    ¿Cómo uso los cupones?
                  </button>
                </div>
              </div>
            </Card>

            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src='/images/beneficios/empresas.webp' alt='Plan de empresas Instakash' layout='fill' objectFit='cover' />
              </div>
              <div className={styles.Info}>
                <h3>Plan de empresas</h3>
                <h2>AFÍLIATE</h2>
                <p>
                  Afíliate a nuestro Plan para Empresas Afiliadas y recibe beneficios exclusivos. Haz click en nuestro botón de WhatsApp, nuestro equipo de servicio al cliente está
                  para ayudarte.
                </p>
                <div className={styles.Actions}>
                  <a href='https://wa.link/wekqza' target='_blank' rel='noopener noreferrer' className='mr-4'>
                    Afiliarme
                  </a>
                </div>
              </div>
            </Card>

            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src='/images/beneficios/supermontos.webp' alt='Cupones para cambiar online con SUPERMONTOS' layout='fill' objectFit='contain' />
              </div>
              <div className={styles.Info}>
                <h3>Cupones activos</h3>
                <h2>SUPERMONTOS</h2>
                <p>Usa tus cupones supermontos para obtener el mejor descuento en el tipo de cambio para tus cambios desde 10000 USD.</p>
                <div className={styles.Actions}>
                  <a href='https://app.instakash.net/login' className='mr-4'>
                    Acceder y usar cupón
                  </a>
                  <button type='button' onClick={() => openModalHandler('supercoupons')}>
                    ¿Cuales son los cupones?
                  </button>
                </div>
              </div>
            </Card>

            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src='/images/beneficios/kash.webp' alt='Gana KASH cambiando dólares online' layout='fill' objectFit='contain' />
              </div>
              <div className={styles.Info}>
                <h3>Refiere y</h3>
                <h2>GÁNA KASH</h2>
                <p>Invita a tus amigos a Instakash y con su primer cambio te ganas 2 KASH y tu referido un descuento en la tasa.</p>
                <div className={styles.Actions}>
                  <a href='https://app.instakash.net/login' className='mr-4'>
                    Acceder y referir
                  </a>
                  <button type='button' onClick={() => openModalHandler('usercode')}>
                    ¿Como usar tu código?
                  </button>
                </div>
              </div>
            </Card>
          </article>
        </div>
      </section>
      <BaseModal isOpen={isModalOpen} onClose={closeModalHandler}>
        {modalType === 'supercoupons' ? (
          <SuperCouponsModal />
        ) : (
          <video controls loop muted style={{ width: '100%' }}>
            <source src={modalType === 'usercode' ? '/videos/refer_a_friend.mp4' : '/videos/coupon_usage.mp4'} />
          </video>
        )}
      </BaseModal>
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
};

const SuperCouponsModal = () => (
  <div className='modal-body'>
    <h3>Ahorra con nuestros Super montos</h3>
    <p>
      Cuando desees cambiar montos desde 5000 USD en adelante, te ofrecemos hasta 3 cupones para que ahorres y obtengas una de las mejores tasas del mercado y sin límite de uso.
    </p>
    <ul>
      <li>
        Para montos desde 10MIL USD usa nuestro cupón <b>DESDE10000</b>
      </li>
      <li>
        Para montos desde 20MIL USD usa nuestro cupón <b>DESDE20000</b>
      </li>
    </ul>
    <Link className='mx-auto mt-6 block' href='/terminos-y-condiciones#cupones'>
      <a>Conoce más sobre el uso de nuestros cupones aquí</a>
    </Link>
  </div>
);

export default Promociones;
