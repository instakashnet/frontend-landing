import { BENEFTIS_TYPES } from "@/enums/benefitsTypes";
import { defineField, defineType } from "sanity";

export const benefit = defineType({
  name: "benefit",
  title: "Beneficios",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string"
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Portada"
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "array",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "type",
      title: "Tipo de beneficio",
      type: "string",
      options: {
        list: [
          { title: "Personal", value: BENEFTIS_TYPES.PERSONAL },
          { title: "Empresarial", value: BENEFTIS_TYPES.EMPRESARIAL }
        ],
        layout: "radio" // Esto hará que las opciones se muestren como botones de radio
      }
    }),
    defineField({
      name: "hasDate",
      title: "Tiene fecha",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "fromDate",
      title: "Fecha de inicio",
      type: "date",
      validation: (Rule) =>
        Rule.custom((date, context) => {
          if (context.document?.hasDate && !date) {
            return "Debe tener una fecha de inicio";
          }
          return true;
        })
    }),
    defineField({
      name: "toDate",
      title: "Fecha de fin",
      type: "date",
      validation: (Rule) =>
        Rule.custom((date, context) => {
          if (context.document?.hasDate && !date) {
            return "Debe tener una fecha de fin";
          }
          return true;
        })
    })
  ]
});
