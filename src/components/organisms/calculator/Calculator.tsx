"use client";

import ExchangeForm from "../exchangeForm/ExchangeForm";
import Rates from "@/components/molecules/rates/Rates";
import { Button } from "@/components/ui/button/Button";
import { Card } from "@/components/ui/card/Card";
import { simulateCoupon } from "@/services/actions/exchange";
import { useState, useTransition } from "react";
import { CouponData } from "./Calculator.interfaces";

export interface CalculatorProps {
  rates: {
    buy: number;
    sell: number;
  };
}

function Calculator({ rates = { buy: 3.5, sell: 3.8 } }: CalculatorProps) {
  const [currentRates, setCurrentRates] = useState({ buy: Number(rates.buy), sell: Number(rates.sell) });
  const [appliedCoupon, setAppliedCoupon] = useState<CouponData | null>(null);
  const [pending, startTransition] = useTransition();

  const handleSimulateCoupon = (coupon: string) => {
    if (!coupon || pending) return;

    startTransition(async () => {
      try {
        const couponData = await simulateCoupon(coupon);

        if (!couponData) return;

        setAppliedCoupon({
          ...couponData,
          couponName: coupon
        });

        setCurrentRates((prevRates) => ({
          buy: prevRates.buy + couponData.discount,
          sell: prevRates.sell - couponData.discount
        }));
      } catch (error) {
        console.log(error);
      }
    });
  };

  const onClearCoupon = () => {
    setAppliedCoupon(null);
    setCurrentRates(rates);
  };

  return (
    <Card className='max-w-md w-full flex flex-col'>
      <h2 className='text-center text-xl font-bold font-body text-primary mb-3'>
        Tipo de cambio hoy <br /> en Instakash
      </h2>
      <Rates currentRates={currentRates} rates={rates} hasCoupon={Boolean(appliedCoupon)} />
      <ExchangeForm
        rates={currentRates}
        simulateCoupon={handleSimulateCoupon}
        clearCoupon={onClearCoupon}
        appliedCoupon={appliedCoupon}
        loading={pending}
      />
      <Button size='lg' className='w-full max-w-sm mx-auto mt-6'>
        Inicia tu operación
      </Button>
    </Card>
  );
}

export default Calculator;
