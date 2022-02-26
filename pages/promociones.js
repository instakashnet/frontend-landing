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
                <div className="grid justify-center mt-5">
                  <a href="https://app.instakash.net/signin" className="mr-4">
                    Acceder y usar cupón
                  </a>
                  {/* <button type="button" onClick={() => openModalHandler("coupons")}>
                    ¿Como usar los cupones?
                  </button> */}
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
                <div className="grid justify-center mt-5">
                  <a href="https://app.instakash.net/signin" className="mr-4">
                    Acceder y referir
                  </a>
                  {/* <button type="button" onClick={() => openModalHandler("usercode")}>
                    ¿Como usar tu código?
                  </button> */}
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
                <div className="grid justify-center mt-5">
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
        {/* <FileViewer fileType="pdf" filePath="https://instakash-docs.s3.us-east-2.amazonaws.com/Te%CC%81rminos+y+condiciones+concursos+INSTAKASH.docx.pdf" /> */}
        <MultiPages pdf="https://instakash-docs.s3.us-east-2.amazonaws.com/Te%CC%81rminos+y+condiciones+concursos+INSTAKASH.docx.pdf" />
      </BaseModal>
    </>
  );
};

export default Promociones;
