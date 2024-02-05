import { QUESTION_CATEGORIES } from "@/app/(client)/faq/components/CategoriesSection/Categories.enum";
import { defineField, defineType } from "sanity";

export const question = defineType({
  name: "question",
  title: "Preguntas frecuentes",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string"
    }),
    defineField({
      name: "category",
      title: "Categoria de pregunta",
      type: "string",
      options: {
        list: [
          { title: "Casa de cambio", value: QUESTION_CATEGORIES.EXCHANGE },
          { title: "KASH", value: QUESTION_CATEGORIES.KASH },
          { title: "Cuenta y perfil", value: QUESTION_CATEGORIES.ACCOUNT },
          { title: "Cambios de divisas", value: QUESTION_CATEGORIES.ORDERS }
        ],
        layout: "radio" // Esto hará que las opciones se muestren como botones de radio
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "question",
      title: "Pregunta",
      type: "string"
    }),
    defineField({
      name: "answer",
      title: "Respuesta",
      type: "array",
      of: [{ type: "block" }]
    })
  ]
});
