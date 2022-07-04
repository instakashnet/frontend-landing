import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Calculator from "../components/calculator";
import Callout from "../components/UI/callout.component";
import Card from "../components/UI/Card";
import AdsCarousel from "../components/UI/carousels/ads.component";
import BenefitsCarousel from "../components/UI/carousels/benefits.component";
import { BaseModal } from "../components/UI/Modal";
// CLASSES
import styles from "../styles/Home.module.scss";
import { getCounters } from "../utils/fetch-data";

export async function getStaticProps() {
  let counters = {
    qtyUsers: 0,
    qtySuccessfullOrders: 0,
    totalProcessed: 0,
  };

  try {
    counters = await getCounters();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      counters,
    },
    revalidate: 10,
  };
}

const Home = ({ counters }) => {
  const [infoModal, setInfoModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInfoModal(true);
    }, 1200);
  }, []);

  const handleCloseModal = () => setInfoModal(false);

  return (
    <>
      <Head>
        <title>Casa de Cambio Online | Cambiar Dólares a Soles | Instakash</title>
        <meta name="title" content="Instakash Casa de Cambio Online | Cambia Dólares a Soles" />
        <meta
          name="description"
          content="Cambia dólares a Soles en la casa de cambio online que tiene el mejor tipo de cambio. Instakash es regulada por la SBS Cambia Seguro, Cambia aquí."
        />
        <meta httpEquiv="content-language" content="es_PE" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://instakash.net/" />
        <meta name="author" content="InstaKash" />
        <meta name="url" content="https://instakash.net/" />

        <meta property="og:title" content="Casa de Cambio Online | Cambiar Dólares a Soles" />
        <meta property="og:site_name" content="Instakash" />
        <meta property="og:url" content="https://instakash.net/" />
        <meta property="og:description" content="Instakash es la casa de cambio online con el mejor tipo de cambio de dólares a soles." />
        <meta property="og:type" content="https://instakash.net/" />
        <meta property="og:image" content="" />
      </Head>
      <Callout type="info">
        <div className="container p-0">
          <p>
            A partir del 01/07/2022 el <b>monto mínimo de cambio establecido será de 40$ USD</b> para compra y venta.
          </p>
        </div>
      </Callout>
      <div className="container px-0 pb-0">
        <AdsCarousel />
      </div>
      <section className={styles.CalculatorSection} id="calculator">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-3">
            <div className={styles.TitleWrapper}>
              <h1>
                <em>Casa de cambio online</em>
              </h1>
              <h2>
                Con la mejor tasa, <br /> comienza el cambio.
              </h2>
              <p className="flex">
                <FaCheckCircle size={25} className="mr-2 lg:mt-1" /> Entidad registrada en la SBS.
              </p>
            </div>
            <Card className={styles.CalculatorWrapper}>
              <p>
                <strong>
                  Tipo de cambio <br /> para hoy en Instakash
                </strong>
              </p>
              <Calculator />
            </Card>
          </div>
          <div className={styles.SuperkashWrapper}>
            <Image src="/images/illustrations/superkash.svg" alt="Casa de cambio online" layout="fill" objectFit="contain" />
          </div>
        </div>
      </section>
      <section className={styles.UsersSection}>
        <div className="container">
          <div className={styles.BanksWrapper}>
            <Card className={styles.BankCard}>
              <div className="flex items-center">
                <div className={styles.BankInfoCircle}>
                  <Image src="/images/icons/thunder.svg" width={30} height={30} alt="Cambia dólares online" className={styles.BankInfoIcon} />
                </div>
                <div>
                  <h3 className={styles.BanksInfoTitle}>
                    <strong>Cambia dólares online</strong>
                  </h3>
                  <p>Inmediato</p>
                </div>
              </div>
              <div className={styles.BanksInfoImageWrapper}>
                <Image src="/images/banks/interbank.svg" alt="Banco Interbank" width={80} height={25} />
                <Image src="/images/banks/bcp.svg" alt="Banco BCP" width={80} height={30} />
              </div>
            </Card>
            <Card className={styles.BankCard}>
              <div className="flex items-center">
                <div className={styles.BankInfoCircle}>
                  <Image src="/images/icons/horizontal-arrows.svg" width={30} height={30} alt="Cambia dólares online" className={styles.BankInfoIcon} />
                </div>
                <div>
                  <h3 className={styles.BanksInfoTitle}>
                    <strong>Cambia dólares online</strong>
                  </h3>
                  <p>Hasta 24 horas</p>
                </div>
              </div>
              <div className={styles.BanksInfoImageWrapper}>
                <div className="mr-3">
                  <Image src="/images/banks/scotiabank.svg" alt="Banco Scotiabank" width={90} height={40} />
                </div>
                <div className="mr-3">
                  <Image src="/images/banks/bbva.svg" alt="Banco BBVA" width={70} height={25} />
                </div>
                <div className="mr-3">
                  <Image src="/images/banks/pichincha.svg" alt="Banco Pichincha" width={70} height={25} />
                </div>
                <p>y otros</p>
              </div>
            </Card>
          </div>
          <div className={styles.UsersWrapper}>
            <div className={styles.UserInfoWrapper}>
              <div className="mr-6">
                <Image src="/images/icons/laptop.svg" width={45} height={45} alt="cambios realizados" />
              </div>
              <div>
                <span className={styles.UserInfo}>+{counters.qtySuccessfullOrders.toLocaleString("es-ES")}</span>
                <p>cambios realizados</p>
              </div>
            </div>
            <div className={styles.UserInfoWrapper}>
              <div className="mr-6">
                <Image src="/images/icons/soles.svg" width={45} height={45} alt="cantidad de soles transferidos" />
              </div>
              <div>
                <span className={styles.UserInfo}>+{counters.totalProcessed.substring(0, 3)} millones</span>
                <p>de soles transferidos</p>
              </div>
            </div>
            <div className={styles.UserInfoWrapper}>
              <div className="mr-6">
                <Image src="/images/icons/users.svg" width={45} height={45} alt="usuarios registrados" />
              </div>
              <div>
                <span className={styles.UserInfo}>+{counters.qtyUsers.toLocaleString("es-ES")}</span>
                <p>usuarios registrados</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-6 md:my-12 lg:my-20">
        <div className="text-center">
          <h2 className={styles.Title}>
            Beneficios de Instakash <br /> tu casa de cambio online
          </h2>
          <p className={styles.Subtitle}>En Instakash te ayudamos a tener un mejor tipo de cambio.</p>
        </div>
        <BenefitsCarousel />
      </section>
      <section className={styles.StepsSection}>
        <div className="container">
          <div className="text-center mt-5">
            <h2 className={styles.Title}>Cambia dólares online</h2>
            <p className={styles.Subtitle}>Ingresa a nuestra casa de cambio online, sigue estos 4 pasos y obtén el mejor tipo de cambio.</p>
          </div>
          <div className={styles.StepsWrapper}>
            <Card className={styles.StepCard}>
              <span className={styles.Step}>Paso 1</span>
              <div className={styles.StepImage}>
                <Image src="/images/steps/step-1.svg" alt="Cotiza tu cambio de dólares" layout="fill" objectFit="contain" />
              </div>
              <div className={styles.StepInfo}>
                <span>Paso 1</span>
                <h3>Cotiza tu cambio</h3>
                <p>Ingresa el monto que vas a enviar y calcula cuánto vas a recibir. Comienza tu operación.</p>
              </div>
            </Card>
            <Card className={styles.StepCard}>
              <span className={styles.Step}>Paso 2</span>
              <div className={styles.StepImage}>
                <Image src="/images/steps/step-2.svg" alt="Cotiza tu cambio de dólares" layout="fill" objectFit="contain" />
              </div>
              <div className={styles.StepInfo}>
                <span>Paso 2</span>
                <h3>Selecciona tus cuentas</h3>
                <p>Selecciona el banco desde donde envías y la cuenta donde recibirás tu cambio.</p>
              </div>
            </Card>
            <Card className={styles.StepCard}>
              <span className={styles.Step}>Paso 3</span>
              <div className={styles.StepImage}>
                <Image src="/images/steps/step-3.svg" alt="Cotiza tu cambio de dólares" layout="fill" la objectFit="contain" />
              </div>
              <div className={styles.StepInfo}>
                <span>Paso 3</span>
                <h3>Transfiere</h3>
                <p>Transfiere a Instakash desde la app de tu banco e ingresa el número de transferencia en nuestra app.</p>
              </div>
            </Card>
            <Card className={styles.StepCard}>
              <span className={styles.Step}>Paso 4</span>
              <div className={styles.StepImage}>
                <Image src="/images/steps/step-4.svg" alt="Cotiza tu cambio de dólares" layout="fill" objectFit="contain" />
              </div>
              <div className={styles.StepInfo}>
                <span>Paso 4</span>
                <h3>Recibe</h3>
                <p>Recibe tu cambio en la cuenta que seleccionaste en el paso 2. Y sigue cambiando con Instakash.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="container md:mt-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image src="/images/bg/kash.webp" objectFit="contain" width={600} height={500} />
          <div className="text-left md:w-1/3 flex flex-col">
            <h2 className={styles.Title}>¿Que es KASH?</h2>
            <p className="mb-3">
              El KASH es nuestra moneda digital que puedes obtener refiriendo a tus amigos. Por cada referido que complete 1 cambio obtendrás 2 KASH. con el KASH puedes ahorrar o
              retirarlo a una de tus cuentas bancarias.{" "}
              <Link href="/beneficios">
                <a className="underline">
                  <b>Conoce más aquí.</b>
                </a>
              </Link>
            </p>
            <Image src="/images/illustrations/kash-equal.svg" objectFit="contain" width={350} height={150} />
            <a className={styles.Button} href="https://app.instakash.net/signup">
              Registrarse
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <div className={styles.KashInfoBox}>
            <Image src="/images/illustrations/refiere-gana.svg" width={110} height={70} />
            <p className="mt-2">
              Cuando tu referido realiza su primer cambio, tu ganas 2 KASH y tu referido una tasa especial. Copia y comparte el código que está en tu perfil de InstaKash.
            </p>
          </div>
          <div className={styles.KashInfoBox}>
            <Image src="/images/illustrations/ahorra-retira.svg" width={110} height={70} />
            <p className="mt-2">
              Puedes acumular tus KASH y luego retirarlos transfiriéndolos a tu cuenta en dólares en forma de dinero. Un dinero extra para tus ahorros. Hasta 15 KASH por retiro.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={styles.AppWrapper}>
          <div className={styles.AppImage}>
            <Image src="/images/illustrations/app.png" alt="Descarga Instakash App" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.AppInfoWrapper}>
            <h2>
              Descarga Instakash App <br /> casa de cambio online
            </h2>
            <p>Con el mejor tipo de cambio comienza el cambio, fácil y seguro del Perú. Disponible para android y IOS.</p>
            <ul>
              <li>
                <FaCheckCircle size={20} className="mr-2" /> Notificaciones en el mejor momento para cambiar.
              </li>
              <li>
                <FaCheckCircle size={20} className="mr-2" /> Beneficios exclusivos para nuestros usuarios.
              </li>
              <li>
                <FaCheckCircle size={20} className="mr-2" /> Servicio al cliente personalizado cuando lo necesites.
              </li>
            </ul>
            <div className="flex items-center justify-center md:justify-start mt-6">
              <a href="https://play.google.com/store/apps/details?id=net.instakash.app" className={styles.AppDownloadIcon}>
                <Image src="/images/illustrations/playstore.svg" alt="Descarga Instakash en play store" layout="fill" objectFit="contain" />
              </a>
              <a href="https://apps.apple.com/pe/app/instakash/id1601561803" className={styles.AppDownloadIcon}>
                <Image src="/images/illustrations/appstore.svg" alt="Descarga Instakash en app store" layout="fill" objectFit="contain" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <BaseModal isOpen={infoModal} onClose={handleCloseModal}>
        <a href="https://linktr.ee/instakashnet" target="_blank" rel="noopener noreferrer">
          <Image src="/images/banners/popup.jpg" alt="noticia importante" layout="fill" objectFit="cover" />
        </a>
      </BaseModal>
      <Script
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org/", "@type": "WebSite",
            "name": "InstaKash",
            "url": "https://instakash.net/", "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
            } }
          `,
        }}
      />
    </>
  );
};

export default Home;
