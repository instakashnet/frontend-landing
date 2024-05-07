import { defineField, defineType } from "sanity";

export const banner = defineType({
  name: "banner",
  title: "Banner ads",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "image",
      title: "Ad image",
      type: "image",
      description: "Image for the ad"
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      description: "Link to the ad",
      initialValue: "#!"
    })
  ]
});
