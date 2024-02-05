export interface CalculatorProps {
  rates: {
    buy: number;
    sell: number;
  };
}

export interface CouponData {
  discount: number;
  code: number;
  minAmountBuy: number;
  couponId: string;
  couponName: string;
}
