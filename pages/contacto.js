import { useState } from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import { MapPin, Clock, Mail, Headphones } from 'react-feather';
import emailjs from 'emailjs-com';
import { contactValidation } from '../helpers/validations';

import Input from '../components/UI/form/Input';
import Checkbox from '../components/UI/form/Checkbox';
import Textarea from '../components/UI/form/Textarea';
import Button from '../components/UI/Button';

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
      <section className='container section-wrapper'>
        <h1 className='text-center md:text-left'>Contáctanos</h1>
        <h3 className='mb-6 text-center md:text-left'>Estamos para apoyarte</h3>
        <hr className='max-w-xs md:max-w-2xl mx-auto md:mx-0' />
        <div className='grid grid-cols-1 md:grid-cols-2 p-3'>
          <article className='md:mr-16 order-2 md:order-1'>
            <div className='flex items-center justify-between mt-3'>
              <h3>Síguenos en redes:</h3>
              <div className={styles.social}>
                <a href='!#' target='_blank' rel='noopener noreferrer'>
                  <img src='/images/social/instagram-green.svg' className='mx-3 w-6' />
                </a>
                <a href='!#' target='_blank' rel='noopener noreferrer'>
                  <img src='/images/social/facebook-green.svg' className='mx-3 w-6' />
                </a>
                <a href='!#' target='_blank' rel='noopener noreferrer'>
                  <img src='/images/social/linkedin-green.svg' className='mx-3 w-6' />
                </a>
              </div>
            </div>
            <div className='flex items-center my-8'>
              <MapPin className={styles.infoIcon} />
              <section>
                <h3>Dirección</h3>
                <address className='text-sm'>Avenida del Ejército 749, Miraflores, Lima.</address>
                <p className='text-sm'>INSTAKASH S.A.C. RUC:20605285105</p>
              </section>
            </div>
            <div className='flex items-center my-8'>
              <Clock className={styles.infoIcon} />
              <section>
                <h3>Nuestro horario</h3>
                <p className='text-sm'>
                  Lunes a Viernes: 9AM a 7PM <br /> Sábados y Feriados: 9AM a 2:30PM
                </p>
              </section>
            </div>
            <div className='flex items-center my-8'>
              <Mail className={styles.infoIcon} />
              <section>
                <h3>Correo electrónico</h3>
                <a href='mailto:contacto@instakash.net'>contacto@instakash.net</a>
              </section>
            </div>
            <div className='flex items-center my-8'>
              <Headphones className={styles.infoIcon} />
              <section>
                <h3>Whatsapp</h3>
                <a href='https://api.whatsapp.com/send?phone=51927013800&text=Hola,%20deseo%20informaci%C3%B3n' className='link' target='_blank' rel='noopener noreferrer'>
                  +51 927 013 800
                </a>
              </section>
            </div>
          </article>
          <form onSubmit={formik.handleSubmit} className={`${styles.contactForm} mb-16 md:mb-0 order-1 md:order-2`}>
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
              <Link href='/'>
                <a className='link'>
                  <b>políticas de privacidad.</b>
                </a>
              </Link>
            </Checkbox>
            {sent && <span className='sent-msg'>Gracias por escribirnos, estaremos en contacto a la brevedad posible.</span>}
            {error && <span className='error-msg'>Ha ocurrido un error al enviar el mensaje. Intenta nuevamente más tarde.</span>}
            <Button type='submit' disabled={!formik.isValid || sent || isLoading}>
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default contacto;
