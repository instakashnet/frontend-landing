import Step1Img from "@/assets/steps/step-1.svg";
import Step2Img from "@/assets/steps/step-2.svg";
import Step3Img from "@/assets/steps/step-3.svg";
import Step4Img from "@/assets/steps/step-4.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./StepsSection.module.css";

function StepsSection() {
  return (
    <section className='container py-20'>
      <header className='text-center'>
        <h2 className='font-semibold text-secondary text-lg'>¿Cómo funciona?</h2>
        <h3 className='text-4xl lg:text-5xl text-primary font-bold mt-6'>Cambia dólares en simples pasos</h3>
        <p className='mt-6 max-w-lg text-lg mx-auto font-medium'>
          Ingresa a nuestra casa de cambio online, sigue estos 4 pasos y obtén el mejor tipo de cambio.
        </p>
      </header>
      <div className='grid grid-cols-1 lg:grid-cols-4 place-items-center gap-10 mt-20 overflow-hidden'>
        <div className={cn("relative flex flex-col items-center text-center", styles.Step, styles.StepFirst)}>
          <Image src={Step1Img} className='w-20 object-contain' alt='Cotiza tu cambio' />
          <h4 className='font-semibold text-lg text-primary mt-4'>Cotiza tu cambio</h4>
          <p className='font-medium'>Ingresa el monto que vas a enviar y calcula cuánto vas a recibir. Comienza tu operación.</p>
        </div>
        <div className={cn("relative flex flex-col items-center text-center", styles.Step, styles.StepSecond)}>
          <Image src={Step2Img} className='w-20 object-contain' alt='Cotiza tu cambio' />
          <h4 className='font-semibold text-lg text-primary mt-4'>Selecciona tus cuentas</h4>
          <p className='font-medium'>Selecciona el banco desde donde envías y la cuenta donde recibirás tu cambio.</p>
        </div>
        <div className={cn("relative flex flex-col items-center text-center", styles.Step, styles.StepFirst)}>
          <Image src={Step3Img} className='w-24 object-contain' alt='Cotiza tu cambio' />
          <h4 className='font-semibold text-lg text-primary mt-4'>Transfiere a Instakash</h4>
          <p className='font-medium'>
            Transfiere a Instakash desde la app de tu banco e ingresa el número de transferencia en nuestra app.
          </p>
        </div>
        <div className={cn("relative flex flex-col items-center text-center", styles.Step)}>
          <Image src={Step4Img} className='w-20 object-contain' alt='Cotiza tu cambio' />
          <h4 className='font-semibold text-lg text-primary mt-4'>Recibe tu cambio</h4>
          <p className='font-medium'>Recibe tu cambio en la cuenta que seleccionaste en el paso 2. Y sigue cambiando con Instakash.</p>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
