import Head from "next/head";

import styles from "../styles/Home.module.scss";

const Home = () => {

  return (
    <>
      <Head>
        <title>Instakash | La casa de cambio del perú con mejores tasas</title>
        <meta
          name="description"
          content="gana con Instakash y dale a tu dinero el valor que merece. Somos la casa de cambio con las mejores tasas del Perú. Transferencias inmediatas."
        />
      </Head>
      <section className={styles.calculatorSection}>
        <img src="/images/maintenance.png" alt="En mantenimiento" />
        <div className={styles.infoWrapper}>
        <h1>Seguimos mejorando</h1>
        <p>Actualmente estamos realizando tareas de mantenimiento y optimización de nuestros servidores para poder seguir brindándoles la mejor experiencia.</p>
        <span className="mt-6 block">Siguenos en nuestras redes para estar informado:</span>
        <div className="flex justify-center tems-center my-5">
            <a href="https://www.instagram.com/instakashnet/" target="_blank" rel="noopener noreferrer" className="mr-6">
              <img src="/images/social/instagram-green.svg" className="w-8 md:w-10" />
            </a>
            <a href="https://www.facebook.com/Instakash-103956227716506" target="_blank" rel="noopener noreferrer" className="mr-6">
              <img src="/images/social/facebook-green.svg" className="w-8 md:w-10" />
            </a>
            <a href="https://www.linkedin.com/company/71140162" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/linkedin-green.svg" className="w-8 md:w-10" />
            </a>
          </div>
          <span className="font-bold">Estaremos de vuelta enseguida</span>
        </div>
      </section>
    </>
  );
};

export default Home;
