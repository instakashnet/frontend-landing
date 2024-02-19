import AppMockup from "@/components/atoms/AppMockup/AppMockup";
import styles from "./AppDownload.module.css";
import Image from "next/image";
import PlaystoreBadge from "@/assets/illustrations/playstore.svg";
import AppstoreBadge from "@/assets/illustrations/appstore.svg";

function AppDownload() {
  return (
    <section className='container pt-20 pb-40'>
      <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-20'>
        <AppMockup />
        <div>
          <h3 className='font-semibold text-secondary text-lg'>Descarga nuestra APP</h3>
          <h2 className='text-4xl lg:text-5xl text-primary font-bold mt-6'>Cambia tus dolares desde nuestra APP</h2>
          <p className='mt-6 max-w-lg text-lg font-medium'>
            Con el mejor tipo de cambio comienza el cambio, fácil y seguro del Perú. Ya está disponible para Android y IOS.
          </p>
          <ul className={styles.BenefitsList}>
            <li className={styles.Benefit}>Notificaciones con el mejor momento para cambiar.</li>
            <li className={styles.Benefit}>Beneficios exclusivos de la app para nuestros usuarios.</li>
            <li className={styles.Benefit}>Servicio al cliente personalizado cuando lo necesites.</li>
          </ul>
          <div className='flex items-center gap-10'>
            <a
              href='https://play.google.com/store/apps/details?id=net.instakash.app&pcampaignid=web_share'
              rel='noreferrer'
              target='_blank'
            >
              <Image src={PlaystoreBadge} alt='Descargar Instakash en Android' className='object-contain w-40 h-20' />
            </a>
            <a href='https://apps.apple.com/us/app/instakash/id1601561803' rel='noreferrer' target='_blank'>
              <Image src={AppstoreBadge} alt='Descargar Instakash en Iphone' className='object-contain w-40 h-20' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
