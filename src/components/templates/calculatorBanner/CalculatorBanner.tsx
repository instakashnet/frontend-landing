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
      <div className='container px-5 py-16 lg:px-10 lg:grid lg:grid-cols-8 lg:gap-2'>
        <div className='flex flex-col justify-center text-center lg:text-left lg:col-span-3'>
          <h1 className='font-bold text-secondary font-body'>Casa de cambio online</h1>
          <p className='font-bold font-heading text-primary text-4xl xl:text-5xl mt-2 break-none'>
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
            {/* <RateCard className='hidden lg:block' /> */}
          </div>
        </div>
        <div className='mt-4 lg:mt-0 flex flex-col items-center justify-end gap-4 lg:flex-row lg:items-end lg:col-span-5'>
          <RateCard className='order-2 lg:order-1' />
          <Calculator rates={rates} />
        </div>
      </div>
      <SuperKash />
    </section>
  );
}

export default CalculatorBanner;
