import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  apiVersion: "v1",
  dataset,
  projectId,
  useCdn: false,
});
