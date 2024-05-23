function ContactUs() {
  return (
    <section className='w-full py-20 min-h-[40svh] flex flex-col'>
      <div className='container text-center flex-grow place-content-center'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='lg:text-4xl text-2xl font-bold text-gray-800'>Descubre los beneficios que Instakash ofrece para tu empresa</h2>
          <p className='mt-2 text-pretty lg:text-lg font-[500]'>
            Nuestra atención especializada, asesoría personalizada, mejor tipo de cambio y la seguridad garantizada en todas tus operaciones
          </p>
          <div className='flex flex-col lg:flex-row items-center gap-20'>
            <a
              href='https://wa.link/0014mj'
              target='_blank'
              rel='norefferer'
              className='mt-8 block py-2 px-10 bg-primary text-white font-semibold max-w-sm mx-auto rounded-md'
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
