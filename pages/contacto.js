import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import Head from 'next/head';
import Image from 'next/legacy/image';
import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import { Clock, Headphones, Mail, MapPin } from 'react-feather';
import Button from '../src/components/UI/Button';
import Checkbox from '../src/components/UI/form/Checkbox';
import Input from '../src/components/UI/form/Input';
import Textarea from '../src/components/UI/form/Textarea';
import { contactValidation } from '../src/helpers/validations';
import styles from '../styles/Contacto.module.scss';

const contacto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      const res = await emailjs.send('instakash_service', 'contact_template', values, 'user_HpWIiQWPXIgpMaV2NuEIB');
      if (res.status === 200) {
        setSent(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({ initialValues: { firstName: '', lastName: '', email: '', message: '', accept: false }, validationSchema: contactValidation, onSubmit });
  return (
    <>
      <Head>
        <title>Contacta con Instakash</title>
        <meta name='title' content='Contacto | Instakash Casa de Cambio Online' />
        <meta
          name='description'
          content='Mantente contactado con Instakash para tener el tipo de cambio del día y sobre nuestros servicios, cupones y promociones que tenemos para tí. Registrate'
        />
        <meta httpEquiv='content-language' content='es_PE' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://instakash.net/contacto' />
        <meta name='author' content='InstaKash' />
        <meta name='url' content='https://instakash.net/contacto' />

        <meta property='og:title' content='Contacto | Instakash Casa de Cambio Online' />
        <meta property='og:site_name' content='InstaKash' />
        <meta property='og:url' content='https://instakash.net/contacto' />
        <meta property='og:description' content='Mantente contactado con Instakash para tener el tipo de cambio del día y sobre nuestros servicios, cupones y promociones' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='' />
      </Head>
      <section className={styles.ContactSection}>
        <div className='container'>
          <div className='text-center'>
            <h1 className={styles.Title}>Contáctanos</h1>
            <p className={styles.Subtitle}>Estamos para apoyarte</p>
          </div>
          <hr className='max-w-xs md:max-w-lg mx-auto' />
          <div className='grid grid-cols-1 md:grid-cols-2 p-3 md:ml-12'>
            <article className='md:mr-16 order-2 md:order-1'>
              <div className='flex items-center my-8'>
                <MapPin className={styles.infoIcon} />
                <section>
                  <h2>Dirección</h2>
                  <address className='text-sm'>Calle Martin de Murua 150, San Miguel, Lima - Peru.</address>
                  <p className='text-sm'>INSTAKASH S.A.C. RUC:20605285105</p>
                </section>
              </div>
              <div className='flex items-center my-8'>
                <Clock className={styles.infoIcon} />
                <section>
                  <h2>Nuestro horario</h2>
                  <p className='text-sm'>Lunes a Viernes: 9AM a 7PM</p>
                  <p className='text-sm'>Sábados: 9AM a 2:00PM</p>
                  <p className='text-sm'>Domingos y Feriados: cerrados</p>
                </section>
              </div>
              <div className='flex items-center my-8'>
                <Mail className={styles.infoIcon} />
                <section>
                  <h2>Correo electrónico</h2>
                  <a href='mailto:contacto@instakash.net'>contacto@instakash.net</a>
                </section>
              </div>
              <div className='flex items-center my-8'>
                <Headphones className={styles.infoIcon} />
                <section>
                  <h2>Llámanos</h2>
                  <a href='tel:+51929324006' className='link' target='_blank' rel='noopener noreferrer'>
                    +51 929 324 006
                  </a>
                </section>
              </div>
              <div className='flex items-center justify-between md:justify-start mt-3'>
                <h2 className='mr-6'>Síguenos en redes:</h2>
                <div className={styles.social}>
                  <a href='https://www.instagram.com/instakashnet' target='_blank' rel='noopener noreferrer'>
                    <img src='/images/social/instagram-green.svg' className='mx-3 w-6 md:w-8' />
                  </a>
                  <a href='https://www.facebook.com/people/Instakash/100063764447135/' target='_blank' rel='noopener noreferrer'>
                    <img src='/images/social/facebook-green.svg' className='mx-3 w-6 md:w-8' />
                  </a>
                  <a href='https://www.linkedin.com/company/71140162/' target='_blank' rel='noopener noreferrer'>
                    <img src='/images/social/linkedin-green.svg' className='mx-3 w-6 md:w-8' />
                  </a>
                </div>
              </div>
              <div className={styles.contactImg}>
                <Image src='/images/illustrations/contact.svg' alt='contáctanos y cambia tus dólares online' layout='fill' objectFit='contain' />
              </div>
            </article>
            <form onSubmit={formik.handleSubmit} className={`${styles.contactForm} mb-6 md:mb-0 order-1 md:order-2`}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Input
                  name='firstName'
                  type='text'
                  placeholder='Nombre(s)'
                  error={formik.errors.firstName}
                  touched={formik.touched.firstName}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Input
                  name='lastName'
                  type='text'
                  placeholder='Apellido(s)'
                  error={formik.errors.lastName}
                  touched={formik.touched.lastName}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <Input
                name='email'
                type='email'
                placeholder='Correo electrónico'
                error={formik.errors.email}
                touched={formik.touched.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Textarea
                name='message'
                placeholder='Ingresa tu mensaje...'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.message}
                touched={formik.touched.message}
              />
              <Checkbox name='accept' value={formik.values.accept} onChange={formik.handleChange}>
                Al enviar tus datos aceptas recibir mensajes de promociones y marketing de parte de nosotros. Conoce más en nuestras{' '}
                <Link href='/' className='link' legacyBehavior>
                  <b>políticas de privacidad.</b>
                </Link>
              </Checkbox>
              {sent && <span className='sent-msg'>Gracias por escribirnos, estaremos en contacto a la brevedad posible.</span>}
              {error && <span className='error-msg'>Ha ocurrido un error al enviar el mensaje. Intenta nuevamente más tarde.</span>}
              <Button type='submit' disabled={!formik.isValid || sent || isLoading}>
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Script
        strategy='afterInteractive'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "http://schema.org/", "@type": "WebSite",
          "url": "https://instakash.net/contacto", "potentialAction": {
          "@type": "SearchAction",
          "target": "https://instakash.net/contacto{search_term_string}", "query-input": "required name=search_term_string"
          } }
        `,
        }}
      />
    </>
  );
};

export default contacto;
