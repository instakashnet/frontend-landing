import Image from "next/image";
import LevelsSection from "./components/LevelsSection/LevelsSection";
import PageHeader from "./components/PageHeader/PageHeader";
import StartNowImg from "@/assets/illustrations/start-now.webp";
import Link from "next/link";
import { NAVIGATION } from "@/enums/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://instakash.net/niveles"),
  title: "Sistema de niveles en Instakash",
  description: "Entérate de los como funciona nuestro sistema de niveles al usar la plataforma de Casa de Cambio Online Instakash.",
  alternates: {
    canonical: "/niveles"
  },
  openGraph: {
    title: "Sistema de niveles en Instakash",
    description: "Entérate de los como funciona nuestro sistema de niveles al usar la plataforma de Casa de Cambio Online Instakash.",
    type: "website",
    url: "https://instakash.net/niveles",
    siteName: "Instakash"
  }
};

function NivelesPage() {
  return (
    <main className='h-full'>
      <PageHeader />
      <LevelsSection />
      <section className='containter py-10 text-black'>
        <div className='container flex flex-col justify-center lg:flex-row items-center gap-20'>
          <div className='flex flex-col gap-4 max-w-xl'>
            <h2 className='font-semibold text-lg text-primary'>Comienza a cambiar</h2>
            <h3 className='text-3xl font-semibold'>Con Instakash, obten más con cada transacción</h3>
            <p>Somos la casa de cambio que te ofrece la mejor tasa de Perú, los mejores beneficios y la mejor atención.</p>
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
          <Image src={StartNowImg} className='w-[40rem] object-contain' alt='Cambiar dolares ahora con Instakash' />
        </div>
      </section>

      <section className='py-10 lg:py-20 flex items-center text-black'>
        <div className='container text-center flex flex-col items-center gap-6'>
          <h2 className='text-2xl lg:text-4xl font-semibold'>Hemos rediseñado esto pensando en ti</h2>
          <p className='max-w-2xl'>
            Si quieres saber más puedes comunicarte con nosotros, leer nuestros términos y condiciones; y seguirnos en nuestras redes
            sociales
          </p>
          <Link
            className='font-semibold lg:text-lg p-3 border rounded-md border-primary text-primary'
            href={NAVIGATION.TERMINOS_Y_CONDICIONES}
          >
            Terminos y condiciones
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NivelesPage;
