import { defineField, defineType } from "sanity";

export default defineType({
  name: "popup",
  type: "document",
  title: "Popup",
  fields: [
    defineField({
      name: "active",
      type: "boolean",
      title: "Mostrar promoción",
      initialValue: true,
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Titlo de la promoción",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Imagen de promoción",
    }),
    defineField({
      name: "notif_title",
      type: "string",
      title: "Titlo del aviso",
      validation: (Rule) => Rule.optional().max(50),
    }),
    defineField({
      name: "notif_desc",
      type: "array",
      title: "Contenido del aviso",
      of: [
        {
          type: "block",
        },
      ],
    }),
  ],
});
