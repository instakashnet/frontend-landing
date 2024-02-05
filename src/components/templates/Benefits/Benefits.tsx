import { Card } from "@/components/ui/card/Card";
import { Users } from "lucide-react";

function Benefits() {
  return (
    <section className='min-h-xl w-full max-w-[100rem] mx-auto relative mt-20 lg:mb-[24rem]'>
      <header className='text-center text-white bg-gradient-to-r from-secondary via-primary to-secondary py-40 px-4'>
        <h2 className='font-semibold text-lg'>¿Que nos diferencia?</h2>
        <h3 className='text-4xl lg:text-5xl font-bold mt-6'>
          Somos la casa de cambio <br /> más confiable
        </h3>
        <p className='mt-6 max-w-lg text-lg mx-auto font-medium'>
          Instakash te garantiza que todos tus cambios de dólares se realizarán de manera rápida, segura y confiable.
        </p>
      </header>
      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-6 relative lg:absolute left-0 bottom-[6rem] lg:-bottom-[16rem]'>
        <Card className='flex items-center justify-center flex-col w-[90%] lg:max-w-[18rem] text-center p-8'>
          <div className='p-3 rounded-full flex items-center justify-center border border-primary w-16 h-16 bg-secondary/20 mb-3 mx-auto'>
            <Users size={30} className='text-primary' />
          </div>
          <h4 className='font-semibold text-primary text-2xl'>Con rapidez</h4>
          <p className='mt-3 font-semibold'>
            Por cada persona que se registre con tu código de referido y realice un cambio de dólares, recibirás 2 KASH.
          </p>
        </Card>
        <Card className='flex items-center justify-center flex-col w-[90%] lg:max-w-[18rem] text-center p-8'>
          <div className='p-3 rounded-full flex items-center justify-center border border-primary w-16 h-16 bg-secondary/20 mb-3 mx-auto'>
            <Users size={30} className='text-primary' />
          </div>
          <h4 className='font-semibold text-primary text-2xl'>Con seguridad</h4>
          <p className='mt-3 font-semibold'>
            Por cada persona que se registre con tu código de referido y realice un cambio de dólares, recibirás 2 KASH.
          </p>
        </Card>
        <Card className='flex items-center justify-center flex-col w-[90%] lg:max-w-[18rem] text-center p-8'>
          <div className='p-3 rounded-full flex items-center justify-center border border-primary w-16 h-16 bg-secondary/20 mb-3 mx-auto'>
            <Users size={30} className='text-primary' />
          </div>
          <h4 className='font-semibold text-primary text-2xl'>Con ahorro</h4>
          <p className='mt-3 font-semibold'>
            Por cada persona que se registre con tu código de referido y realice un cambio de dólares, recibirás 2 KASH.
          </p>
        </Card>
        <Card className='flex items-center justify-center flex-col w-[90%] lg:max-w-[18rem] text-center p-8'>
          <div className='p-3 rounded-full flex items-center justify-center border border-primary w-16 h-16 bg-secondary/20 mb-3 mx-auto'>
            <Users size={30} className='text-primary' />
          </div>
          <h4 className='font-semibold text-primary text-2xl'>En todo el país</h4>
          <p className='mt-3 font-semibold'>
            Por cada persona que se registre con tu código de referido y realice un cambio de dólares, recibirás 2 KASH.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default Benefits;
