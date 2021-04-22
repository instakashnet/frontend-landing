import React from 'react';
import Mailchimp from 'react-mailchimp-form';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from '../../styles/layout/Layout.module.scss';

const Subscribe = () => {
  return (
    <Card className={styles.subscriptionCard}>
      <div className='flex items-center justify-between w-full'>
        <div className='w-2/3'>
          <h2>
            Suscríbete para obtener <br /> ofertas especiales
          </h2>
          <p>¡No te pierdas la oportunidad!</p>
        </div>
        <Mailchimp
          action='https://instakash.us10.list-manage.com/subscribe/post?u=cda87dfe90b6df7af0cd2a372&amp;id=bfec836ce4'
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Ingresa tu email',
              type: 'email',
              required: true,
            },
          ]}
          messages={{
            sending: 'Enviando...',
            success: 'Gracias por subscribirte a nuestras promociones!',
            error: 'A ocurrido un error inesperado.',
            empty: 'Debes agregar tu correo electrónico.',
            duplicate: 'Ya este correo se encuentra registrado',
            button: 'Suscribirme',
          }}
          className={styles.subscribeForm}
        />
      </div>
    </Card>
  );
};

export default Subscribe;
