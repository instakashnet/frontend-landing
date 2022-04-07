import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Calculator from "../components/calculator";
import BenefitsCarousel from "../components/UI/benefits/carousel.component";
import Card from "../components/UI/Card";
// CLASSES
import styles from "../styles/Home.module.scss";

export async function getStaticProps() {
  let rates = {
    buy: 0,
    sell: 0,
  };

  try {
    const res = await fetch("https://api.instakash.net/exchange-service/api/v1/client/rates");
    const fetchedData = await res.json();

    rates = {
      buy: Number(fetchedData[0].buy),
      sell: Number(fetchedData[0].sell),
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      rates,
    },
    revalidate: 10,
  };
}

const Home = ({ rates }) => {
  return (
    <>
      <section className={styles.CalculatorSection}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
            <div className={styles.TitleWrapper}>
              <h1>
                <em>Casa de cambio online</em>
              </h1>
              <h2>
                Con la mejor tasa, <br /> comienza el cambio.
              </h2>
              <p className="flex">
                <FaCheckCircle size={25} className="mr-2 mt-1" /> Entidad registrada en la <br /> Superintendencia de banca, seguros y AFP.
              </p>
            </div>
            <Card className={styles.CalculatorWrapper}>
              <p>
                <strong>
                  Tipo de cambio <br /> para hoy en Instakash
                </strong>
              </p>
              <Calculator rates={rates} />
            </Card>
          </div>
          <div className={styles.SuperkashWrapper}>
            <Image src="/images/illustrations/superkash.svg" layout="fill" objectFit="contain" />
          </div>
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
                <Image src="/images/banks/interbank.svg" alt="Banco Interbank" width={90} height={35} />
                <Image src="/images/banks/bcp.svg" alt="Banco BCP" width={85} height={35} />
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
                <Image src="/images/banks/scotiabank.svg" alt="Banco Scotiabank" width={100} height={50} />
                <Image src="/images/banks/bbva.svg" alt="Banco BBVA" width={80} height={35} />
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className={styles.UsersSection}>
        <div className="container">
          <div className={styles.UsersWrapper}>
            <div className={styles.UserInfoWrapper}>
              <div className="mr-6">
                <Image src="/images/icons/laptop.svg" width={45} height={45} alt="" />
              </div>
              <div>
                <span className={styles.UserInfo}>+22.600</span>
                <p>cambios realizados</p>
              </div>
            </div>
            <div className={styles.UserInfoWrapper}>
              <div className="mr-6">
                <Image src="/images/icons/soles.svg" width={45} height={45} alt="" />
              </div>
              <div>
                <span className={styles.UserInfo}>+560 millones</span>
                <p>soles transferidos</p>
              </div>
            </div>
            <div className={styles.UserInfoWrapper}>
              <div className="mr-6">
                <Image src="/images/icons/users.svg" width={45} height={45} alt="" />
              </div>
              <div>
                <span className={styles.UserInfo}>+10.000</span>
                <p>usuarios registrados</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-6 md:my-12 lg:my-20">
        <div className="text-center">
          <h2 className={styles.Title}>Beneficios</h2>
          <p className={styles.Subtitle}>Mes a mes tenemos nuevos beneficios para que tengas siempre el mejor tipo de cambio del Perú.</p>
        </div>
        <BenefitsCarousel />
      </section>
      <section className={styles.StepsSection}>
        <div className="container">
          <div className="text-center mt-5">
            <h2 className={styles.Title}>Cambia dólares online</h2>
            <p className={styles.Subtitle}>Sigue estos 4 pasos y obtén el mejor tipo de cambio.</p>
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
      <section className="container">
        <div className={styles.AppWrapper}>
          <div className={styles.AppImage}>
            <Image src="/images/illustrations/app.svg" layout="fill" objectFit="contain" />
          </div>
          <div className={styles.AppInfoWrapper}>
            <h2>Descarga nuestra App</h2>
            <p>Con la mejor tasa comienza el cambio, fácil y seguro del Perú. Ya está disponible para android y IOS.</p>
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
              <a href="https://apps.apple.com/pe/app/instakash/id1601561803" className={styles.AppDownloadIcon}>
                <Image src="/images/illustrations/appstore.png" layout="fill" objectFit="contain" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=net.instakash.app" className={styles.AppDownloadIcon}>
                <Image src="/images/illustrations/playstore.png" layout="fill" objectFit="contain" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
