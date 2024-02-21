import { cn } from "@/lib/utils";
import styles from "./CalculatorBanner.module.css";
import Calculator from "@/components/organisms/calculator/Calculator";
import { BadgeCheck, CoinsIcon, ArrowRightLeft, UsersIcon } from "lucide-react";
import { formatNumberToString } from "@/utils/formatters";
import SuperKash from "@/components/atoms/SuperKash/SuperKash";
import { RatesContract } from "@/types/rates";
import { CountersContract } from "@/types/counters";

async function CalculatorBanner({ rates, counters }: { rates: RatesContract; counters: CountersContract }) {
  return (
    <section className={cn("min-h-[70vh] w-full relative", styles.bannerBg)}>
      <div className='container px-5 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-20 py-16 '>
        <div className='flex flex-col justify-center text-center lg:text-left mx-auto lg:mx-0'>
          <h1 className='font-bold text-secondary font-body'>Casa de cambio online</h1>
          <p className='font-bold font-heading text-primary text-3xl lg:text-5xl xl:text-6xl lg:leading-[4.5rem] xl:leading-[4.75rem] mt-2'>
            Con la mejor tasa, <br />
            comienza el cambio.
          </p>
          <div className='grid mt-2 lg:grid-cols-2 w-full lg:gap-y-4'>
            <div className='flex items-center gap-2 mt-6'>
              <BadgeCheck size={28} className='text-primary' />
              <p className='text-lg font-medium border-b-2 border-primary pb-1'>
                Registrados en la <strong>SBS</strong>
              </p>
            </div>
            <div className='flex items-center gap-2 mt-6'>
              <CoinsIcon size={28} className='text-primary' />
              <p className='text-lg font-medium border-b-2 border-primary pb-1'>
                <strong>+{counters ? formatNumberToString(Number(counters?.totalProcessed), "mill") : "2mill"}</strong> de soles cambiados
              </p>
            </div>
            <div className='lg:flex items-center gap-2 mt-6 hidden '>
              <ArrowRightLeft size={28} className='text-primary' />
              <p className='text-lg font-medium border-b-2 border-primary pb-1'>
                <strong>+{counters ? formatNumberToString(Number(counters?.qtySuccessfullOrders), "mil") : "200mil"}</strong> operaciones
                exitosas
              </p>
            </div>
            <div className='lg:flex items-center gap-2 mt-6 hidden'>
              <UsersIcon size={28} className='text-primary' />
              <p className='text-lg font-medium border-b-2 border-primary pb-1'>
                <strong>+{counters ? formatNumberToString(Number(counters?.qtyUsers), "mil") : "40mil"}</strong> usuarios registrados
              </p>
            </div>
          </div>
        </div>
        <div className='w-full grid place-items-center'>
          <Calculator rates={rates} />
        </div>
      </div>
      <SuperKash />
    </section>
  );
}

export default CalculatorBanner;
