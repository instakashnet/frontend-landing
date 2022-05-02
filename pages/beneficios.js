import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
// COMPONENTS
import Card from "../components/UI/Card";
import { BaseModal } from "../components/UI/Modal";
import styles from "../styles/beneficios.module.scss";

const Promociones = () => {
  const [modalType, setModalType] = useState(""),
    [isModalOpen, setIsModalOpen] = useState(false);

  // HANDLERS
  const openModalHandler = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalType("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Beneficios de Cambiar Dólares a Soles en Instakash</title>
        <meta name="title" content="Beneficios de Cambiar en Instakash Casa de Cambio Online" />
        <meta name="description" content="Aprovecha los cupones, sorteos y más beneficios que te da Instakash por cambia dólares a Soles. ¡Enterate Aquí!" />
        <meta httpEquiv="content-language" content="es_PE" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://instakash.net/beneficios" />
        <meta name="author" content="Instakash" />
        <meta name="url" content="https://instakash.net/beneficios" />

        <meta property="og:title" content="Beneficios de Cambiar Dólares a Soles en Instakash" />
        <meta property="og:site_name" content="Instakash" />
        <meta property="og:url" content="https://instakash.net/beneficios" />
        <meta property="og:description" content="Aprovecha los cupones, sorteos y más beneficios que te da Instakash por cambia dólares a Soles" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
      </Head>
      <section>
        <div className="container section-wrapper text-center mt-16 mb-24">
          <h1 className={styles.Title}>Beneficios</h1>
          <hr className="mx-auto w-1/3 my-6" />
          <h3 className={styles.Subtitle}>
            Todos los meses tenemos diferentes formas de ayudarte a conseguir las mejores tasas <br /> y que puedas sacar el mayor provecho a tu dinero.
          </h3>

          <article className={styles.PromotionsWrapper}>
            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src="/images/beneficios/sorteo.png" alt="Gana un regalo para mamá" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.Info}>
                <h3>Sorteo</h3>
                <h2>REGALO PARA MAMÁ</h2>
                <p className={styles.Date}>
                  <time dateTime="01-04-2022">02/05</time> al <time dateTime="30-04-2022">27/05</time> del 2022
                </p>
                <p>
                  Sabemos que quieres engreírla en su día y todo el mes, por eso, InstaKash te premia con el mejor regalo! Participa del sorteo y gana 1 sesión de circuito termal +
                  masajes suecos en el Marriot, totalmente GRATIS!
                </p>
                <div className={styles.Actions}>
                  <a href="https://app.instakash.net/signin" className="mr-4">
                    Participar
                  </a>
                  <a href="#">Saber más</a>
                </div>
              </div>
            </Card>

            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src="/images/beneficios/mes-madre.png" alt="Cupón para cambio online GRACIASMAMA" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.Info}>
                <h3>Cupón del mes</h3>
                <h2>GRACIASMAMA</h2>
                <p className={styles.Date}>
                  <time dateTime="01-04-2022">01/05</time> al <time dateTime="30-04-2022">31/05</time> del 2022
                </p>
                <p>
                  En este mes de mamá, haz tus cambios usando este cupón y obtén 20 puntos a favor de tu cambio. Cupón válido desde el 1 de Mayo hasta el 31 de Mayo. Válido para 4
                  cambios.
                </p>
                <div className={styles.Actions}>
                  <a href="https://app.instakash.net/signin" className="mr-4">
                    Acceder y usar cupón
                  </a>
                  <button type="button" onClick={() => openModalHandler("coupons")}>
                    ¿Como usar los cupones?
                  </button>
                </div>
              </div>
            </Card>

            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src="/images/beneficios/supermontos.png" alt="Cupones para cambiar online con SUPERMONTOS" layout="fill" objectFit="contain" />
              </div>
              <div className={styles.Info}>
                <h3>Cupones activos</h3>
                <h2>SUPERMONTOS</h2>
                <p>Usa tus cupones supermontos para obtener el mejor descuento en el tipo de cambio para tus cambios desde 5000 USD.</p>
                <div className={styles.Actions}>
                  <a href="https://app.instakash.net/signin" className="mr-4">
                    Acceder y usar cupón
                  </a>
                  <button type="button" onClick={() => openModalHandler("supercoupons")}>
                    ¿Cuales son los cupones?
                  </button>
                </div>
              </div>
            </Card>

            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src="/images/beneficios/kash.png" alt="Gana KASH cambiando dólares online" layout="fill" objectFit="contain" />
              </div>
              <div className={styles.Info}>
                <h3>Refiere y</h3>
                <h2>GÁNA KASH</h2>
                <p>Invita a tus amigos a Instakash y con su primer cambio te ganas 1 KASH y tu referido un descuento en la tasa.</p>
                <div className={styles.Actions}>
                  <a href="https://app.instakash.net/signin" className="mr-4">
                    Acceder y referir
                  </a>
                  <button type="button" onClick={() => openModalHandler("usercode")}>
                    ¿Como usar tu código?
                  </button>
                </div>
              </div>
            </Card>
          </article>
        </div>
      </section>
      <BaseModal isOpen={isModalOpen} onClose={closeModalHandler}>
        {modalType === "supercoupons" ? (
          <SuperCouponsModal />
        ) : (
          <video controls loop muted style={{ width: "100%" }}>
            <source src={modalType === "usercode" ? "/videos/refer_a_friend.mp4" : "/videos/coupon_usage.mp4"} />
          </video>
        )}
      </BaseModal>
      <Script
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org/", "@type": "WebSite",
            "url": "https://instakash.net/beneficios", "potentialAction": {
            "@type": "SearchAction",
            "target": "https://instakash.net/beneficios{search_term_string}", "query-input": "required name=search_term_string"
            } }
          `,
        }}
      />
    </>
  );
};

const SuperCouponsModal = () => (
  <div className="modal-body">
    <h3>Ahorra con nuestros Super montos</h3>
    <p>
      Cuando desees cambiar montos desde 5000 USD en adelante, te ofrecemos hasta 3 cupones para que ahorres y obtengas una de las mejores tasas del mercado y sin límite de uso.
    </p>
    <ul>
      <li>
        Para montos desde 5MIL USD usa nuestro cupón <b>DESDE5000</b>
      </li>
      <li>
        Para montos desde 10MIL USD usa nuestro cupón <b>DESDE10000</b>
      </li>
      <li>
        Para montos desde 20MIL USD usa nuestro cupón <b>DESDE20000</b>
      </li>
    </ul>
    <Link className="mx-auto mt-6 block" href="/terminos-y-condiciones#cupones">
      <a>Conoce más sobre el uso de nuestros cupones aquí</a>
    </Link>
  </div>
);

export default Promociones;
