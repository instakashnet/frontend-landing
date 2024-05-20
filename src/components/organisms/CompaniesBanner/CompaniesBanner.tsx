import CompanyForm from "@/components/molecules/CompanyForm/CompanyForm";
import { cn } from "@/lib/utils";
import styles from "./CompaniesBanner.module.css";

function CompaniesBanner() {
  return (
    <section className={cn("min-h-[80svh] flex flex-col w-full", styles.BannerBg)}>
      <div className='container flex-grow grid place-content-center px-4 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-10 py-10'>
          <div className='text-white lg:mt-20 mt-6'>
            <h1 className='lg:text-4xl text-2xl font-[600] mb-4 lg:leading-[50px]'>Tu casa de cambio online. Comienza el cambio.</h1>
            <p className='xl:text-xl'>
              Con el tipo de cambio más favorable de Lima, Perú. Con Instakash experimenta la excelencia en el cambio de divisas.
            </p>
            {/* <Image src={RocketCoinsImg} alt='Cambia tu dinero con Instakash' width={700} height={500} className='absolute left-[0] z-0' /> */}
          </div>
          <div className='max-w-xl lg:max-w-lg place-self-end'>
            <CompanyForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompaniesBanner;
