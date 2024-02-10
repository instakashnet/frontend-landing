"use client";
import CurrencyInput from "@/components/ui/inputs/currencyInput/CurrencyInput";
import PeruFlag from "@/assets/flags/peru.svg";
import UsaFlag from "@/assets/flags/usa.svg";
import Image from "next/image";
import SwipeButton from "@/components/ui/swipeButton/SwipeButton";
import { Input } from "@/components/ui/inputs/input/Input";
import { Button } from "@/components/ui/button/Button";
import { Wallet, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { EXCHANGE_TYPES, INPUT_TYPES } from "@/enums/exchangeTypes";
import { CURRENCIES, CURRENCY_SYMBOLS } from "@/enums/currencies";
import { roundNumber } from "@/helpers/numbers";
import { CurrenciesProps, ExchangeFormProps } from "./ExchangeForm.interfaces";

function ExchangeForm({ rates, simulateCoupon, clearCoupon, loading, appliedCoupon }: ExchangeFormProps) {
  const [type, setType] = useState<EXCHANGE_TYPES>(EXCHANGE_TYPES.BUY);
  const [currencyTypes, setCurrencyTypes] = useState<CurrenciesProps>({
    send: {
      ISO: CURRENCIES.USD,
      symbol: CURRENCY_SYMBOLS.USD
    },
    receive: {
      ISO: CURRENCIES.PEN,
      symbol: CURRENCY_SYMBOLS.PEN
    }
  });
  const [sendAmount, setSendAmount] = useState<number>(1000);
  const [receiveAmount, setReceiveAmount] = useState<number>(sendAmount * rates.buy);
  const [coupon, setCoupon] = useState<string>("");
  const averageSavings = receiveAmount * 0.005;

  useEffect(() => {
    let currencyType;

    if (type === EXCHANGE_TYPES.BUY) {
      currencyType = {
        send: {
          ISO: CURRENCIES.USD,
          symbol: CURRENCY_SYMBOLS.USD
        },
        receive: {
          ISO: CURRENCIES.PEN,
          symbol: CURRENCY_SYMBOLS.PEN
        }
      };
    } else {
      currencyType = {
        send: {
          ISO: CURRENCIES.PEN,
          symbol: CURRENCY_SYMBOLS.PEN
        },
        receive: {
          ISO: CURRENCIES.USD,
          symbol: CURRENCY_SYMBOLS.USD
        }
      };
    }

    currencyType && setCurrencyTypes(currencyType);
  }, [type]);

  useEffect(() => {
    let newReceiveAmount = roundNumber(type === EXCHANGE_TYPES.BUY ? sendAmount * rates.buy : sendAmount / rates.sell);
    setReceiveAmount(newReceiveAmount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);

  const handleSwipeType = () => {
    let newType = type === EXCHANGE_TYPES.BUY ? EXCHANGE_TYPES.SELL : EXCHANGE_TYPES.BUY;
    setType(newType);
    let newReceiveAmount = roundNumber(newType === EXCHANGE_TYPES.BUY ? sendAmount * rates.buy : sendAmount / rates.sell);
    setReceiveAmount(newReceiveAmount);
  };

  const handleAmountChange = (value: number, inputType: INPUT_TYPES) => {
    if (inputType === INPUT_TYPES.SEND) {
      setSendAmount(value);
      let newReceiveAmount = roundNumber(type === EXCHANGE_TYPES.BUY ? value * rates.buy : value / rates.sell);
      setReceiveAmount(newReceiveAmount);
    } else {
      setReceiveAmount(value);
      let newSendAmount = roundNumber(type === EXCHANGE_TYPES.BUY ? value / rates.buy : value * rates.sell);
      setSendAmount(newSendAmount);
    }
  };

  return (
    <div className='mt-6 relative'>
      <div className='bg-[#e9f6f6] mb-4 py-2 rounded-md border-secondary/40 border relative'>
        <CurrencyInput
          name='buy'
          prefix={currencyTypes.send.symbol}
          className='pr-10'
          value={sendAmount}
          onValueChange={(value) => value && handleAmountChange(+value, INPUT_TYPES.SEND)}
        />
        <div className='h-full absolute right-0 px-3 top-0 flex gap-2 justify-center items-center'>
          {currencyTypes.send.ISO === CURRENCIES.PEN ? (
            <Image src={PeruFlag} alt='Peru' className='w-6' />
          ) : (
            <Image src={UsaFlag} alt='USA' className='w-6' />
          )}
          <span className='text-sm font-medium'>{currencyTypes.send.ISO.toUpperCase()}</span>
        </div>
      </div>
      <div className='absolute right-[25%] top-12 z-10'>
        <SwipeButton onClick={handleSwipeType} />
      </div>
      <div className='bg-[#e9f6f6] py-2 rounded-md border-secondary/40 border relative'>
        <CurrencyInput
          name='sell'
          className='pr-20'
          prefix={currencyTypes.receive.symbol}
          value={receiveAmount}
          onValueChange={(value) => value && handleAmountChange(+value, INPUT_TYPES.RECEIVE)}
        />
        <div className='h-full absolute right-0 px-3 top-0 flex gap-2 justify-center items-center'>
          {currencyTypes.receive.ISO === CURRENCIES.PEN ? (
            <Image src={PeruFlag} alt='Peru' className='w-6' />
          ) : (
            <Image src={UsaFlag} alt='USA' className='w-6' />
          )}
          <span className='text-sm font-medium'>{currencyTypes.receive.ISO.toUpperCase()}</span>
        </div>
      </div>
      {appliedCoupon ? (
        <div className='py-1 pl-4 mt-6 rounded-md border border-primary border-dashed flex items-center justify-between'>
          <p className='text-primary font-semibold'>{appliedCoupon.couponName}</p>
          <Button
            variant='ghost'
            type='button'
            size='icon'
            onClick={() => {
              clearCoupon();
              setCoupon("");
            }}
          >
            <XIcon className='w-5 h-5 text-primary' />
          </Button>
        </div>
      ) : (
        <div className='flex items-center gap-2 mt-6'>
          <Input placeholder='Ingresa un cupón' value={coupon} onChange={(e) => setCoupon(e.target.value.toUpperCase())} />
          <Button variant='outline' disabled={!coupon || loading} type='button' onClick={() => simulateCoupon(coupon)}>
            {loading ? "Cargando..." : "Simular"}
          </Button>
        </div>
      )}

      <div className='mt-6 flex items-center justify-center gap-2'>
        <Wallet size={22} className='text-primary' />
        <p className='text-sm'>
          Ahorro promedio:
          <span className='font-semibold text-primary'>
            {" "}
            {currencyTypes.receive.symbol} {averageSavings.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ExchangeForm;
