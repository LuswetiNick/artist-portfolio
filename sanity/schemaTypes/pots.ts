import { defineField, defineType } from "sanity";

export default defineType({
  name: "pots",
  title: "Pots",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Artwork",
      type: "boolean",
      description: "Show this pot prominently on the showcase section",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      media: "image",
      featured: "featured",
    },
  },
  orderings: [
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [{ field: "featured", direction: "desc" }],
    },
  ],
});
