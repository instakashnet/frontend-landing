import { cn } from "@/lib/utils";
import styles from "./CalculatorBanner.module.css";
import Image from "next/image";
import SuperKashImg from "@/assets/illustrations/super-kash.svg";
import Calculator from "@/components/organisms/calculator/Calculator";
import { BadgeCheck, CoinsIcon, ArrowRightLeft, UsersIcon } from "lucide-react";
import requests from "@/lib/axios";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { formatNumberToString } from "@/utils/formatters";

async function getRates() {
  try {
    const rates = await requests.get("/exchange-service/api/v1/client/rates");
    return {
      buy: +rates[0].buy as number,
      sell: +rates[0].sell as number
    };
  } catch (error) {
    const message = getErrorMessage(error);
    console.log(message);
  }
}

async function getCounters() {
  try {
    const counters = await requests.get("/exchange-service/api/v1/client/analytics/general");
    return counters;
  } catch (error) {
    const message = getErrorMessage(error);
    console.log(message);
  }
}

async function CalculatorBanner() {
  const rates: { buy: number; sell: number } = (await getRates()) || { buy: 0, sell: 0 };
  const counters = await getCounters();

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
            <div className='flex items-center gap-2 mt-6'>
              <ArrowRightLeft size={28} className='text-primary' />
              <p className='text-lg font-medium border-b-2 border-primary pb-1'>
                <strong>+{counters ? formatNumberToString(Number(counters?.qtySuccessfullOrders), "mil") : "200mil"}</strong> operaciones
                exitosas
              </p>
            </div>
            <div className='flex items-center gap-2 mt-6'>
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
      <Image src={SuperKashImg} alt='Instakash con mejor tipo de cambio' className='w-80 lg:w-[26rem] relative bottom-0 left-10' />
    </section>
  );
}

export default CalculatorBanner;
