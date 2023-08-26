import Layout from "@components/layout/Layout";
import Button from "@components/UI/Button";
import LevelCard from "@components/user/level-card/LevelCard";

import styles from "@styles/UserLevels.module.scss";
import Image from "next/legacy/image";
import Link from "next/link";

const UserSystemLevel = () => {
  return (
    <section className='section-wrapper text-center'>
      <div className='container !max-w-lg !mt-8'>
        <hr />
        <h1 className='subtitle !text-lg !text-black mb-4'>Sistema de niveles</h1>
        <h2 className='title'>Mientras más cambias más beneficios recibes</h2>
        <p className='mt-3'>En Instakash queremos seguir premiándote por ello venimos con mejores tasas y mayores beneficios</p>
        <Button variant='primary' className='mt-4'>
          Empieza a cambiar
        </Button>
      </div>
      <div className={styles.dashboardWrapper}>
        <div className={styles.imgWrapper}>
          <Image src='/images/bg/dashboard.webp' className='shadow-2xl shadow-slate-500' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className='container !mt-4'>
        <section className={styles.levelsWrapper}>
          <div className='w-full flex items-center justify-center lg:justify-start'>
            <LevelCard
              completed={20}
              userLevel='Junior'
              amountRange={{ min: 1000, max: 5000 }}
              levelDescription='Para ti que cambias de 0 a $5000 mensuales. En este nivel puedes acceder a todos los beneficios del mes como el cupón del mes y
            el descuento por supermontos.'
            />
          </div>
          <div className='w-full flex items-center justify-center lg:justify-end relative mt-6'>
            <div className='hidden lg:block absolute bottom-[16rem] z-0'>
              <Image src='/images/people/woman-level.webp' width={400} height={340} objectFit='contain' />
            </div>
            <LevelCard
              userLevel='Senior'
              completed={50}
              amountRange={{ min: 25000, max: 50000 }}
              levelDescription='Para ti que cambias de 5,000 a $50,000 mensuales. En este nivel puedes acceder a todos los beneficios del JUNIOR y a una
              mejora de 15 puntos por 30 días, renovables siempre que mantenga la cantidad de cambio.'
            />
          </div>
          <div className='w-full flex items-center justify-center lg:justify-start relative mt-6'>
            <div className='hidden lg:block absolute bottom-[16rem] z-0'>
              <Image src='/images/people/man-level.webp' width={400} height={330} objectFit='contain' />
            </div>
            <LevelCard
              userLevel='Experto'
              completed={100}
              amountRange={{ min: 50000 }}
              levelDescription='Para ti que cambias de $50,000 en adelante al mes. En este nivel puedes acceder a todos los beneficios y a una mejora de
              25 puntos por 30 días, renovables siempre que mantenga la cantidad de cambio.'
            />
          </div>
        </section>
        <section className='py-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 min-h-[60vh]'>
          <div className={styles.startNowImage}>
            <Image src='/images/illustrations/money-hand.webp' layout='fill' objectFit='contain' />
          </div>
          <div className='section-wrapper flex flex-col items-center justify-center lg:items-start text-center lg:text-left'>
            <hr className='!w-full !mx-0' />
            <h3 className='leadtitle'>Comienza ahora</h3>
            <h2 className='title'>Con Instakash, obten más con cada transacción</h2>
            <p className='mt-2'>Somos la casa de cambio que te ofrece la mejor tasa de Perú, los mejores beneficios y la mejor atención.</p>
            <div className='flex items-center justify-center gap-3 mt-4'>
              <a className='button button-secondary' href='https://app.instakash.net'>
                Registrate
              </a>
              <a className='button button-primary' href='https://app.instakash.net'>
                Cambia ahora
              </a>
            </div>
          </div>
        </section>
        <section className='pt-20 min-h-[50vh]'>
          <h2 className='title'>Hemos rediseñado esto pensando en ti</h2>
          <p className='mt-2 max-w-xl mx-auto'>
            Si quieres saber más puedes comunicarte con nosotros, leer nuestros términos y condiciones; y seguirnos en nuestras redes
            sociales
          </p>
          <Link href='/terminos-y-condiciones' className='button button-primary mt-4'>
            Términos y condiciones
          </Link>
        </section>
      </div>
    </section>
  );
};

UserSystemLevel.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UserSystemLevel;
