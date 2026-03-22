import { defineField, defineType } from "sanity";

const programTypeLabels: Record<string, string> = {
  "youth-intensive": "Youth Intensive",
  "advanced-youth": "Advanced Youth Studio",
  apprenticeship: "Junior Apprenticeship",
  "school-partnership": "School Partnership",
  "adult-workshop": "Adult Workshop",
  "adult-immersive": "Adult Immersive",
};

export default defineType({
  name: "course",
  title: "Courses",
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
      name: "programType",
      title: "Program Type",
      type: "string",
      options: {
        list: [
          { title: "Youth Intensive", value: "youth-intensive" },
          { title: "Advanced Youth Studio", value: "advanced-youth" },
          { title: "Junior Apprenticeship", value: "apprenticeship" },
          { title: "School Partnership", value: "school-partnership" },
          { title: "Adult Workshop", value: "adult-workshop" },
          { title: "Adult Immersive", value: "adult-immersive" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "targetAudience",
      title: "Target Audience",
      type: "string",
      description: 'e.g. "Ages 12-17", "Artists, hobbyists, beginners"',
    }),
    defineField({
      name: "ageRange",
      title: "Age Range",
      type: "object",
      fields: [
        defineField({ name: "min", title: "Minimum Age", type: "number" }),
        defineField({ name: "max", title: "Maximum Age", type: "number" }),
      ],
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'e.g. "4 Saturdays", "8-12 weeks", "3-6 months"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sessionLength",
      title: "Session Length",
      type: "string",
      description: 'e.g. "4 hours per session"',
    }),
    defineField({
      name: "totalHours",
      title: "Total Instruction Hours",
      type: "number",
    }),
    defineField({
      name: "cohortSize",
      title: "Cohort Size",
      type: "object",
      fields: [
        defineField({ name: "min", title: "Minimum", type: "number" }),
        defineField({ name: "max", title: "Maximum", type: "number" }),
      ],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Studio or Partner School"',
    }),
    defineField({
      name: "applicationBased",
      title: "Application-Based Enrollment",
      type: "boolean",
      description: "Requires application rather than open enrollment",
      initialValue: false,
    }),
    defineField({
      name: "about",
      title: "About the Programme",
      type: "blockContent",
    }),
    defineField({
      name: "learningOutcomes",
      title: "Learning Outcomes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "curriculumStructure",
      title: "Curriculum Structure",
      type: "array",
      of: [
        {
          type: "object",
          name: "curriculumItem",
          title: "Curriculum Item",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: 'e.g. "WEEK 1" or "Day 1"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "theme",
              title: "Theme",
              type: "string",
              description: 'e.g. "Learning to See"',
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "theme" },
          },
        },
      ],
    }),
    defineField({
      name: "materialsProvided",
      title: "Materials Provided",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "deliverables",
      title: "What Participants Receive",
      type: "array",
      of: [{ type: "string" }],
      description: "Items or benefits participants take home on completion",
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "array",
      of: [
        {
          type: "object",
          name: "pricingTier",
          title: "Pricing Tier",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: 'e.g. "Standard Fee", "Early Bird", "International"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "amount",
              title: "Amount",
              type: "number",
              validation: (Rule) => Rule.required().positive(),
            }),
            defineField({
              name: "currency",
              title: "Currency",
              type: "string",
              options: {
                list: [
                  { title: "KES (Kenyan Shilling)", value: "KES" },
                  { title: "USD (US Dollar)", value: "USD" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "note",
              title: "Note",
              type: "string",
              description: 'e.g. "Excluding accommodation unless bundled"',
            }),
          ],
          preview: {
            select: {
              label: "label",
              amount: "amount",
              currency: "currency",
            },
            prepare({ label, amount, currency }) {
              return {
                title: label,
                subtitle:
                  amount && currency
                    ? `${currency} ${amount.toLocaleString()}`
                    : undefined,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Highlight this programme on the site",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      programType: "programType",
    },
    prepare({ title, programType }) {
      return {
        title,
        subtitle: programTypeLabels[programType] ?? programType,
      };
    },
  },
  orderings: [
    {
      title: "Program Type",
      name: "programTypeAsc",
      by: [{ field: "programType", direction: "asc" }],
    },
    {
      title: "Title A–Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
