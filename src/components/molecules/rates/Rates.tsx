import { RatesProps } from "./Rates.interface";

function Rates({ rates, coupon }: RatesProps) {
  return (
    <>
      <div className='flex items-center justify-center text-primary gap-10 py-1'>
        <div>
          <p className='font-medium'>Compra</p>
          {coupon && <small className='line-through'>S/ {rates.buy.toFixed(4)}</small>}
          <p className='font-semibold'>S/ {coupon ? (rates.buy + coupon.discount).toFixed(4) : rates.buy.toFixed(4)}</p>
        </div>
        <div className='h-10 w-[1px] bg-primary' />
        <div>
          <p className='font-medium'>Venta</p>
          {coupon && <small className='line-through'>S/ {rates.sell.toFixed(4)}</small>}
          <p className='font-semibold'>S/ {coupon ? (rates.sell - coupon.discount).toFixed(4) : rates.sell.toFixed(4)}</p>
        </div>
      </div>
    </>
  );
}

export default Rates;
