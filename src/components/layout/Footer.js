import Image from "next/legacy/image";
import Link from 'next/link';
import styles from './Layout.module.scss';

const Footer = ({ pathname }) => {
  return (
    <footer className={styles.footer}>
      <div className='container grid grid-cols-1 md:grid-cols-4 md:py-8 px-8'>
        <section className='col-span-1 my-2'>
          <Image src='/images/logo-white.svg' alt='Instakash casa de cambio online' width={150} height={30} objectFit='contain' />
          <p className='text-sm'>Casa de cambio online. Con la mejor tasa de cambio comienza el cambio, fácil y seguro del Perú.</p>
          <div className='flex tems-center mt-5'>
            <a href='https://www.instagram.com/instakashnet/' target='_blank' rel='noopener noreferrer' className='relative w-6 h-6 md:w-8 md:h-8 mr-6'>
              <Image layout='fill' objectFit='contain' alt='Sígue a Instakash en Instagram' src='/images/social/instagram.svg' />
            </a>
            <a href='https://www.facebook.com/Instakash-103956227716506' target='_blank' rel='noopener noreferrer' className='relative w-6 h-6 md:w-8 md:h-8 mr-6'>
              <Image layout='fill' objectFit='contain' alt='Sígue a Instakash en Facebook' src='/images/social/facebook.svg' />
            </a>
            <a href='https://www.linkedin.com/company/71140162' target='_blank' rel='noopener noreferrer' className='relative w-6 h-6 md:w-8 md:h-8'>
              <Image layout='fill' objectFit='contain' alt='Sígue a Instakash en Linkedin' src='/images/social/linkedin.svg' />
            </a>
          </div>
        </section>
        <section className='col-span-3 md:ml-20 flex flex-col md:flex-row items-start justify-between'>
          <div className={styles.footerMenu}>
            <h4>Menú</h4>
            <ul>
              <li>
                <Link href={pathname === '/' ? '#calculator' : '/'}>
                  Tipo de cambio para hoy
                </Link>
              </li>
              <li>
                <Link href='/beneficios'>
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href='/faq'>
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href='/contacto'>
                  Contacto
                </Link>
              </li>
              {/* <li>
                <a href="https://wa.link/wekqza" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Image width={15} height={15} alt="Contactar a soporte de Instakash" src="/images/icons/whatsapp-white.svg" /> <span className="ml-2">Atención al usuario</span>
                </a>
              </li> */}
            </ul>
          </div>
          <div className={styles.footerMenu}>
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href='/terminos-y-condiciones'>
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href='/politicas-de-privacidad'>
                  Políticas de privacidad
                </Link>
              </li>
              <li>
                <Link href='/libro-de-reclamaciones'>
                  Libro de reclamaciones
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
                Sábados <br /> 9 a.m - 2:00 p.m
              </li>
              <li>
                Domingos y feriados <br />
                cerrados
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className={styles.copy}>
        <div className='container flex flex-col p-2 md:flex-row items-start md:items-center justify-between'>
          <p>
            2021 &copy; Todos los derechos reservados. <b className='text-white'>Instakash</b>
          </p>
          <p>Instakash S.A.C. RUC 20605285105 | Registro SBS: 05939-2019</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
