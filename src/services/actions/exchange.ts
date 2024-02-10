"use server";

import requests from "@/lib/axios";
import { AxiosError } from "axios";

export async function simulateCoupon(coupon: string) {
  try {
    const response = await requests.get(`/exchange-service/api/v1/client/coupons/data/${coupon}/natural`);
    return response;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.response);

    if (err.response?.data) {
      return err.response?.data;
    } else {
      return { error: { message: "Ha ocurrido un error inesperado. Por favor intenta más tarde" } };
    }
  }
}
