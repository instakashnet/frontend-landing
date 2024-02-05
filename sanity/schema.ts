import { type SchemaTypeDefinition } from "sanity";
import { banner } from "./schemas/banner";
import { benefit } from "./schemas/benefit";
import { question } from "./schemas/question";
import { popuop } from "./schemas/popup";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, benefit, question, popuop]
};
