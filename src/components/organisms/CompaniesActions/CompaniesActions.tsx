import CompanyPerson from "@/assets/illustrations/company-person.webp";
import { Card } from "@/components/ui/card/Card";
import { cn } from "@/lib/utils";
import { CoinsIcon, ContactIcon, PlaneIcon, ReceiptIcon } from "lucide-react";
import Image from "next/image";

function CompaniesActions() {
  return (
    <section className={cn("min-h-[60svh] w-full flex flex-col bg-transparent py-10")}>
      <div className='container flex-grow'>
        <div className='grid lg:grid-cols-2'>
          <div className='self-center'>
            <h2 className='lg:text-4xl text-2xl text-center lg:text-left font-[600] mb-4 lg:leading-[3rem]'>
              Cambia tus dólares con múltiples propósitos
            </h2>
            <p className='text-lg mb-6  text-center lg:text-left'>La empresas cambian sus dólares para...</p>
            <div className='grid md:grid-cols-2 gap-6'>
              <Card variant='outline' className='p-3 flex items-center gap-2 text-primary max-w-md'>
                <CoinsIcon className='w-7 h-7' />
                <p className='font-semibold lg:text-lg'>Pagar a proveedores</p>
              </Card>
              <Card variant='outline' className='p-3 flex items-center gap-2 text-primary max-w-md'>
                <ReceiptIcon className='w-7 h-7' />
                <p className='font-semibold lg:text-lg'>Pagar impuestos</p>
              </Card>
              <Card variant='outline' className='p-3 flex items-center gap-2 text-primary max-w-md'>
                <ContactIcon className='w-7 h-7' />
                <p className='font-semibold lg:text-lg'>Pagar bienes y servicios</p>
              </Card>
              <Card variant='outline' className='p-3 flex items-center gap-2 text-primary max-w-md'>
                <PlaneIcon className='w-7 h-7' />
                <p className='font-semibold lg:text-lg'>Importar y exportar</p>
              </Card>
            </div>
            <p className='text-lg mt-6 text-center lg:text-left font-[500]'>
              ¿Que esperas a convertirte en una de las empresas que aprovechan nuestros servicios?
            </p>
          </div>
          <div>
            <Image src={CompanyPerson} alt='Cambia tus dólares con múltiples propósitos' width={700} height={700} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompaniesActions;
