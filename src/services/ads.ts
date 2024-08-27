"use server";

import { getErrorMessage } from "@/utils/getErrorMessage";
import { getBannersQuery } from "../../sanity/utils/getBanners";
import { getPopupQuery } from "../../sanity/utils/getPopup";
import { Popup } from "@/models/Popup.model";
import { getBenefitsQuery } from "../../sanity/utils/getBenefits";

export async function getBanners() {
  try {
    const banners = await getBannersQuery();
    return banners;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error(message);
  }
}

export async function getPopup() {
  try {
    const popup = await getPopupQuery();
    return popup as Popup;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error(message);
  }
}

export async function getBenefits() {
  try {
    const benefits = await getBenefitsQuery();
    return benefits;
  } catch (error) {
    const message = getErrorMessage(error);
    console.log(message);
  }
}
