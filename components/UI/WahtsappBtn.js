import { useState, useEffect } from 'react';
import styles from '../../styles/UI.module.scss';

const WahtsappBtn = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => setScrollTop(e.target.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <a href='https://wa.link/05keps' target='_blank' rel='noopener noreferrer' className={`${styles.whatsappBtn} ${scrollTop > 90 ? styles.whatsappShown : ''}`}>
      <img src='/images/icons/whatsapp.svg' alt='whatsapp' />
    </a>
  );
};

export default WahtsappBtn;
