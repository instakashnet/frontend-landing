"use server";

import requests from "@/lib/axios";
import { AxiosError } from "axios";

export async function simulateCoupon(coupon: string) {
  try {
    const response = await requests.get(`/exchange-service/api/v1/client/coupons/${coupon}/natural`);
    console.log(response);
    return response;
  } catch (error) {
    const err = error as AxiosError;

    console.log(err.response?.data);
    throw error;
  }
}
