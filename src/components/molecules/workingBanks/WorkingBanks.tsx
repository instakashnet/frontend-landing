import { Card } from "@/components/ui/card/Card";
import { ClockIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BCPImg from "@/assets/banks/bcp.svg";
import InterbankImg from "@/assets/banks/interbank.svg";
import BBVAImg from "@/assets/banks/bbva.svg";
import ScotiabankImg from "@/assets/banks/scotiabank.svg";
import PichinchaImg from "@/assets/banks/pichincha.svg";

function WorkingBanks() {
  return (
    <div className='container px-4 lg:px-10 relative bottom-8 lg:bottom-10'>
      <Card className='max-w-xl lg:max-w-full mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-10 justify-between px-0 lg:px-12 py-2 lg:py-6'>
          <div className='w-full'>
            <div className='flex items-center gap-3 text-primary'>
              <ZapIcon size={28} />
              <h3 className='font-semibold lg:text-xl'>Transferencias inmediatas</h3>
            </div>
            <div className='flex flex-wrap items-center gap-3 my-4'>
              <Image src={BCPImg} className='w-20 object-contain' alt='Banco BCP' />
              <Image src={InterbankImg} className='w-20 object-contain' alt='Banco Interbank' />
            </div>
            <p className='text-sm'>*Interbank solo lima</p>
          </div>
          <div className='w-full lg:w-[1px] h-[1px] lg:h-20 bg-primary' />
          <div className='w-full'>
            <div className='flex items-center gap-3 text-primary'>
              <ClockIcon size={28} />
              <h3 className='font-semibold lg:text-xl'>Transferencias interbancarias (24hs)</h3>
            </div>
            <div className='flex flex-wrap items-center gap-3 my-6'>
              <Image src={BBVAImg} className='w-20 object-contain' alt='Banco BBVA' />
              <Image src={ScotiabankImg} className='w-20 object-contain' alt='Banco Scotiabank' />
              <Image src={PichinchaImg} className='w-20 object-contain' alt='Banco Pichincha' />
            </div>
            <p className='text-sm'>
              Algúnas comisiones aplican.{" "}
              <Link href='/' className='font-semibold text-primary underline'>
                conoce más
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default WorkingBanks;
