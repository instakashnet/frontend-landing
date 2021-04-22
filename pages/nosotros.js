import styles from '../styles/Nosotros.module.scss';

const Nosotros = () => {
  return (
    <>
      <section className={styles.About}>
        <div className='container section-wrapper text-center mt-16 mb-24'>
          <h1>¿Qué es Instakash?</h1>
          <h3 className='mb-12'>La Fintech del futuro</h3>
          <hr className='mx-auto' />
          <p className='my-6 px-4 md:w-2/3 mx-auto'>
            Conocida bajo el término de Fintech, tenemos el objetivo de revolucionar la forma de administrar el dinero, brindando soluciones a las personas que buscan llevar una
            mejor relación con sus finanzas, ofreciendo accesibilidad e innovación en todos nuestros productos y servicios.
            <br />
            <br />
            De esta manera nos hemos convertido en la Fintech favorita y revolucionaria del Perú, ofreciendo las mejores tasas de cambio junto a un servicio seguro y de calidad,
            con herramientas de innovación amigables respondiendo eficientemente a las necesidades de nuestros clientes.
          </p>
          <h3>¡Síguenos!</h3>
          <div className='flex items-center justify-center mt-6'>
            <a href='!#' target='_blank' rel='noopener noreferrer'>
              <img src='/images/social/instagram-green.svg' className='mx-3' />
            </a>
            <a href='!#' target='_blank' rel='noopener noreferrer'>
              <img src='/images/social/facebook-green.svg' className='mx-3' />
            </a>
            <a href='!#' target='_blank' rel='noopener noreferrer'>
              <img src='/images/social/linkedin-green.svg' className='mx-3' />
            </a>
          </div>
          {/* <div className='mt-24 mb-12 flex items-center justify-between'>
            <article className='text-left px-20'>
              <h3 className='mb-6'>Misión</h3>
              <hr />
              <p className='mt-4'>
                Somos la startup financiera que revoluciona la forma de administrar el dinero a través de una plataforma 100% digital, sencilla, amigable y de confianza. Integrando
                a su vez la importancia de impulsar la educación financiera.
              </p>
            </article>
            <article className='text-left px-20'>
              <h3 className='mb-6'>Visión</h3>
              <hr />
              <p className='mt-4'>
                Ser reconocidos en toda Latinoamérica como la primera startup financiera 100% digital que aplica la última tecnología existente para ofrecer productos y servicios
                financieros innovadores, siendo además referentes de llevar un sistema de educación financiera.
              </p>
            </article>
          </div> */}
        </div>
      </section>
      <section className={styles.WhyUs}>
        <div className='container section-wrapper pt-16 md:pb-56'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <article>
              <h2 className='mt-10'>¿Por qué elegírnos?</h2>
              <h3>Estas son las razones que consideramos más importantes</h3>
              <ul className='mt-10'>
                <li>Porque entendemos la importancia que tiene cada usuario por valorar su dinero.</li>
                <li>Porque estamos conscientes de que mereces lo mejor, por eso nuestra plataforma es 100% amigable, sencilla y de confianza.</li>
                <li>Porque nos importa que mejores tus finanzas, por eso desarrollamos diversos servicios accesibles y de calidad.</li>
                <li>Porque queremos que te sientas apoyado financieramente, por eso brindamos soluciones financieras innovadoras y revolucionaras.</li>
              </ul>
            </article>
            <img className='self-center place-self-center' src='/images/why-us.svg' alt='Kash' />
          </div>
        </div>
      </section>
      <section className='container section-wrapper text-center pt-12'>
        <h2>¡Empieza a usar nuestros servicios!</h2>
        <h3 className='mb-12'>Sómos la Fintech del futuro</h3>
        <hr className='mx-auto' />
        <p className='my-6 px-4 md:w-2/3 mx-auto'>
          Tenemos muchas cosas que ofrecerte. Con seguridad y transparencia te brindamos beneficios diseñados para tu tranquilidad financiera. ¡Regístrate en nuestra plataforma y
          comienza a realizar tus operaciones, si ya estas registrado genial!, podrás compartir tu código de afiliado con amigos y empezar a ganar.{' '}
        </p>
        <button className={styles.StartButton}>Ingresar</button>
      </section>
    </>
  );
};

export default Nosotros;
