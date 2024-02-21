import requests from "@/lib/axios";
import { RatesContract } from "@/types/rates";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { cache } from "react";

export const revalidate = 0;

export const getRates = cache(async () => {
  try {
    const rates = await requests.get("/exchange-service/api/v1/client/rates");
    return {
      buy: +rates.buy,
      sell: +rates.sell
    } as RatesContract;
  } catch (error) {
    const message = getErrorMessage(error);
    console.log(message);

    return {
      buy: 0,
      sell: 0
    };
  }
});
