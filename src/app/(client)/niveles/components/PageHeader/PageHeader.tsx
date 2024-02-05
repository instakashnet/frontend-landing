import Image from "next/image";
import LevelsBg from "@/assets/illustrations/levels-bg.webp";

function PageHeader() {
  return (
    <header className='container text-center py-20'>
      <h1 className='font-semibold text-secondary text-lg'>Sistema de niveles</h1>
      <h2 className='text-4xl lg:text-5xl text-primary font-bold mt-6 max-w-2xl mx-auto'>Mientras más cambias, más beneficios recibes.</h2>
      <p className='mt-6  text-xl font-medium max-w-2xl mx-auto'>
        En Instakash queremos seguir premiándote por ello venimos con mejores tasas y mayores beneficios
      </p>
      <a
        className='text-white inline-block mt-8 bg-primary p-3 px-6 font-semibold rounded-sm cursor-pointer'
        href='https://app.instakash.net'
        target='_blank'
        rel='noreferrer'
      >
        Empieza a cambiar ahora
      </a>
      <Image src={LevelsBg} alt='Niveles de instakash' className='w-full mt-12' />
    </header>
  );
}

export default PageHeader;
