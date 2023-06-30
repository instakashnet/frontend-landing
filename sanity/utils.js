import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getBenefits() {
  return client.fetch(
    groq`
        *[_type == "benefits"]{
          _id,
          _createdAt,
          title,
          subtitle,
          accessUrl,
          btnLabel,
          description,
          from,
          until,
          "image": {
            "alt": benefitImage.alt,
            "url": benefitImage.asset->url
          }
        }
      `
  );
}

export async function getPopup() {
  return client.fetch(
    groq`
    *[_type == "popup"][0] {
      title,
      "image": image.asset->url,
      "show": show == true,
      "isNotif": is_notif == true,
      "notifTitle":  notif_title,
        "description": notif_desc
    }
      `
  );
}

export async function getBanners() {
  return client.fetch(
    groq`
    *[_type == "banners"] {
      title,
      description,
      "desktop": imageDesktop.asset->url,
        "mobile": imageMobile.asset->url,
        link
    }
    `
  );
}
