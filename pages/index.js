import axios from 'axios';
import Card from '../components/UI/Card';
import Calculator from '../components/calculator';
import Button from '../components/UI/Button';

import styles from '../styles/Home.module.scss';

const Home = ({ rates }) => {
  return (
    <>
      <section className={styles.calculatorSection}>
        <div className='container'>
          <div className='grid md:grid-cols-2 md:mt-12'>
            <header className={styles.sectionTitle}>
              <h1 className='pl-3 md:pl-0'>¡Gana cambiando con Instakash!</h1>
              <h2 className='mb-3 md:mb-0 pl-3 md:pl-0'>Dale a tu dinero el valor que merece</h2>
              <img src='/images/welcome.svg' alt='Gana con instakash' />
            </header>
            <section className={styles.calculatorWrapper}>
              <Card className='flex items-center flex-col md:flex-row w-full justify-between p-6 mt-0 mb-4 md:mb-0 order-2 md:order-1'>
                <h4 className='mb-2 md:mb-0'>Transferencias inmediatas:</h4>
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
          <img src='/images/icons/badge.svg' width={50} height={50} />
          <div className={styles.infoBox}>
            <p>
              Registrados y autorizados por la <br />{' '}
              <span>
                Superintendencia de Banca, <br /> Seguros y AFP
              </span>
            </p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <img src='/images/icons/laptop.svg' width={80} height={80} />
          <div className={styles.infoBox}>
            <h5>22 Mil</h5>
            <p>Operaciones Registradas</p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <img src='/images/icons/soles.svg' width={50} height={50} />
          <div className={styles.infoBox}>
            <h5>100 Millones</h5>
            <p>Soles Transferidos</p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <img src='/images/icons/users.svg' width={50} height={50} />
          <div className={styles.infoBox}>
            <h5>5 Mil</h5>
            <p>Usuarios Activos</p>
          </div>
        </div>
      </Card>
      <section className='container section-wrapper' id='steps'>
        <h2 className='text-center my-3'>¿Cómo funciona?</h2>
        <h3 className='text-center'>Instakash es una Fintech que te permitirá hacer tus cambios desde donde estés, solo debes seguir estos sencillos pasos:</h3>
        <div className='flex items-center justify-center flex-wrap mt-12'>
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
        <div className='container'>
          <h2 className='text-center mb-2'>¡Estamos felices de tenerte con nosotros!</h2>
          <h3 className='text-center'>por eso premiamos tu fidelidad. Con el nuevo sistema de afiliados obtendrás mayores beneficios, comienza a usarlo al toque.</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <img src='/images/affiliates.svg' className='order-2 w-80 ml-3 md:ml-0 md:w-auto md:order-1 mt-4 md:mt-12' />
            <ol className='order-1 md:order-2'>
              <li>
                <span className={styles.affiliatesStep}>01</span>
                <span>Comparte</span> tu código de afiliado con tus amigos.
              </li>
              <li>
                <span className={styles.affiliatesStep}>02</span>
                Al realizar su primera operación tus <span>amigos ganarán</span> una tasa preferencial.
              </li>
              <li className='mt-2 md:mt-0'>
                <Card className={styles.kashCard}>
                  <span className={styles.affiliatesStep}>03</span>
                  <div className='ml-0 md:ml-3'>
                    Recibirás <span>1 KASH</span> por cada amigo que realice su primera operación. <br /> <span>1 KASH = 1 US$</span>
                    <Button type='button' className='block w-full md:w-auto mt-4 text-base px-8'>
                      Ingresar ahora
                    </Button>
                  </div>
                </Card>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className={`section-wrapper ${styles.benefits}`} id='benefits'>
        <div className='container'>
          <div className='grid md:grid-cols-2 gap-4'>
            <img src='/images/benefits.svg' width={400} height={400} className='order-2 md:order-1' />
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

export const getServerSideProps = async () => {
  const res = await axios.get('https://exchange-affiliate.herokuapp.com/api/v1/rates');

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
