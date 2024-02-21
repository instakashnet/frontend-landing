"use server";

import { API_URL } from "@/constants/API_URL";
import { RatesContract } from "@/types/rates";
import { getErrorMessage } from "@/utils/getErrorMessage";

export const getRates = async () => {
  try {
    const response = await fetch(`${API_URL}/exchange-service/api/v1/client/rates`, { next: { revalidate: 0 } });
    const rates = await response.json();
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
};
