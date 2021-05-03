import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'react-feather';
import Anchor from 'react-anchor-link-smooth-scroll';

import styles from '../../styles/layout/Layout.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container grid grid-cols-1 md:grid-cols-4 md:py-8 px-8'>
        <section className='col-span-1 my-2'>
          <img src='/images/logo-white.svg' />
          <p className='text-sm'>Somos la startup financiera que revoluciona la forma de administrar el dinero a través de una plataforma 100% digital.</p>
          <div className='flex tems-center mt-5'>
            <a href='!#' target='_blank' rel='noopener noreferrer' className='mr-6'>
              <Facebook size={35} />
            </a>
            <a href='!#' target='_blank' rel='noopener noreferrer' className='mr-6'>
              <Instagram size={35} />
            </a>
            <a href='!#' target='_blank' rel='noopener noreferrer'>
              <Linkedin size={35} />
            </a>
          </div>
        </section>
        <section className='col-span-3 md:ml-20 flex flex-col md:flex-row items-start justify-between'>
          <div className={styles.footerMenu}>
            <h4>Menú</h4>
            <ul>
              <li>
                <Link href='/nosotros'>
                  <a>Nosotros</a>
                </Link>
              </li>
              <li>
                <Link href='/contacto'>
                  <a>Contacto</a>
                </Link>
              </li>
              <li>
                <Link href='/faq'>
                  <a>Preguntas frecuentes</a>
                </Link>
              </li>
              <li>
                <a href='https://wa.link/05keps' target='_blank' rel='noopener noreferrer' className='flex items-center'>
                  <img src='/images/icons/whatsapp.svg' className='mr-2 w-4 mb-0' /> Atención al usuario
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.footerMenu} lg:block hidden`}>
            <h4>Links rápidos</h4>
            <ul>
              <li>
                <Anchor href='#steps'>¿Como funciona?</Anchor>
              </li>
              <li>
                <Anchor href='#affiliates'>¡Gana con tus referidos!</Anchor>
              </li>
              <li>
                <Anchor href='#benefits'>¿Por qué Instakash?</Anchor>
              </li>
            </ul>
          </div>
          <div className={styles.footerMenu}>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href='/terminos-y-condiciones'>
                  <a>Términos y condiciones</a>
                </Link>
              </li>
              <li>
                <Link href='/politicas-de-privacidad'>
                  <a>Políticas de privacidad</a>
                </Link>
              </li>
              <li>
                <Link href='/libro-de-reclamaciones'>
                  <a>Libro de reclamaciones</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerMenu}>
            <h4>Datos de contacto</h4>
            <ul>
              <li>
                <a href='mailto:contacto@instakash.net'>contacto@instakash.net</a>
              </li>
              <li>
                Lunes a Viernes <br /> 9 a.m - 7 p.m
              </li>
              <li>
                Sábados y Feriados <br /> 9 a.m - 2:30 p.m
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className={styles.copy}>
        <div className='container flex flex-col p-2 md:flex-row items-start md:items-center justify-between'>
          <p>
            2021 &copy; Todos los derechos reservados. <b>Instakash</b>
          </p>
          <p>Instakash S.A.C. RUC 20605285105 | Registro SBS: 05939-2019</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
