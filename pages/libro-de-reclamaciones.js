import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import Head from 'next/head';
import { useState } from 'react';
import Button from '../src/components/UI/Button';
import Input from '../src/components/UI/form/Input';
import Select from '../src/components/UI/form/Select';
import Textarea from '../src/components/UI/form/Textarea';
import { reclamacionesValidation } from '../helpers/validations';
import styles from '../styles/Reclamaciones.module.scss';

const LibroReclamaciones = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const documentOptions = [
    { value: 'DNI', label: 'DNI' },
    { value: 'PTP', label: 'PTP' },
    { value: 'CE', label: 'Carnet de extranjería' },
    { value: 'Pasaporte', label: 'Pasaporte' },
  ];
  const servicesOptions = [
    { value: 'Cambios de divisas (compra)', label: 'Cambios de divisas (compra)' },
    { value: 'Cambios de divisas (venta)', label: 'Cambios de divisas (venta)' },
  ];

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      const res = await emailjs.send('instakash_service', 'inquiry_template', values, 'user_HpWIiQWPXIgpMaV2NuEIB');
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

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      fromEmail: '',
      documentType: '',
      documentNo: '',
      companyName: '',
      ruc: '',
      phone: '',
      service: '',
      amount: '',
      description: '',
      formType: '',
    },
    onSubmit,
    validationSchema: reclamacionesValidation,
  });

  return (
    <>
      <Head>
        <title>Libro de Rclamaciones</title>
        <meta name='title' content='Libro de Reclamaciones | Instakash' />
        <meta name='description' content='Gestionamos tus reclamos para poder procesarlos de forma inmediata. Atendemos cada caso según su prioridad y a la breveddad. ' />
        <meta http-equiv='content-language' content='es_PE' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://instakash.net/libro-de-reclamaciones' />
        <meta name='author' content='InstaKash' />
        <meta name='url' content='https://instakash.net/libro-de-reclamaciones' />
        <meta property='og:title' content='Políticas de Privacidad | Instakash' />
        <meta property='og:site_name' content='InstaKash' />
        <meta property='og:url' content='https://instakash.net/libro-de-reclamaciones' />
        <meta property='og:description' content='Gestionamos tus reclamos para poder procesarlos de forma inmediata. Atendemos cada caso según su prioridad y a la breveddad.' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='' />
      </Head>
      <section>
        <div className='section-wrapper container px-3 py-12'>
          <div className='text-center'>
            <h1 className={styles.Title}>Libro de reclamaciones</h1>
            <p className={styles.Subtitle}>
              Gestionamos tus reclamos para poder procesarlos de forma inmediata. Sabemos lo importante que es tu tiempo y tu dinero por lo que atendemos cada caso según su
              prioridad y a la breveddad. Cambiamos la forma de operar y te damos la garantía de seguridad más alta.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className='max-w-2xl mx-auto mt-8 lg:mt-16'>
            <div className='grid md:grid-cols-2 gap-4'>
              <Input
                type='text'
                name='firstName'
                placeholder='Ingresa tu nombre'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.firstName}
                touched={formik.touched.firstName}
              />
              <Input
                type='text'
                name='lastName'
                placeholder='Ingresa tu apellido'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.lastName}
                touched={formik.touched.lastName}
              />
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
              <Input
                type='email'
                name='fromEmail'
                placeholder='Correo electrónico'
                value={formik.values.fromEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.fromEmail}
                touched={formik.touched.fromEmail}
              />
              <Input
                type='text'
                name='phone'
                placeholder='Teléfono'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.phone}
                touched={formik.touched.phone}
              />
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
              <Select name='documentType' placeholder='Documento de identidad' options={documentOptions} value={formik.values.documentType} onChange={formik.handleChange} />
              <Input
                type='text'
                name='documentNo'
                placeholder={`Nro. de ${formik.values.documentType ? formik.values.documentType : 'documento'}`}
                value={formik.values.documentNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.documentNo}
                touched={formik.touched.documentNo}
              />
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
              <Input
                type='text'
                name='companyName'
                placeholder='Nombre de empresa (si aplica)'
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.companyName}
                touched={formik.touched.companyName}
              />
              <Input
                type='text'
                name='ruc'
                placeholder='RUC de la empresa (si aplica)'
                value={formik.values.ruc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.ruc}
                touched={formik.touched.ruc}
              />
            </div>
            <Select
              name='service'
              placeholder='¿Que servicio adquiriste?'
              options={servicesOptions}
              value={formik.values.service}
              error={formik.errors.service}
              touched={formik.touched.service}
              onChange={formik.handleChange}
            />
            <div className='grid md:grid-cols-2 gap-4'>
              <Input
                type='number'
                name='amount'
                placeholder='Monto cambiado/solicitado'
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.amount}
                touched={formik.touched.amount}
              />
              <Select
                name='formType'
                placeholder='Tipo de reclamo'
                options={[
                  { value: 'Queja', label: 'Queja' },
                  { value: 'Reclamo', label: 'Reclamo' },
                ]}
                value={formik.values.formType}
                error={formik.errors.formType}
                touched={formik.touched.formType}
                onChange={formik.handleChange}
              />
            </div>
            <Textarea
              name='description'
              placeholder='Escribe tu mensaje...'
              error={formik.errors.description}
              touched={formik.touched.description}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className='flex items-center justify-center'>
              <Button type='submit' disabled={isLoading || sent} className='block w-56 md:w-80'>
                {!isLoading && !sent && 'Enviar mensaje'}
                {isLoading && !sent && 'Enviando...'}
                {!isLoading && sent && 'Mensaje enviado'}
              </Button>
            </div>
            {sent && <p className='sent-msg text-center mt-3'>Su mensaje ha sido recibido, pronto estaremos en contacto.</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default LibroReclamaciones;
