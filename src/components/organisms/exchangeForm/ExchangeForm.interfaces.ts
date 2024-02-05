import { CURRENCIES, CURRENCY_SYMBOLS } from "@/enums/currencies";
import { CalculatorProps } from "../calculator/Calculator";
import { CouponData } from "../calculator/Calculator.interfaces";

export interface CurrenciesProps {
  send: {
    ISO: CURRENCIES;
    symbol: CURRENCY_SYMBOLS;
  };
  receive: {
    ISO: CURRENCIES;
    symbol: CURRENCY_SYMBOLS;
  };
}

export interface ExchangeFormProps {
  rates: CalculatorProps["rates"];
  simulateCoupon: (couponName: string) => void;
  loading?: boolean;
  appliedCoupon?: CouponData | null;
  clearCoupon: () => void;
}
