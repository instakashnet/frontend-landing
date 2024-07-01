import { TypedObject } from "@portabletext/types";

export interface AdsModalProps {
  image: string;
  show: boolean;
  delay?: number;
  notice?: TypedObject | TypedObject[];
}
