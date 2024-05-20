import Image from "next/image";

import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import Link from "next/link";
import { NAVIGATION } from "@/enums/navigation";

function Footer() {
  return (
    <footer className='py-20 w-full bg-primary'>
      <div className='container grid md:grid-cols-2 lg:grid-cols-4 place-content-center gap-20'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-white font-bold text-lg'>Instakash</h3>
          <p className='text-white text-sm leading-6'>
            Instakash es una empresa que se dedica a la compra y venta de dólares vía online, de forma rápida, segura y al mejor precio del
            mercado.
          </p>
          <div className='flex items-center gap-6 mt-4'>
            <a href='https://www.facebook.com/p/Instakash-100063764447135/' rel='noreferrer' target='_blank'>
              <Image src={FacebookIcon} className='w-8 h-8 object-contain' alt='Sigue a Instakash en Facebook' />
            </a>
            <a href='https://www.instagram.com/instakashnet/?hl=en' rel='noreferrer' target='_blank'>
              <Image src={InstagramIcon} className='w-8 h-8 object-contain' alt='Sigue a Instakash en Instagram' />
            </a>
            <a href='https://www.linkedin.com/company/71140162/admin/feed/posts/' rel='noreferrer' target='_blank'>
              <Image src={LinkedinIcon} className='w-8 h-8 object-contain' alt='Sigue a Instakash en LinkedIn' />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-white font-bold text-lg'>Acceso Rápido</h3>
          <nav>
            <ul className='flex flex-col gap-4'>
              <li className='text-white text-sm'>
                <Link href={NAVIGATION.HOME}>Calculadora</Link>
              </li>
              <li className='text-white text-sm'>
                <Link href={NAVIGATION.NOSOTROS}>Acerca de nosotros</Link>
              </li>
              <li className='text-white text-sm'>
                <Link href={NAVIGATION.BENEFICIOS}>Beneficios</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-white font-bold text-lg'>Legal</h3>
          <nav>
            <ul className='flex flex-col gap-4'>
              <li className='text-white text-sm'>
                <Link href={NAVIGATION.TERMINOS_Y_CONDICIONES}>Términos y condiciones</Link>
              </li>
              <li className='text-white text-sm'>
                <Link href={NAVIGATION.POLITICAS_DE_PRIVACIDAD}>Políticas de privacidad</Link>
              </li>
              <li className='text-white text-sm'>
                <Link href={NAVIGATION.RECLAMACIONES}>Libro de reclamaciones</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-white font-bold text-lg'>Contáctanos</h3>
          <p className='text-white text-sm'>De la Roca Vergallo 493, Magdalena del Mar - Lima, Perú</p>
          <a className='text-white text-sm font-bold' href='https://wa.link/rodrvx' target='_blank' rel='noreferrer'>
            +51 929 050 743
          </a>
          <a className='text-white text-sm font-bold' href='mailto:contacto@instakash.net'>
            contacto@instakash.net
          </a>
          <p className='text-white text-sm'>
            Lunes a Viernes
            <br />
            <b>9:00 a.m. - 7:00 p.m.</b>
          </p>
          <p className='text-white text-sm'>
            Sábados
            <br />
            <b>9:00 a.m. - 2:00 p.m.</b>
          </p>
          <p className='text-white text-sm'>
            Dómingos y Feriados
            <br />
            <b>Cerrados</b>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
