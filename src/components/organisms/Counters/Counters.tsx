import CounterItem from "@/components/atoms/CounterItem/CounterItem";
import requests from "@/lib/axios";
import { formatNumberToString } from "@/utils/formatters";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { ArrowRightLeft, CoinsIcon, UsersIcon } from "lucide-react";

async function getCounters() {
  try {
    const counters = await requests.get("/exchange-service/api/v1/client/analytics/general");
    return counters;
  } catch (error) {
    const message = getErrorMessage(error);
    console.log(message);
  }
}

async function Counters() {
  const counters = await getCounters();

  return (
    <section>
      <div className='container py-20 pb-0 flex flex-col lg:flex-row items-center justify-center gap-20'>
        <CounterItem
          Icon={<CoinsIcon size={50} className='text-white' />}
          description={`Más de ${
            counters ? formatNumberToString(Number(counters?.totalProcessed), "mill") : "2mill"
          } de soles cambiados con usuarios`}
        />
        <CounterItem
          Icon={<ArrowRightLeft size={50} className='text-white' />}
          description={`Más de ${
            counters ? formatNumberToString(Number(counters?.qtySuccessfullOrders), "mil") : "200mil"
          } operaciones realizadas`}
        />
        <CounterItem
          Icon={<UsersIcon size={50} className='text-white' />}
          description={`Más de ${
            counters ? formatNumberToString(Number(counters?.qtyUsers), "mil") : "40mil"
          } usuarios y 5mil empresas confían en nosotros`}
        />
      </div>
    </section>
  );
}

export default Counters;
