import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export async function getBenefits() {
  const client = createClient({
    apiVersion,
    projectId,
    dataset,
  });

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

  //
}
