import { defineField, defineType } from "sanity";

export default defineType({
  name: "banners",
  type: "document",
  title: "Banners",
  fields: [
    defineField({
      name: "banner_image",
      type: "array",
      title: "Lista de banners",
      description: "Lista de banners para la página de inicio",
      of: [{ type: "image" }],
    }),
  ],
});
