import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";
import QuestionItem from "../components/questions/QuestionItem";
import styles from "../styles/FAQ.module.scss";

const Faq = () => {
  const [rates, setRates] = useState({ buy: 0, sell: 0 });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://api.instakash.net/exchange-service/api/v1/client/rates"),
          data = await res.json();

        setRates({ ...data[0], buy: +data[0].buy, sell: +data[0].sell });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Preguntas frecuentes Instakash</title>
        <meta name="title" content="Preguntas Instakash | Casa de Cambio Online" />
        <meta name="description" content="Enterate de Tipo de Cambio Actual. Conoce la evolución del dólar en Perú en Instakash Casa de cambio Online" />
        <meta httpEquiv="content-language" content="es_PE" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://instakash.net/faq" />
        <meta name="author" content="InstaKash" />
        <meta name="url" content="https://instakash.net/faq" />

        <meta property="og:title" content="Preguntas Instakash | Casa de Cambio Online" />
        <meta property="og:site_name" content="Instakash" />
        <meta property="og:url" content="https://instakash.net/faq" />
        <meta property="og:description" content="Enterate de Tipo de Cambio Actual. Conoce la evolución del dólar en Perú en Instakash Casa de cambio Online" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
      </Head>
      <section className={`py-12 lg:py-20 ${styles.questions}`}>
        <div className="container ">
          <h1 className={styles.Title}>¿Cómo podemos ayudarte?</h1>
          <article className="max-w-4xl mx-auto">
            <div className={styles.questionWrapper}>
              <p className={styles.Subtitle}>Sobre Instakash</p>
              <Accordion allowZeroExpanded>
                <QuestionItem header="¿Qué es una casa de cambio online?">
                  <p>
                    Es una plataforma que te permite la compra y venta de dólares a través de internet, sin salir de casa. <br /> En Instakash te ofrecemos una forma plataforma
                    fácil, segura, certificada por la SBS y con el mejor tipo de cambio. <br /> Puedes descargar nuestro APP en{" "}
                    <a href="https://apps.apple.com/pe/app/instakash/id1601561803">Iphone</a> y/o{" "}
                    <a href="https://play.google.com/store/apps/details?id=net.instakash.app">Android</a>.
                  </p>
                </QuestionItem>
                <QuestionItem header="¿Es seguro cambiar en una casa de cambio online?">
                  <p>Para que tengas una experiencia positiva al cambiar dólares online asegúrate de que tu casa de cambio online esté:</p>
                  <ul>
                    <li>Inscrita y avalada por la SBS. Como Instakash. 😉</li>
                    <li>Tenga el candadito de “seguridad” que certifica que la página es segura. Como Instakash. 😉</li>
                    <li>Tenga canales de atención al cliente inmediata. Como Instakash. 😉</li>
                    <li>Tenga un sistema de protección de tus datos Como Instakash. 😉</li>
                    <li>Tenga sistema de validación de identidad Como Instakash. 😉</li>
                    <li>Asegurate de revisar el tipo de cambio aprobado al momento de finalizar la operación.</li>
                  </ul>
                </QuestionItem>
                <QuestionItem header="¿Cuál es el tipo de cambio en este momento?">
                  <p>
                    El tipo de cambio para comprar es <b>{Number(rates.buy).toFixed(3)}</b> y para vender es <b>{Number(rates.sell).toFixed(3)}</b>.
                  </p>
                </QuestionItem>
                <QuestionItem header="¿Cómo comprar o vender dólares de forma segura y con el mejor tipo de cambio?">
                  <p>Regístrate en Instakash o descarga nuestra app y cotiza el tipo de cambio compra y venta.</p>
                  <ol>
                    <li>Ingresa los datos para la transferencia</li>
                    <li>Transfiere desde tu banco a Instakash</li>
                    <li>Confirma el número de transferencia en Instakash y recibe tu dinero</li>
                  </ol>
                </QuestionItem>
              </Accordion>
            </div>

            <div className={styles.questionWrapper}>
              <Accordion allowZeroExpanded>
                <QuestionItem header="¿Hay un monto máximo por operación?">
                  <p>
                    Instakash no tiene monto máximo. Sin embargo, su banco le puede asignar un máximo de transferencia al día. En ese caso puede realizar su transferencia en la
                    misma agencia, por ventanilla (solo si la cuenta es de Lima). Primero deberá registrar su operación en nuestra plataforma e ingresar el nro. de su vouched de
                    ventanilla en nuestra plataforma. Puede escribrinos por whatsapp a <b>+51 927 013 800</b>. *En el caso de provincias, solo puede utilizar su banca en línea para
                    empresas o personas.
                  </p>
                </QuestionItem>
                <QuestionItem header="¿Cuál es el tipo de cambio garantizado?">
                  <p>
                    El tipo de cambio cerrado al momento de pactar una operación, define el monto que el cliente recibe después de validar la misma. Este tipo de cambio está
                    garantizado por un tiempo de 15 minutos luego de colocada la orden de compra, en este tiempo el usuario deberá realizar la transferencia a las cuentas de
                    Instakash y colocar el número de comprobante.
                  </p>
                </QuestionItem>
                <QuestionItem header="¿Cómo sé que envié el pago?">
                  <p>
                    La constancia de tu operación puede ser el número de operación del comprobante de pago si es de un mismo banco, y si es interbancaria, la constancia será el
                    mismo voucher. Esta puede ser la constancia física (papel recibido después de hacer el depósito) o virtual (enviada por mail al momento de hacer la
                    transferencia).
                  </p>
                </QuestionItem>
                <QuestionItem header="¿Cuando sé procesará mi operación?">
                  <p>
                    Su operación será procesada cuando recibamos en nuestras cuentas el dinero y lo validemos con el voucher de la operación. Una vez confirmado el abono en
                    nuestras cuentas recibirás una confirmación vía email y en nuestro portal web cuando hayamos enviado su cambio. El proceso de validación demora como máximo un
                    día hábil. Para conocer más puede ver nuestros{" "}
                    <Link href="/terminos-y-condiciones">
                      <a>términos y condiciones</a>
                    </Link>
                    .
                  </p>
                </QuestionItem>
                <QuestionItem header="¿Con qué monedas trabaja Instakash?">
                  <p>Por el momento, solo trabajamos con dólares y soles.</p>
                </QuestionItem>
                <QuestionItem header="¿Puedo ver el proceso de mis operaciones?">
                  <p>
                    Todas las operaciones que hayas realizado quedarán registradas en tu perfil. Además, serás notificado vía correo electrónico cuando realice cada transacción y
                    la misma sea procesada o cancelada.
                  </p>
                </QuestionItem>
                <QuestionItem header="¿Cual es el tiempo estimado de los bancos?">
                  <p>
                    El tiempo estimado que demora la transferencia está sujeto al tiempo que demoren en llegar los fondos transferidos a las cuentas de Instakash. Nosotros no
                    tenemos ningún control sobre el tiempo que pueda llegar a demorar la transferencia de los fondos. Instakash no realizará ninguna transacción sin antes haber
                    recibido los fondos por parte del cliente. Por lo general, el tiempo total para completar la transacción no debería ser mayor a dos días hábiles.
                  </p>
                </QuestionItem>
                <QuestionItem header="¿Cómo cancelo mi operación?">
                  <p>
                    Si ya has creado una orden de compra y hay datos del destinatario que no son correctos, por favor ponte en contacto con nosotros lo antes posible para que
                    podamos ayudarte. Puedes escribirnos un email a <a href="mailto:contacto@instakash.net">contacto@instakash</a>. o a nuestros whatsapp con tus datos y te
                    contactaremos a la brevedad para solucionar el problema.
                  </p>
                </QuestionItem>
              </Accordion>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Faq;
