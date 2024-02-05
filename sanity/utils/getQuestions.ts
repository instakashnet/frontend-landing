import { client } from "../lib/client";

export function getQuestionsQuery() {
  const query = `*[_type == "question"] {
    title,
    category,
    question,
    answer
  }`;

  return client.fetch(query);
}
