import { useEffect, useState } from 'react';
import Link from 'next/link';
import Anchor from 'react-anchor-link-smooth-scroll';

import styles from '../../styles/layout/Nav.module.scss';

const Nav = () => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    const stickNavHandler = () => {
      window.scrollY >= 80 ? setStickyNav(true) : setStickyNav(false);
    };

    window.addEventListener('scroll', stickNavHandler);

    return () => window.removeEventListener('scroll', stickNavHandler);
  }, []);

  return (
    <nav className={`${styles.nav} ${stickyNav ? styles.stickyNav : ''}`}>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <a>
            <img src='/images/logo.svg' alt='Instakash' />
          </a>
        </Link>

        <ul className='ml-auto mr-3'>
          <li>
            <Anchor offset='200' href='#steps'>
              ¿Como funciona?
            </Anchor>
          </li>
          <li>
            <Anchor href='#affiliates'>¡Gana con tus referidos!</Anchor>
          </li>
          <li>
            <Anchor offset='150' href='#benefits'>
              ¿Por qué Instakash?
            </Anchor>
          </li>
        </ul>

        <div className={styles.navButtons}>
          <Link href='/'>
            <a className='mr-4'>Iniciar sesión</a>
          </Link>
          <Link href='/'>
            <a>Registrarse</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
