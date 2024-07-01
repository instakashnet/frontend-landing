import { client } from "../lib/client";

export function getPopupQuery() {
  const query = `
    *[_type == "popup"] {
      title,
      show,
      "image": image.asset->url,
      notice,
      hasNotice
    }[0]
  `;

  return client.fetch(query);
}
