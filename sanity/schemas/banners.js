import { defineField, defineType } from "sanity";

export default defineType({
  name: "banners",
  type: "document",
  title: "Banners",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Titulo del banner",
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: "imageDesktop",
      type: "image",
      title: "Imagen del banner (desktop)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageMobile",
      type: "image",
      title: "Imagen del banner (mobile)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Descripción corta",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "link",
      type: "url",
      title: "URL para acceder al banner",
      validation: (Rule) => Rule.optional(),
    }),
  ],
});
