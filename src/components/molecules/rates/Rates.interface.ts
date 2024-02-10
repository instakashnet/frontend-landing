import { CouponData } from "@/components/organisms/calculator/Calculator.interfaces";

export interface RatesProps {
  rates: {
    buy: number;
    sell: number;
  };
  coupon: CouponData | null;
}
