import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../styles/Nosotros.module.scss';

const Nosotros = () => {
  return (
    <>
      <Head>
        <title>Conoce Instakash</title>
        <meta name='title' content='Conoce Instakash | Casa de Cambio Online' />
        <meta name='description' content='Conoce la razones de por qué escoger a Instakash para realizar tus cambio de dólares a soles' />
        <meta httpEquiv='content-language' content='es_PE' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://instakash.net/nosotros' />
        <meta name='author' content='Instakash' />
        <meta name='url' content='https://instakash.net/nosotros' />

        <meta property='og:title' content='Conoce Instakash | Casa de Cambio Online' />
        <meta property='og:site_name' content='Instakash' />
        <meta property='og:url' content='https://instakash.net/nosotros' />
        <meta property='og:description' content='Conoce la razones de por qué escoger a Instakash para realizar tus cambio de dólares a soles' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='' />
      </Head>
      <section className={styles.About}>
        <div className='container section-wrapper text-center mt-6 mb-8'>
          <h1 className={styles.Title}>Instakash</h1>
          <h3 className={styles.Subtitle}>La Fintech del futuro</h3>
          <hr className='mx-auto mb-8' />
          <p className='mb-6 px-4 md:w-2/3 mx-auto'>
            Somos Instakash casa de cambio online del Perú. Trabajamos para darte la mejor experiencia de cambio fácil, segura y con la mejor tasa del mercado.
          </p>
          <p className='mb-6'>Busca en nuestra sección de beneficios cupones con puntos a tu favor para seguir mejorando tu tasa.</p>

          <p className='mb-6'>
            Desde hace 3 años Instakash es parte del ecosistema Fintech del Perú y a la fecha más de 20.000 usuarios que han confiado en nosotros, moviendo más de 574 millones de
            soles.
          </p>

          <p className='mb-6'>
            <strong>Con la mejor tasa comienza el cambio fácil y seguro.</strong> <br /> Cambia con Instakash.
          </p>
          <h3>
            <b>¡Síguenos!</b>
          </h3>
          <div className='flex items-center justify-center mt-6'>
            <a href='https://www.instagram.com/instakashnet' target='_blank' rel='noopener noreferrer' className='mx-3'>
              <Image width={45} height={45} alt='Instakash instagram' src='/images/social/instagram-green.svg' />
            </a>
            <a href='https://www.facebook.com/people/Instakash/100063764447135/' target='_blank' rel='noopener noreferrer' className='mx-3'>
              <Image width={45} height={45} alt='Instakash facebook' src='/images/social/facebook-green.svg' />
            </a>
            <a href='https://www.linkedin.com/company/71140162/' target='_blank' rel='noopener noreferrer' className='mx-3'>
              <Image width={45} height={45} alt='Instakash linkedin' src='/images/social/linkedin-green.svg' />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.WhyUs}>
        <div className='container section-wrapper md:pt-16 pb-12 md:pb-56'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <article>
              <h2 className={styles.Title}>¿Por qué elegírnos?</h2>
              <h3 className={styles.Subtitle}>Estas son las razones que consideramos más importantes</h3>
              <ul className='mt-4 md:mt-10'>
                <li>
                  <FaCheckCircle size={25} className='mr-3' />
                  <span>
                    Porque valoramos tu dinero, por eso te ofrecemos
                    <strong> la mejor tasa de cambio del Perú</strong>.
                  </span>
                </li>
                <li>
                  <FaCheckCircle size={35} className='mr-3' />
                  <span>
                    Porque estamos conscientes de que mereces lo mejor, por eso nuestra plataforma es <b>100% amigable, sencilla y de confianza.</b>
                  </span>
                </li>
                <li>
                  <FaCheckCircle size={30} className='mr-3' />
                  <span>Porque nos importa que mejores tus finanzas, por eso desarrollamos diversos servicios accesibles y de calidad.</span>
                </li>
                <li>
                  <FaCheckCircle size={35} className='mr-3' />
                  <span>
                    Porque queremos que te sientas apoyado financieramente, por eso brindamos <strong>soluciones financieras innovadoras y revolucionaras.</strong>
                  </span>
                </li>
              </ul>
            </article>
            <Image className='self-center place-self-center' src='/images/illustrations/why-us.svg' width={300} height={300} alt='Casa de cambio del Perú' />
          </div>
        </div>
      </section>
      <section className='container section-wrapper text-center pt-12'>
        <h2 className={styles.Title}>¡Empieza a usar nuestros servicios!</h2>
        <h3 className={styles.Subtitle}>Sómos la Fintech del futuro</h3>
        <hr className='mx-auto' />
        <p className='my-6 px-4 md:w-2/3 mx-auto'>
          Tenemos muchas cosas que ofrecerte. Con seguridad y transparencia te brindamos beneficios diseñados para tu tranquilidad financiera.{' '}
          <b>¡Regístrate en nuestra plataforma y comienza a realizar tus operaciones, si ya estas registrado genial!</b>, podrás compartir tu código de afiliado con amigos y
          empezar a ganar.
        </p>
        <a href='https://app.instakash.net' className={styles.StartButton}>
          Ingresar
        </a>
      </section>
      <Script
        strategy='afterInteractive'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org/", "@type": "WebSite",
            "url": "https://instakash.net/nosotros", "potentialAction": {
            "@type": "SearchAction",
            "target": "https://instakash.net/nosotros{search_term_string}", "query-input": "required name=search_term_string"
            } }
          `,
        }}
      />
    </>
  );
};

export default Nosotros;
