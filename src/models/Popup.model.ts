import { TypedObject } from "@portabletext/types";

export interface Popup {
  image: string;
  show: boolean;
  title: string;
  hasNotice: boolean;
  notice: TypedObject | TypedObject[];
}
