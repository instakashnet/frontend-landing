import requests from "@/lib/axios";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { cache } from "react";

export const revalidate = 60 * 60 * 24 * 4;

export const getCounters = cache(async () => {
  try {
    const counters = await requests.get("/exchange-service/api/v1/client/analytics/general");
    return counters;
  } catch (error) {
    const message = getErrorMessage(error);
    console.log(message);
  }
});
