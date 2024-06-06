"use client";

import ExchangeForm from "../exchangeForm/ExchangeForm";
import Rates from "@/components/molecules/rates/Rates";
import { Card } from "@/components/ui/card/Card";
import { simulateCoupon } from "@/services/exchange/simulateCoupon";
import { useState, useTransition } from "react";
import { CouponData } from "./Calculator.interfaces";
import { AxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast";
import { RatesContract } from "@/types/rates";

export interface CalculatorProps {
  rates: RatesContract;
}

function Calculator({ rates = { buy: 3.5, sell: 3.8 } }: CalculatorProps) {
  const [couponRates, setCouponRates] = useState<RatesContract | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<CouponData | null>(null);
  const [pending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSimulateCoupon = (coupon: string) => {
    if (!coupon || pending) return;

    startTransition(async () => {
      try {
        const couponData = await simulateCoupon(coupon);

        if (couponData?.error) {
          toast({
            variant: "destructive",
            title: "Error con el cupón",
            description: couponData.error.message
          });
          return;
        }

        setAppliedCoupon({
          ...couponData,
          couponName: coupon
        });

        setCouponRates({
          buy: Number(rates.buy) + couponData.discount,
          sell: Number(rates.sell) - couponData.discount
        });
      } catch (error) {
        const err = error as AxiosError;

        console.log(err);
      }
    });
  };

  const onClearCoupon = () => {
    setAppliedCoupon(null);
    setCouponRates(null);
  };

  return (
    <Card className='w-full flex flex-col'>
      <h2 className='text-center text-xl font-bold font-body text-primary mb-3'>
        Tipo de cambio hoy <br /> en Instakash
      </h2>
      <Rates rates={rates} coupon={appliedCoupon} />
      <ExchangeForm
        rates={couponRates ? couponRates : rates}
        simulateCoupon={handleSimulateCoupon}
        clearCoupon={onClearCoupon}
        appliedCoupon={appliedCoupon}
        loading={pending}
      />
      <a
        href='https://app.instakash.net/login'
        className='bg-primary text-white inline-block w-full py-3 rounded-sm mt-6 text-center font-semibold cursor-pointer hover:bg-primary/90 transition-all'
      >
        Inicia tu operación
      </a>
    </Card>
  );
}

export default Calculator;
