import { CalculatorProps } from "@/components/organisms/calculator/Calculator.interfaces";

export interface RatesProps {
  rates: {
    buy: number;
    sell: number;
  };
  currentRates: {
    buy: number;
    sell: number;
  };
  hasCoupon: boolean;
}
