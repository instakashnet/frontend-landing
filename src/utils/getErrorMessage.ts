import { isAxiosError } from "axios";

export function getErrorMessage(error: any) {
  if (isAxiosError(error)) {
    return error.response?.data?.message || error.message;
  } else {
    return error.message;
  }
}
