import Link from "next/link";
import styles from "./NotFound.module.css";
import { NAVIGATION } from "@/enums/navigation";

function NotFoundPage() {
  return (
    <main className={`min-h-[90vh] flex items-center ${styles.NotFoundBg}`}>
      <div className='container'>
        <section className='grid lg:grid-cols-2 place-items-center'>
          <div>
            <h2 className='text-primary font-bold text-3xl'>¡Ups! Tal vez estabas buscando otra página, o el enlace ya no existe.</h2>
            <p className='mt-8 text-xl text-primary'>Acceso rápido:</p>
            <ul className='text-secondary flex flex-col gap-4 mt-6 ml-6 list-disc'>
              <li>
                <Link href={NAVIGATION.HOME}>Calculadora</Link>
              </li>
              <li>
                <Link href={NAVIGATION.NOSOTROS}>Acerca de nosotros</Link>
              </li>
              <li>
                <Link href={NAVIGATION.BENEFICIOS}>Nuestros beneficios</Link>
              </li>
              <li>
                <Link href={NAVIGATION.TERMINOS_Y_CONDICIONES}>Términos y condiciones</Link>
              </li>
            </ul>
            <div className='flex items-center gap-6'>
              <a
                className='text-primary mt-8 bg-transparent border border-primary p-3 px-6 font-semibold rounded-sm cursor-pointer'
                href='https://app.instakash.net/register'
                target='_blank'
                rel='noreferrer'
              >
                Registrate
              </a>
              <a
                className='text-white mt-8 bg-primary p-3 px-6 font-semibold rounded-sm cursor-pointer broder border-transparent'
                href='https://app.instakash.net'
                target='_blank'
                rel='noreferrer'
              >
                Cambia ahora
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NotFoundPage;
