import axios from 'axios';
import Head from 'next/head';
import Card from '../components/UI/Card';
import Calculator from '../components/calculator';

import styles from '../styles/Home.module.scss';

const Home = ({ rates }) => {
  return (
    <>
      <Head>
        <title>Instakash | La casa de cambio del perú con mejores tasas</title>
        <meta
          name='description'
          content='gana con Instakash y dale a tu dinero el valor que merece. Somos la casa de cambio con las mejores tasas del Perú. Transferencias inmediatas.'
        />
      </Head>
      <section className={styles.calculatorSection}>
        <div className='container'>
          <div className='grid md:grid-cols-2 md:pt-12 md:pb-16'>
            <header className={styles.sectionTitle}>
              <h1 className='pl-3 md:pl-0'>¡Gana cambiando con Instakash!</h1>
              <h2 className='mb-3 md:mb-0 pl-3 md:pl-0'>Dale a tu dinero el valor que merece</h2>
              <img src='/images/welcome.svg' alt='Gana con instakash' />
            </header>
            <section className={styles.calculatorWrapper}>
              <Card className='flex items-center flex-col md:flex-row w-full justify-between p-6 mt-0 mb-4 md:mb-0 order-2 md:order-1'>
                <div className='flex items-center md:hidden mb-7'>
                  <img src='/images/icons/badge.svg' width={55} height={55} />
                  <p>
                    Estamos registrados y autorizados <br /> por la <b>SBS</b>.
                  </p>
                </div>
                <h4 className='mb-2 md:mb-0'>Transferencias inmediatas (5-25min):</h4>
                <div className={styles.banks}>
                  <img src='/images/banks/interbank.svg' alt='banco' />
                  <img src='/images/banks/bcp.svg' alt='banco' />
                </div>
              </Card>
              <Card className='py-4 md:py-8 order-1 md:mt-8 w-full md:order-2'>
                <div className={styles.rates}>
                  <div className='px-3'>
                    <h5>Compramos</h5>
                    <p>
                      <span>S/.</span> {rates.buy}
                    </p>
                  </div>
                  <div className='px-3'>
                    <h5>Vendemos</h5>
                    <p>
                      <span>S/.</span> {rates.sell}
                    </p>
                  </div>
                </div>
                <Calculator rates={rates} />
              </Card>
              <img src='/images/welcome.svg' alt='Gana con instakash' className='md:hidden mr-3 w-80 order-3' />
            </section>
          </div>
        </div>
      </section>
      <Card className={styles.infoCard}>
        <div className='flex items-center justify-start'>
          <img src='/images/icons/badge.svg' width={55} height={55} />
          <div className={styles.infoBox}>
            <p>
              Registrados y autorizados por la <br />{' '}
            </p>
            <h5>
              Superintendencia de Banca, <br /> Seguros y AFP
            </h5>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <img src='/images/icons/laptop.svg' width={85} height={85} />
          <div className={styles.infoBox}>
            <h5>22 Mil</h5>
            <p>Operaciones Registradas</p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <img src='/images/icons/soles.svg' width={55} height={55} />
          <div className={styles.infoBox}>
            <h5>100 Millones</h5>
            <p>Soles Transferidos</p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <img src='/images/icons/users.svg' width={55} height={55} />
          <div className={styles.infoBox}>
            <h5>5 Mil</h5>
            <p>Usuarios Activos</p>
          </div>
        </div>
      </Card>
      <section className='container section-wrapper' id='steps'>
        <h2 className='text-center my-3'>¿Cómo funciona?</h2>
        <h3 className='text-center'>Instakash es una Fintech que te permitirá hacer tus cambios desde donde estés, solo debes seguir estos sencillos pasos:</h3>
        <div className='flex items-center justify-center flex-col md:flex-row mt-12'>
          <div className={styles.step}>
            <img src='/images/steps/step-1.svg' width={200} height={200} />
            <h4>Paso 1</h4>
            <p>
              <b>Regístrate y cotiza tu cambio.</b> <br /> Coloca el monto a enviar o recibir y obtén la mejor tasa.
            </p>
          </div>
          <div className={styles.step}>
            <img src='/images/steps/step-2.svg' width={200} height={200} />
            <h4>Paso 2</h4>
            <p>
              <b>Transfiere los fondos a Instakash.</b> <br /> Realiza la transferencia desde tu banco a la cuenta indicada.
            </p>
          </div>
          <div className={styles.step}>
            <img src='/images/steps/step-3.svg' width={200} height={200} />
            <h4>Paso 3</h4>
            <p>
              <b>Recibe tu cambio.</b> <br /> Verifica el abono en tu cuenta y sigue ahorrando con Instakash.
            </p>
          </div>
        </div>
      </section>
      <section className={`section-wrapper ${styles.affiliates}`} id='affiliates'>
        <div className={styles.affiliatesBg}>
          <div className='container md:mt-12'>
            <h2 className='text-center mb-2'>¡Recomienda y gana!</h2>
            <h3 className='text-center'>
              Con el nuevo sistema de afiliados obtendrás siempre los mejores y mayores beneficios. <br /> Comienza a usarlo al toque.
            </h3>
            <div className='flex items-center justify-center flex-col md:flex-row'>
              <img src='/images/affiliates-1.svg' alt='Gana con tus referidos' />
              <ol>
                <li>
                  <span className={styles.affiliatesStep}>01</span>
                  <p>
                    <span>Comparte</span> tu código de afiliado con tus amigos.
                  </p>
                </li>
                <li>
                  <span className={styles.affiliatesStep}>02</span>
                  <p>
                    Al realizar su primera operación tus <span>amigos ganarán</span> una tasa preferencial.
                  </p>
                </li>
                <li className='mt-2 md:mt-0 relative'>
                  <img src='/images/dollar-bill.svg' alt='dollar bill' className='w-20' />
                  <Card className={styles.kashCard}>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                      <span className={styles.affiliatesStep}>03</span>
                      <p>
                        Recibirás <span>1 KASH</span> por cada amigo que realice su primera operación. <br /> <span>1 KASH = $1 USD</span>
                      </p>
                    </div>
                    <a href='https://app.instakash.net' className='block w-full md:w-60 mt-4 mx-auto px-8'>
                      Ingresar ahora
                    </a>
                  </Card>
                </li>
              </ol>
              <img src='/images/affiliates-2.svg' alt='Gana con tus referidos' />
            </div>
          </div>
        </div>
      </section>
      <section className={`section-wrapper ${styles.benefits}`} id='benefits'>
        <div className='container'>
          <div className='grid md:grid-cols-2 gap-4'>
            <img src='/images/benefits.svg' className='order-2 md:order-1 text-base md:text-auto place-self-center' />
            <div className='flex flex-col justify-center pl-6 order-1 md:order-2'>
              <h2 className='mb-2'>Conoce nuestros benefícios</h2>
              <ul>
                <li>
                  Obtendrás <span>las mejores tasas</span> del Perú.
                </li>
                <li>
                  <span>Ahorrarás</span> dinero en cada cambio.
                </li>
                <li>
                  Recibirás tu cambio en <span>pocos minutos</span>.
                </li>
                <li>
                  Ganarás <span>1 KASH</span> por cada recomendación.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const { EXCHANGE_URL } = process.env;

export const getServerSideProps = async () => {
  const res = await axios.get(`${EXCHANGE_URL}/rates`);

  try {
    return {
      props: {
        rates: res.data[0],
      },
    };
  } catch (error) {
    return {
      props: {
        rates: { buy: 0, sell: 0 },
      },
    };
  }
};

export default Home;
