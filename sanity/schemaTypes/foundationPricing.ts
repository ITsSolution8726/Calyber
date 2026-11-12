
import { defineField, defineType } from "sanity";

export const foundationPricing = defineType({
  name: "foundationPricing",
  title: "Foundation Program Details",
  type: "document",

  fields: [
    defineField({
      name: "offerBadge",
      title: "Offer Badge (Optional)",
      type: "string",
      initialValue: "",
    }),

    defineField({
      name: "indiaOfferPrice",
      title: "India Programme Fee (INR)",
      type: "number",
      initialValue: 3400,
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "indiaOriginalPrice",
      title: "India Original Price (INR)",
      type: "number",
      initialValue: 3400,
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "internationalOfferPrice",
      title: "International Programme Fee (USD)",
      type: "number",
      initialValue: 49,
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "internationalOriginalPrice",
      title: "International Original Price (USD)",
      type: "number",
      initialValue: 49,
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "indiaPriceLabel",
      title: "India Price Label",
      type: "string",
      initialValue: "Programme Fee",
    }),

    defineField({
      name: "internationalPriceLabel",
      title: "International Price Label",
      type: "string",
      initialValue: "International Programme Fee",
    }),

    defineField({
      name: "limitedSeatsText",
      title: "Programme Fee Description",
      type: "string",
      initialValue: "One-time fee · 12-week programme",
    }),

    defineField({
      name: "reserveButtonText",
      title: "Reserve Button Text",
      type: "string",
      initialValue: "Reserve Your Seat",
    }),

    defineField({
      name: "askPricingButtonText",
      title: "Ask Pricing Button Text",
      type: "string",
      initialValue: "Ask for Pricing",
    }),

    defineField({
      name: "benefits",
      title: "Programme Includes",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Structured Learning Roadmap",
        "Recorded Class Access",
        "WhatsApp Learning Support",
        "Individual Practice Feedback",
        "Student Learning Community",
      ],
    }),

    defineField({
      name: "pricingDetails",
      title: "Programme Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
            }),
          ],
        },
      ],
      initialValue: [
        { label: "Duration", value: "12 Weeks" },
        { label: "Live Classes", value: "24 Classes" },
        { label: "Frequency", value: "2 Classes / Week" },
        { label: "Class Duration", value: "60+ Minutes / Class" },
      ],
    }),
  ],
});
