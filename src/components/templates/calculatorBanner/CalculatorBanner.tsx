import { cn } from "@/lib/utils";
import styles from "./CalculatorBanner.module.css";
import Calculator from "@/components/organisms/calculator/Calculator";
import { CoinsIcon, ArrowRightLeft, UsersIcon } from "lucide-react";
import SuperKash from "@/components/atoms/SuperKash/SuperKash";
import { RatesContract } from "@/types/rates";
import { CountersContract } from "@/types/counters";
import RateCard from "@/components/organisms/RateCard/RateCard";

async function CalculatorBanner({ rates }: { rates: RatesContract; counters?: CountersContract }) {
  return (
    <section className={cn("min-h-[70vh] w-full relative", styles.bannerBg)}>
      <div className='container px-5 lg:px-10 grid lg:grid-cols-2 gap-2 py-16'>
        <div className='flex flex-col justify-center text-center lg:text-left mx-auto lg:mx-0 '>
          <h1 className='font-bold text-secondary font-body'>Casa de cambio online</h1>
          <p className='font-bold font-heading text-primary text-4xl lg:text-5xl lg:leading-[4rem] mt-2'>
            Con la mejor tasa <br />
            comienza el cambio.
          </p>
          <div className='flex items-center justify-between gap-8 flex-wrap xl:flex-nowrap'>
            <div className=' mt-2 w-full lg:flex flex-col gap-3 hidden'>
              <div className='flex items-center gap-2 mt-6'>
                <CoinsIcon size={28} className='text-primary' />
                <p className='text-lg font-medium border-b-2 border-primary pb-1'>
                  <strong>+3mill</strong> de soles cambiados
                </p>
              </div>
              <div className='lg:flex items-center gap-2 mt-6 hidden '>
                <ArrowRightLeft size={28} className='text-primary' />
                <p className='text-lg font-medium border-b-2 border-primary pb-1'>
                  <strong>+200mil</strong> operaciones exitosas
                </p>
              </div>
              <div className='flex items-center gap-2 mt-6'>
                <UsersIcon size={28} className='text-primary' />
                <p className='text-lg font-medium border-b-2 border-primary pb-1'>
                  <strong>+40mil</strong> usuarios registrados
                </p>
              </div>
            </div>
            <RateCard className='hidden lg:block' />
          </div>
        </div>
        <div className='w-full max-w-md mx-auto lg:ml-auto grid place-items-center'>
          <Calculator rates={rates} />
          <RateCard className='lg:hidden' />
        </div>
      </div>
      <SuperKash />
    </section>
  );
}

export default CalculatorBanner;
