import { useState, useEffect } from 'react';
// import styles from '../../styles/UI.module.scss';

import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const WahtsappBtn = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => setScrollTop(e.target.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <WhatsAppWidget
      phoneNumber='51927013800'
      textReplyTime='Tiempo de respuesta estimado: 5min'
      message={`Nos alegra tenerte aquí. \n\n ¿En que podemos ayudarte hoy?`}
      companyName='Instakash'
      sendButton='Enviar mensaje'
    />
  );
};

export default WahtsappBtn;
