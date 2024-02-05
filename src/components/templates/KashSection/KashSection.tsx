import Image from "next/image";
import KashImage from "@/assets/illustrations/kash-image.webp";
import { Banknote, PiggyBank, Repeat2, Users } from "lucide-react";
import { Card } from "@/components/ui/card/Card";

function KashSection() {
  return (
    <section className='container py-20'>
      <header className='text-center'>
        <h2 className='font-semibold text-secondary text-lg'>Recomienda a tus amigos</h2>
        <h3 className='text-4xl lg:text-5xl text-primary font-bold mt-6'>Obtén tus KASH por referir</h3>
        <p className='mt-6 max-w-lg text-lg mx-auto font-medium'>
          Refiere a tus conocidos y amigos y obtén KASH para usarlos en nuestra plataforma dígital.
        </p>
      </header>
      <div className='flex flex-col lg:flex-row items-center gap-10 mt-8'>
        <Image src={KashImage} alt='Gana KASH con Instakash para tus cambios online' className='w-full max-w-xl h-full object-contain' />
        <div className='grid lg:grid-cols-2 grid-flow-row gap-4 flex-1'>
          <Card className='flex flex-col items-center justify-center text-center' variant='outline'>
            <div className='p-3 rounded-full flex items-center justify-center border border-primary w-16 h-16 bg-secondary/20 mb-3'>
              <Repeat2 size={30} className='text-primary' />
            </div>
            <h4 className='font-semibold text-primary text-2xl'>Comparte tu código</h4>
            <p className='mt-3 font-semibold'>
              Descubre como ganar con <strong>Instakash</strong>. Al registrarte obtendrás un código de referido. Comparte este código con
              tus amigos, familiares y conocidos.
            </p>
          </Card>
          <Card className='flex flex-col items-center justify-center text-center' variant='outline'>
            <div className='p-3 rounded-full flex items-center justify-center border border-primary w-16 h-16 bg-secondary/20 mb-3 mx-auto'>
              <Users size={30} className='text-primary' />
            </div>
            <h4 className='font-semibold text-primary text-2xl'>Refiere y gana</h4>
            <p className='mt-3 font-semibold'>
              Por cada persona que se registre con tu código de referido y realice un cambio de dólares, recibirás 2 KASH.{" "}
              <b>No hay límites</b>: cuantos más amigos refieras, más podrás ganar.
            </p>
          </Card>
          <Card className='flex flex-col items-center justify-center text-center' variant='outline'>
            <div className='p-3 rounded-full flex items-center justify-center border border-primary w-16 h-16 bg-secondary/20 mb-3 mx-auto'>
              <PiggyBank size={30} className='text-primary' />
            </div>
            <h4 className='font-semibold text-primary text-2xl'>Ahorra y retira</h4>
            <p className='mt-3 font-semibold'>
              Tus KASH tambien sirven para ahorrar. <b>Guarda tus KASH</b> ganados y observa cómo crece tu saldo. Y cuando estés listo,
              retira tus fondos de manera segura y conveniente.
            </p>
          </Card>
          <Card className='flex flex-col items-center justify-center text-center' variant='outline'>
            <div className='p-3 rounded-full flex items-center justify-center border border-primary w-16 h-16 bg-secondary/20 mb-3 mx-auto'>
              <Banknote size={30} className='text-primary' />
            </div>
            <h4 className='font-semibold text-primary text-2xl'>Próximos servicios</h4>
            <p className='mt-3 font-semibold'>
              KASH no es será un token digital, tambien será un servicio versátil proximamente.{" "}
              <b>KASH te abrirá un mundo de posibilidades</b> desde de Instakash.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default KashSection;
