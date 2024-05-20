import { Card } from "@/components/ui/card/Card";
import { BenefitItemProps } from "./BenefitItem.interface";
import { PortableText } from "@portabletext/react";

function BenefitItem({ title, coverUrl, description, hasDate, fromDate, toDate }: BenefitItemProps) {
  return (
    <Card className='rounded-2xl shadow-md px-0 pt-0 flex flex-col items-center w-full max-w-[25rem]'>
      <div
        className='w-full bg-cover bg-center bg-no-repeat py-3 h-48 flex flex-col items-center justify-center gap-6 rounded-b-none  rounded-2xl'
        style={{ backgroundImage: `url(${coverUrl})` }}
      />
      <div className='p-8 pb-0 max-h-[14rem] overflow-y-auto no-scrollbar'>
        <h4 className='text-2xl font-bold text-primary'>{title}</h4>
        {hasDate && (
          <p className='font-semibold  text-gray-600'>
            {fromDate} - {toDate}
          </p>
        )}
        <div className='text-sm text-gray-500 mt-4'>
          <PortableText value={description} />
        </div>
      </div>
      <div className='flex items-center justify-center mt-8 pb-4'>
        <a
          className='text-white bg-primary p-3 px-6 font-semibold rounded-sm cursor-pointer'
          href='https://app.instakash.net'
          target='_blank'
          rel='noreferrer'
        >
          Acceder ahora
        </a>
      </div>
    </Card>
  );
}

export default BenefitItem;
