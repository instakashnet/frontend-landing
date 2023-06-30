import { defineField, defineType } from "sanity";

export default defineType({
  name: "popup",
  type: "document",
  title: "Popup",
  fields: [
    defineField({
      name: "show",
      type: "boolean",
      title: "Mostrar promoción",
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
      name: "is_notif",
      type: "boolean",
      title: "¿Es un aviso?",
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
          validation: (Rule) => Rule.optional().min(50),
        },
      ],
    }),
  ],
});
