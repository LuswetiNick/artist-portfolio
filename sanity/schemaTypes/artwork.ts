import { defineField, defineType } from "sanity";

export default defineType({
  name: "artwork",
  title: "Artworks",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "materials",
      title: "Materials",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Describe the image for accessibility",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Wall Panels", value: "Wall panels" },
          { title: "Murals", value: "Murals" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      description: "Is this artwork available for purchase?",
      initialValue: false,
    }),
    defineField({
      name: "featured",
      title: "Featured Artwork",
      type: "boolean",
      description: "Show this artwork prominently on the showcase section",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      category: "category",
      featured: "featured",
    },
    prepare(selection) {
      const { title, media, category, featured } = selection;
      return {
        title: featured ? `${title}` : title,
        subtitle: category || "Uncategorized",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [{ field: "featured", direction: "desc" }],
    },
    {
      title: "Year (Newest First)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
    {
      title: "Year (Oldest First)",
      name: "yearAsc",
      by: [{ field: "year", direction: "asc" }],
    },
  ],
});
