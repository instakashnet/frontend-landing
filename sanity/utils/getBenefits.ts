import { client } from "../lib/client";

export function getBenefitsQuery() {
  const query = `
    *[_type == "benefit"] {
        title,
        "cover": image.asset->url,
          description,
          type,
          hasDate,
          fromDate, 
          toDate
      }
    `;
  return client.fetch(query);
}
