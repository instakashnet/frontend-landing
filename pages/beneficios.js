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
            {/* <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src="/images/beneficios/sorteo.png" alt="Gana unos audifonos Hauwei" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.Info}>
                <h3>Cupón del mes</h3>
                <h2>SEMANASANTA</h2>
                <p className={styles.Date}>
                  <time dateTime="01-04-2022">01/04</time> al <time dateTime="30-04-2022">30/04</time> del 2022
                </p>
                <p>En abril haz tus cambios usando el cupón SEMANASANTA y obtén 20 PIPS a favor de tu cambio. Cupón válido durante el mes de abril. Válido para 4 cambios.</p>
                <div className={styles.Actions}>
                  <a href="https://app.instakash.net/signin" className="mr-4">
                    Acceder y usar cupón
                  </a>
                  <button type="button" onClick={() => openModalHandler("coupons")}>
                    ¿Como usar los cupones?
                  </button>
                </div>
              </div>
            </Card> */}

            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src="/images/beneficios/semanasanta.png" alt="Cupón para cambio online SEMANASANTA" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.Info}>
                <h3>Cupón del mes</h3>
                <h2>SEMANASANTA</h2>
                <p className={styles.Date}>
                  <time dateTime="01-04-2022">01/04</time> al <time dateTime="30-04-2022">30/04</time> del 2022
                </p>
                <p>En abril haz tus cambios usando el cupón SEMANASANTA y obtén 20 PIPS a favor de tu cambio. Cupón válido durante el mes de abril. Válido para 4 cambios.</p>
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
                <Image src="/images/beneficios/utilidades.png" alt="Cupón para cambio online MESDEUTILIDADES" layout="fill" objectFit="cover" />
              </div>
              <div className={styles.Info}>
                <h3>Cupón del mes</h3>
                <h2>MESDEUTILIDADES</h2>
                <p className={styles.Date}>
                  <time dateTime="04-04-2022">04/04</time> al <time dateTime="15-04-2022">15/04</time> del 2022
                </p>
                <p>
                  Desde el 4 de abril y hasta el 15 de abril cambia tus utilidades con nuestro cupón especial ABRILDEUTILIDADES, te dará 25 PIPS a favor de tu cambio. Válido para 1
                  vez.
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
                <p>Usa tus cupones supermontos para ahorrar en la comisión de tus cambios desde 5000 USD.</p>
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
        {modalType === "promo" ? (
          <PromoModal />
        ) : modalType === "supercoupons" ? (
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
      Conoce más sobre el uso de nuestros cupones aquí
    </Link>
  </div>
);

const PromoModal = () => (
  <div className="modal-body">
    <h3>Gana con Instakash</h3>
    <p>Una tarde para disfrutar del partido Perú - Uruguay el día 24 de marzo de 2022, incluye salón privado para 4 amigos, bebidas y piqueos.</p>
    <p className="font-bold">1 ganador que será elegído por nuestro Instagram el 21 de Marzo.</p>
    <h4>Detalle del premio:</h4>
    <ol>
      <li>Sala Privada City View, acondicionada para ver el partido de URUGUAY - PERÚ Pantalla grande.</li>
      <li>Sillón con mesita para colocar las bebidas o una mesa para 4 personas.</li>
      <li>
        Pack chilcanero para 4. Consta de 6 botellas de macerados o pisco de 8 Onz que rinden para 24 chilcanos, que podrán compartir entre las 4 personas (6 por persona
        aproximadamente).
      </li>
      <li>Un piqueo a escoger de la carta por persona.</li>
      <li>El horario del partido está por definirse.</li>
    </ol>
    <h4>¿Quién puede participar?</h4>
    <ul>
      <li>
        Podrán participar en la actividad todas las personas naturales, mayores de edad (+18), que sigan el Instagram de Instakash, que residan en Lima (Perú) y que tengan su
        carnet de vacunación hasta la segunda dosis.
      </li>
      <li>
        El concurso se desarrollará el día sábado 26 de febrero del 2022, finalizará el domingo 20 de marzo de 2021 a las 12:00 PM. Los ganadores serán publicados el lunes 21 de
        marzo de 2022, en las redes de Instakash, a través de un fotocomentario en la publicación del concurso en Instagram.
      </li>
      <li> En el Instagram de Instakash se publicarán los términos y condiciones del concurso, el día 26 de febrero de 2022 así como en la página web de Instakash.</li>
      <li>
        Los participantes deberán seguir el Instagram de Instakash{" "}
        <a href="https://www.instagram.com/instakashnet/?hl=es-la" target="_blank" rel="noopener noreferrer">
          @instakashnet
        </a>
        . Los interesados en participar deberán seguir los pasos que estarán en el post <b>publicado el día 26 de febrero de 2022 al 21 de marzo de 2022</b> en el Instagram de
        Instakash Perú. Para que se tome en cuenta la participación, cada usuario deberá realizar lo siguiente:
        <br />
        <span className="font-bold">1. Seguir la página de Instagram Instakash Perú.</span>
        <br />
        <span className="font-bold">2. Etiquetar 3 amigos con los que quieras ir uno de los mejores hoteles de Lima a ver el partido PERÚ - URUGUAY.</span>
      </li>
    </ul>
    <h4>Selección de ganadores y entrega:</h4>
    <ul>
      <li>
        El participante que cumpla con todos los requisitos mencionados, serán seleccionados como ganadores, y se podrán llevar el premio señalado. Cabe resaltar que estos serán
        elegidos al azar.
      </li>
      <li>
        No se aceptarán concursantes que participen fuera de las fechas y horas estipuladas dentro de estos términos y condiciones. Los concursantes que participen fuera de la
        vigencia establecida no serán tomados en cuenta para selección de posibles ganadores.
      </li>
      <li>
        Los participantes que resulten ganadores de la mecánica y que cumplan con todos los requisitos mencionados, serán contactados por un mensaje interno (inbox), y se les darán
        las indicaciones para la redención de su premio.
      </li>
      <li>
        Una vez notificado el participante, deberá confirmar la notificación y enviar sus datos personales (nombres, apellidos, número de documento de identidad, dirección de
        correo electrónico, celular, fotocopia del documento de identidad y confirmar si tienen su carnet de vacunas hasta la segunda dosis de refuerzo.).
      </li>
      <li>
        Si dentro de las ocho (8) horas siguientes a la notificación, el participante elegido no ha enviado los datos de contacto, la marca se reserva la entrega del premio y el
        premio se le asignará al siguiente participante que haya cumplido con la mecánica en Instagram y que cumplan con todos los requisitos mencionados, y así sucesivamente.
      </li>
      <li>La organización y confirmación de este premio se realizará a través de los canales oficiales de contacto de la marca.</li>
    </ul>
    <a className="mx-auto mt-6 block" href="https://instakash-media.s3.us-east-2.amazonaws.com/terms-conditions-peruvsuruguay.docx.pdf" target="_blank" rel="noopener noreferrer">
      Puedes leer completo los términos y condiciones aquí.
    </a>
  </div>
);

export default Promociones;
