import { cn } from "@/lib/utils";
import styles from "./CompanySecurity.module.css";
import Image from "next/image";
import PhoneClouds from "@/assets/illustrations/smarthphone-clouds.webp";

function CompanySecurity() {
  return (
    <section className={cn("min-h-[60svh] w-full flex flex-col text-white py-10 lg:py-0", styles.SectionBg)}>
      <div className='container flex-grow'>
        <div className='grid lg:grid-cols-2 place-items-center lg:gap-20'>
          <Image
            src={PhoneClouds}
            alt='Cambia tus dólares rápido y seguro con Instakash'
            width={500}
            height={700}
            className='order-2 lg:order-1'
          />
          <div className='self-center text-center lg:text-left order-1 lg:order-2'>
            <h2 className='lg:text-4xl text-2xl font-[600] mb-4 lg:leading-[3rem]'>Realiza tus cambios de manera segura y veloz.</h2>
            <p className='text-lg'>Disfruta del mejor tipo de cambio en comparación del Perú. Tu tranquilidad es nuestra prioridad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanySecurity;
