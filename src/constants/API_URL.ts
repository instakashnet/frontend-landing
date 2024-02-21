export const API_URL =
  process.env.NEXT_PUBLIC_APP_ENV === "development" ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;
