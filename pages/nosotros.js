import Head from "next/head";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/Nosotros.module.scss";

const Nosotros = () => {
  return (
    <>
      <Head>
        <title>Nosotros | Instakash</title>
        <meta
          name="description"
          content="Somos una casa de cambio totalmente digital que se encarga de ofrecer siempre las mejores tasas del Perú, así como beneficios para ganar a través de referidos y mucho más. Experimenta con nosotros la revolución Fintech."
        />
      </Head>
      <section className={styles.About}>
        <div className="container section-wrapper text-center mt-6 mb-8">
          <h1 className={styles.Title}>Instakash</h1>
          <h3 className={styles.Subtitle}>La Fintech del futuro</h3>
          <hr className="mx-auto mb-8" />
          <p className="mb-6 px-4 md:w-2/3 mx-auto">
            Somos una casa de cambio digital en el Perú, nuestra misión es trabajar para que el tipo de cambio compra y venta de tus dólares sea más fácil, segura y con la mejor
            tasa del mercado.
          </p>
          <p className="mb-6">
            Cambiando con Instakash además podrás disfrutar de tu dinero con los beneficios exclusivos que tenemos para ti, los cupones para seguir mejorando tu tasa de cambio y
            actividades para que sigas disfrutando de cambiar con Instakash.
          </p>

          <p className="mb-6">
            Desde hace 3 años Instakash es parte del ecosistema Fintech del Perú, a la fecha más de 19.000 personas han confiado en nosotros moviendo más de 574 millones de soles.
            Seguimos, comprometidos con entregarte la mejor experiencia de cambio de dólares en el Perú.
          </p>

          <p className="mb-6">
            Instakash, <strong>con la mejor tasa comienza el cambio.</strong>
          </p>
          <h3>¡Síguenos!</h3>
          <div className="flex items-center justify-center mt-6">
            <a href="!#" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/instagram-green.svg" className="mx-3" />
            </a>
            <a href="!#" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/facebook-green.svg" className="mx-3" />
            </a>
            <a href="!#" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/linkedin-green.svg" className="mx-3" />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.WhyUs}>
        <div className="container section-wrapper md:pt-16 pb-12 md:pb-56">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article>
              <h2 className={styles.Title}>¿Por qué elegírnos?</h2>
              <h3 className={styles.Subtitle}>Estas son las razones que consideramos más importantes</h3>
              <ul className="mt-4 md:mt-10">
                <li>
                  <FaCheckCircle size={25} className="mr-3" />
                  <span>
                    Porque valoramos tu dinero, por eso te ofrecemos
                    <strong> la mejor tasa de cambio del Perú</strong>.
                  </span>
                </li>
                <li>
                  <FaCheckCircle size={35} className="mr-3" />
                  <span>
                    Porque estamos conscientes de que mereces lo mejor, por eso nuestra plataforma es <b>100% amigable, sencilla y de confianza.</b>
                  </span>
                </li>
                <li>
                  <FaCheckCircle size={30} className="mr-3" />
                  <span>Porque nos importa que mejores tus finanzas, por eso desarrollamos diversos servicios accesibles y de calidad.</span>
                </li>
                <li>
                  <FaCheckCircle size={35} className="mr-3" />
                  <span>
                    Porque queremos que te sientas apoyado financieramente, por eso brindamos <strong>soluciones financieras innovadoras y revolucionaras.</strong>
                  </span>
                </li>
              </ul>
            </article>
            <img className="self-center place-self-center" src="/images/illustrations/why-us.svg" alt="Casa de cambio del Perú" />
          </div>
        </div>
      </section>
      <section className="container section-wrapper text-center pt-12">
        <h2 className={styles.Title}>¡Empieza a usar nuestros servicios!</h2>
        <h3 className={styles.Subtitle}>Sómos la Fintech del futuro</h3>
        <hr className="mx-auto" />
        <p className="my-6 px-4 md:w-2/3 mx-auto">
          Tenemos muchas cosas que ofrecerte. Con seguridad y transparencia te brindamos beneficios diseñados para tu tranquilidad financiera.{" "}
          <b>¡Regístrate en nuestra plataforma y comienza a realizar tus operaciones, si ya estas registrado genial!</b>, podrás compartir tu código de afiliado con amigos y
          empezar a ganar.
        </p>
        <a href="https://app.instakash.net" className={styles.StartButton}>
          Ingresar
        </a>
      </section>
    </>
  );
};

export default Nosotros;
