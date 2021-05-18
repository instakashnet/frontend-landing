import { useEffect, useState } from 'react';
import Link from 'next/link';
import Anchor from 'react-anchor-link-smooth-scroll';
import { useRouter } from 'next/router';

import styles from '../../styles/layout/Nav.module.scss';

const Nav = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stickNavHandler = () => {
      window.scrollY >= 80 ? setStickyNav(true) : setStickyNav(false);
    };

    window.addEventListener('scroll', stickNavHandler);

    return () => window.removeEventListener('scroll', stickNavHandler);
  }, []);

  useEffect(() => {
    if (mobileNav) setMobileNav(false);
  }, [router.asPath]);

  const toggleNav = () => setMobileNav((prev) => !prev);
  const closeNav = (e) => {
    if (e.target.href) setMobileNav(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${stickyNav ? styles.stickyNav : ''}`}>
        <div className='container flex items-center justify-between'>
          <Link href='/'>
            <a>
              <img src='/images/logo.svg' alt='Instakash' />
            </a>
          </Link>

          <ul className='ml-auto mr-3'>
            <li>
              <Anchor href='#steps'>¿Como funciona?</Anchor>
            </li>
            <li>
              <Anchor href='#affiliates'>¡Gana con tus referidos!</Anchor>
            </li>
            <li>
              <Anchor href='#benefits'>Benefícios</Anchor>
            </li>
            <li>
              <Link href='/blog'>
                <a>Blog</a>
              </Link>
            </li>
          </ul>

          <div className={styles.navButtons}>
            <a href='https://app.instakash.net/signin' className='mr-4'>
              Iniciar sesión
            </a>
            <a href='https://app.instakash.net/signup'>Registrarse</a>
          </div>

          <button className={`${styles.mobileNavButton} ${mobileNav ? styles.openedNavButton : ''}`} onClick={toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`${styles.mobileNav} ${mobileNav ? styles.openedNav : ''}`} onClick={closeNav}>
        <ul>
          <h3>Menú</h3>
          <li>
            <Anchor href='#steps'>¿Como funciona?</Anchor>
          </li>
          <li>
            <Link href='/nosotros'>
              <a>Nosotros</a>
            </Link>
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
        <div className={styles.schedule}>
          <h3>Horario</h3>
          <p>Lunes a Viernes 9 am - 7 pm</p>
          <p>Sábados y Feriados 9 am - 2:30 pm</p>
        </div>

        <div className={styles.navButtons}>
          <a href='https://app.instakash.net'>Iniciar sesión</a>
          <a href='https://app.instakash.net'>Registrarse</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
