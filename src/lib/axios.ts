import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_ENV === "development" ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL,
  timeout: 10000
});

const requests = {
  get: (url: string) => instance.get(url).then((res) => res.data),
  post: (url: string, body: {}) => instance.post(url, body).then((res) => res.data),
  put: (url: string, body: {}) => instance.put(url, body).then((res) => res.data),
  delete: (url: string) => instance.delete(url).then((res) => res.data)
};

export default requests;
