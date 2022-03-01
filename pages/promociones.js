import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import dynamic from "next/dynamic";

// COMPONENTS
import Card from "../components/UI/Card";
import { BaseModal } from "../components/UI/Modal";
import { MultiPages } from "../components/pdf/multi-pages";

import styles from "../styles/promociones.module.scss";
import SanValentin from "../assets/images/sanvalentin.png";
import Kash from "../assets/images/kash.png";
import Peru from "../assets/images/peru.png";

// const FileViewer = dynamic(() => import("react-file-viewer"), {
//   ssr: false,
// });

const Promociones = () => {
  const [modalType, setModalType] = useState(""),
    [isModalOpen, setIsModalOpen] = useState(false);

  // HANDLERS
  const openModalHandler = (type) => {
    setModalType(type);
    setIsModalOpen(true);

    console.log(modalType);
  };

  const closeModalHandler = () => {
    setModalType("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Promociones | Instakash</title>
        <meta name="description" content="Promociones disponibles para tus cambios de divisas." />
      </Head>
      <section>
        <div className="container section-wrapper text-center mt-16 mb-24">
          <h1>Promociones</h1>
          <hr className="mx-auto w-1/3 my-6" />
          <h3 className="mb-12">
            Todos los meses tenemos diferentes formas de ayudarte a conseguir las mejores tasas <br /> y que puedas sacar el mayor provecho a tu dinero.
          </h3>

          <article className={styles.PromotionsWrapper}>
            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src={SanValentin} alt="Cupón SANVALENTIN" layout="fill" objectFit="contain" />
              </div>
              <div className={styles.Info}>
                <h3>Cupón del mes</h3>
                <h2>SANVALENTIN</h2>
                <p className={styles.Date}>
                  <time dateTime="01-02-2022">01/02</time> al <time dateTime="28-02-2022">28/02</time> del 2022
                </p>
                <p>Este mes del amor y la amistad, nuestro cupón es SANVALENTIN. Úsalo y obten la mejor tasa del mercado.</p>
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
                <Image src={Kash} alt="Gana KASH" layout="fill" objectFit="contain" />
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
            <Card className={styles.PromotionCard}>
              <div className={styles.Cover}>
                <Image src={Peru} alt="Gana con Perú" layout="fill" objectFit="contain" />
              </div>
              <div className={styles.Info}>
                <h3>Sorteo</h3>
                <h2>PERÚ VS URUGUAY</h2>
                <p className={styles.Date}>
                  <time dateTime="01-02-2022">26/02</time> al <time dateTime="28-02-2022">20/03</time> del 2022
                </p>
                <p>Disfruta el partido Perú - Uruguay en uno de los mejores hoteles de Lima junto a tres amigos.</p>
                <div className={styles.Actions}>
                  <a href="https://www.instagram.com/p/Cacd9jKr6M5/?utm_source=ig_web_copy_link" className="mr-4">
                    Ir a instagram
                  </a>
                  <button type="button" onClick={() => openModalHandler("promo")}>
                    Términos y condiciones
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
        ) : (
          <video controls loop muted style={{ width: "100%" }}>
            <source src={modalType === "usercode" ? "/videos/refer_a_friend.mp4" : "/videos/coupon_usage.mp4"} />
          </video>
        )}
      </BaseModal>
    </>
  );
};

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
