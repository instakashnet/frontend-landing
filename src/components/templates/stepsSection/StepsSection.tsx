import { stepsContent } from "@/data/steps";
import ExchangeStep from "@/components/atoms/ExchangeStep/ExchangeStep";

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
        {stepsContent.map((step, index) => (
          <ExchangeStep index={index} key={step.title} {...step} />
        ))}
      </div>
    </section>
  );
}

export default StepsSection;
