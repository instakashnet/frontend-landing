import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";
import QuestionItem from "../components/questions/QuestionItem";
import Tabs from "../components/questions/tabs.component";
import styles from "../styles/FAQ.module.scss";

const Faq = () => {
  const [rates, setRates] = useState({ buy: 0, sell: 0 }),
    [selectedTab, setSelectedTab] = useState(1),
    {
      query: { tab },
    } = useRouter();

  useEffect(() => {
    if (tab) setSelectedTab(+tab);
  }, [tab]);

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

  console.log(rates);

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
        <div className="container">
          <h1 className={styles.Title}>¿Cómo podemos ayudarte?</h1>
          <article className="max-w-4xl mx-auto">
            <div className={styles.questionWrapper}>
              <Tabs activeTab={selectedTab} />

              <Accordion allowZeroExpanded>
                {selectedTab === 1 && (
                  <>
                    <QuestionItem header="¿Cuál es el tipo de cambio para hoy?">
                      <p>El tipo de cambio para comprar es____ y para vender es ____</p>
                    </QuestionItem>
                    <QuestionItem header="¿Qué es una casa de cambio online?">
                      <p>Es una plataforma que te permite la compra y venta de dólares a través de internet, sin salir de casa.</p>
                      <p>
                        En Instakash te ofrecemos una forma plataforma fácil, segura, certificada por la SBS y con el mejor tipo de cambio. Descarga nuestra app para{" "}
                        <a href="https://apps.apple.com/pe/app/instakash/id1601561803" target="_blank" rel="noopener noreferer">
                          IOS
                        </a>{" "}
                        y/o{" "}
                        <a href="https://play.google.com/store/apps/details?id=net.instakash.app" target="_blank" rel="noopener noreferer">
                          Android
                        </a>
                        .
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Es seguro cambiar en una casa de cambio online?">
                      <p>Para que tengas una experiencia positiva al cambiar dólares online asegúrate de que tu casa de cambio online esté:</p>
                      <ul className="mb-4">
                        <li>Inscrita y avalada por la SBS. Como Instakash 😉</li>
                        <li>Tenga el candadito de “seguridad” que certifica que la página es segura. Como Instakash 😉</li>
                        <li>Tenga canales de atención al cliente inmediata. Como Instakash 😉</li>
                        <li>Tenga un sistema de protección de tus datos Como Instakash 😉</li>
                        <li>Tenga sistema de validación de identidad Como Instakash 😉</li>
                      </ul>

                      <p>Asegurate de revisar el tipo de cambio aprobado al momento de finalizar la operación</p>
                    </QuestionItem>
                    <QuestionItem header="¿Cómo comprar o vender dólares de forma segura y con el mejor tipo de cambio?">
                      <p>
                        Regístrate en Instakash o descarga nuestra app para{" "}
                        <a href="https://apps.apple.com/pe/app/instakash/id1601561803" target="_blank" rel="noopener noreferer">
                          IOS
                        </a>{" "}
                        y/o{" "}
                        <a href="https://play.google.com/store/apps/details?id=net.instakash.app" target="_blank" rel="noopener noreferer">
                          Android
                        </a>{" "}
                        y cotiza el tipo de cambio compra y venta.
                      </p>
                      <ol>
                        <li>Ingresa los datos para la transferencia.</li>
                        <li>Transfiere desde tu banco a Instakash.</li>
                        <li>Confirma el número de transferencia en Instakash y recibe tu dinero.</li>
                      </ol>
                    </QuestionItem>
                    <QuestionItem header="¿Instakash tiene Cupones y beneficios para cambiar mejor?">
                      <p>
                        En Instakash hemos creado{" "}
                        <Link href="/beneficios">
                          <a>cupones y beneficios</a>
                        </Link>{" "}
                        para seguir mejorando tu tipo de cambio, también tenemos sorteos mensuales por tus cambios y beneficios en plataforma para que disfrutes de las beneficios
                        de cambiar. Conoce nuestros KASH.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Qué comisiones debo tener en cuenta al comprar o vender dólares?">
                      <p>
                        Instakash no te cobra comisiones extra por realizar el cambio. Las comisiones que debes tener en cuenta son las comisiones que te cobra tu banco para
                        desembolsar el dinero que vas a cambiar. Suelen ser unas cuando son cuentas en provincia y otras cuando son interbancarias.{" "}
                        <Link href="/terminos-y-condiciones">
                          <a>Conoce más información aquí.</a>
                        </Link>
                        .
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Con qué monedas trabaja Instakash?">
                      <p>Por el momento, solo trabajamos con dólares y soles.</p>
                    </QuestionItem>
                  </>
                )}
                {selectedTab === 2 && (
                  <>
                    <QuestionItem header="¿Que son los KASH?">
                      <p>
                        Son monedas digitales que adquieres en Instakash y que te sirven para ahorrarlos en Instakash o para retirarlos. 1 KASH equivale a $1 dólar.{" "}
                        <a href="https://app.instakash.net/signup">Regístrate</a> y comienza a ganar.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Cómo uso mis KASH?">
                      <p>
                        Usar tus kash es muy fácil y productivo. 1) Puedes canjearlos por los diferentes beneficios exclusivos para usuario. 2) Puedes ponerlos a jugar en los
                        diferentes concursos que tenemos para nuestros usuarios. 3) Puedes ahorrarlos e incluso puedes retirarlos.
                      </p>
                    </QuestionItem>
                  </>
                )}
                {selectedTab === 3 && (
                  <>
                    <QuestionItem header="¿Por qué debo completar mis datos del perfil?">
                      <p>
                        En Instakash debemos tener tus datos personales completos y verificar tu identidad cuando vas a realizar cambios a partir de los 1000 USD, esto para
                        garantizarte la seguridad en tus transacciones. Instakash no te solicitará claves ni accesos a tus cuentas bancarias para operar y tendrás total control de
                        la información que compartes con nosotros así como del intercambio de dinero entre Instakash y los bancos.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Cómo edito los datos de mi perfil?">
                      <p>
                        Todos tus datos personales adicionales pueden ser modificados desde tu pantalla de perfil, por ejemplo, fecha de nacimiento, contraseña, ocupación,
                        profesión y dirección. Todos los datos sensibles como: nombre y documento de identidad deberás solicitarlo con soporte a través de{" "}
                        <a href="mailto:contacto@instakash.net">contacto@instakash.net</a> Si tu perfil es empresa deberás escribirnos directamente a nuestro correo de contacto
                        para realizar cualquier cambio.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Cómo cambio mi contraseña?">
                      <p>Puedes realizarlo al inicio en la sección “registro”, en el apartado “olvide contraseña” así como dentro de tu perfil.</p>
                    </QuestionItem>
                    <QuestionItem header="¿Cómo cambio mi dirección de correo electrónico y mi teléfono?">
                      <p>
                        La dirección de correo electrónico y tu teléfono puedes modificarlos ingresando a tu perfil en la sección de datos básicos. Es importante que tengas en
                        cuenta cada cuenta en Instakash tenga un único correo electrónico y teléfono. Si tienes alguna duda adicional, escríbenos a{" "}
                        <a href="mailto:contacto@instakash.net">contacto@instakash.net</a>
                      </p>
                    </QuestionItem>
                  </>
                )}
                {selectedTab === 4 && (
                  <>
                    <QuestionItem header="¿Hay un monto máximo por operación?">
                      <p>
                        Instakash no tiene monto máximo. Sin embargo, tu banco te puede asignar un máximo de transferencia al día. En ese caso puedes realizar tu transferencia en
                        la misma agencia, por ventanilla (solo si la cuenta es de Lima). Primero deberás registrar tu operación en nuestra plataforma e ingresar el nro. de su
                        voucher de ventanilla en nuestra plataforma. Puedes escribirnos por whatsapp haciendo clic en el símbolo de whatsapp al inferior de la pantalla. *En el caso
                        de provincias, solo puede utilizar su banca en línea para empresas o personas.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Cuál es el tipo de cambio garantizado?">
                      <p>
                        Es el valor del cambio cotizado que te define cuánto recibirás al concluir la operación. Es decir cuando haz enviado el comprobante de la transferencia que
                        te genera tu banco. El tipo de cambio online que te estamos cotizando está garantizado por un tiempo de 15 minutos que comienzan a correr cuando inicias el
                        tercer paso “Transfiere”. Debes enviar el comprobante emitido por tu banco a Instakash antes de que terminen estos 15 minutos, de lo contrario tu pantalla
                        se actualizará indicando un nuevo tipo de cambio. Recuerda esto es fundamental que lo tengas claro.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Puedo ver el estado de mis operaciones?">
                      <p>
                        En Instakash podrás ver en la parte superior de tu pantalla cada uno de los pasos a medida que avanzas en el proceso de cambio. Así mismo conocerás el
                        estado de tu operación a través de correos electrónicos y/o notificaciones de aplicación, siendo estos: en validación, en proceso, exitosa o cancelada.
                        Todas tus transacciones quedan registradas y ligadas a tu cuenta en la sección de “Mis cambios”.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Cómo se que envié el pago?">
                      <p>
                        Recibirás un correo electrónico de parte de tu entidad bancaria con el voucher y el número de operación del comprobante de pago. Este nûmero de operación
                        debes ingresarlo en nuestra plataforma para completar tu pedido. Si es interbancaria, la constancia será el mismo voucher que debes enviarnos a{" "}
                        <a href="mailto:pagos@instakash.net">pagos@instakash.net</a>. Esta puede ser la constancia física (papel recibido después de hacer la transferencia por
                        ventanilla) o virtual (enviada por mail al momento de hacer la transferencia). Recuerda que no recibimos depósitos, solo transferencias.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Cuándo se procesará mi operación?">
                      <p>
                        Tu operación será procesada cuando recibamos en nuestras cuentas el dinero y lo validemos con el voucher de la operación con tu banco. Una vez confirmado el
                        abono en nuestras cuentas recibirás una confirmación vía email o en la aplicación cuando hayamos enviado el cambio a tu cuenta. Para conocer más puede ver
                        nuestros{" "}
                        <Link href="/terminos-y-condiciones">
                          <a>términos y condiciones</a>
                        </Link>
                        .
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Cuál es el tiempo estimado de los bancos?">
                      <p>
                        El tiempo estimado que toma la transferencia está sujeto al tiempo que tardan en llegar los fondos transferidos a las cuentas de Instakash. Cuando las
                        transferencias se realizan entre cuentas del mismo banco, son inmediatas. Cuando son interbancarias pueden tomar hasta 48 horas. Instakash no tiene ningún
                        control sobre el tiempo que pueda llegar a demorar la transferencia de los fondos. Ten en cuenta que Instakash no realizará ninguna transacción sin antes
                        haber recibido el dinero para realizar el cambio. Por lo general, el tiempo total para completar la transacción no debería ser mayor a dos días hábiles.
                      </p>
                      <p>
                        Si por alguna razón tu cambio está tomando más tiempo del que esperabas o te decimos aquí, no te preocupes puedes comunicarte con nuestros asesores que
                        estarán atentos a ayudarte en lo que necesites.
                      </p>
                    </QuestionItem>
                    <QuestionItem header="¿Cómo cancelo mi operación?">
                      <p>
                        Si ya has creado una orden de compra y hay datos del destinatario que no son correctos, por favor ponte en contacto con nosotros lo antes posible para que
                        podamos ayudarte. Puedes escribirnos un email a <a href="mailto:contacto@instakash.net">contacto@instakash</a>. o a nuestros whatsapp con tus datos y te
                        contactaremos a la brevedad para solucionar el problema.
                      </p>
                    </QuestionItem>
                  </>
                )}
              </Accordion>
            </div>
          </article>
        </div>
      </section>
      <div className={styles.QuestionsBg}>
        <Image src="/images/bg/faq.svg" layout="fill" objectFit="contain" />
      </div>
    </>
  );
};

export default Faq;
