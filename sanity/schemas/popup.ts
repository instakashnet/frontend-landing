import { defineType } from "sanity";

export const popuop = defineType({
  name: "popup",
  title: "Popup AD",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string"
    },
    {
      name: "show",
      title: "Mostrar",
      type: "boolean",
      description: "Mostrar popup inicial",
      initialValue: true
    },
    {
      name: "image",
      title: "Popup image",
      type: "image",
      description: "Imagen para el popup inicial"
    },
    {
      name: "hasNotice",
      title: "Notificación Activada",
      type: "boolean",
      description: "Activar notificación",
      initialValue: false
    },
    {
      name: "notice",
      title: "Notificación",
      type: "array",
      of: [
        {
          type: "block",
          validation(rule) {
            return rule.optional();
          }
        }
      ]
    }
  ]
});
