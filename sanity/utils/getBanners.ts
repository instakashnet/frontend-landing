import { client } from "../lib/client";

export function getBannersQuery() {
  const query = `
  *[_type == "banner"] {
    "imageUrl": image.asset->url, 
    title,
    link
  }
  `;

  return client.fetch(query);
}
