import { Card } from "@/components/ui/card/Card";
import { cn } from "@/lib/utils";
import { ArrowLeftRightIcon, Building2Icon, CircleDollarSignIcon } from "lucide-react";

function CompanyCounters() {
  return (
    <section className={cn("min-h-[50svh] w-full flex flex-col py-20 lg:pt-40")}>
      <div className='container flex-grow grid place-content-center'>
        <div className='grid lg:grid-cols-2 lg:gap-20'>
          <div className='self-center text-center lg:text-left mb-6'>
            <h2 className='lg:text-4xl text-2xl font-[600] mb-4 lg:leading-[3rem]'>
              Somos la principal opción en Perú y nuestras cifras lo reespaldan
            </h2>
            <p className='text-lg'>Con Instakash, estás en manos expertas. Te ofrecemos mejor servicio y la mejor atención. </p>
            <a
              href='https://whatsapp.com/channel/0029VaaTM6472WTwVLuGFm3V'
              target='_blank'
              rel='norefferer'
              className='mt-8 inline-block py-2 px-10 bg-primary text-white font-semibold rounded-md'
            >
              Únete a nuestro canal de empresas
            </a>
          </div>
          <div className='flex flex-col gap-y-8 lg:gap-10'>
            <Card variant='outline' className='flex items-center gap-3'>
              <ArrowLeftRightIcon className='w-10 h-10 text-primary' />
              <div>
                <h3 className='text-2xl font-semibold'>+20 mil</h3>
                <p>Operaciones realizadas a empresas</p>
              </div>
            </Card>
            <Card variant='outline' className='flex items-center gap-3'>
              <CircleDollarSignIcon className='w-10 h-10 text-primary' />

              <div>
                <h3 className='text-2xl font-semibold'>+100 millones</h3>
                <p>Soles transferidos</p>
              </div>
            </Card>
            <Card variant='outline' className='flex items-center gap-3'>
              <Building2Icon className='w-10 h-10 text-primary' />

              <div>
                <h3 className='text-2xl font-semibold'>+5 mil empresas</h3>
                <p>Confían en nosotros</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyCounters;
