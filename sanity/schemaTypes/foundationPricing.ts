
import { defineField, defineType } from "sanity";

export const foundationPricing = defineType({
  name: "foundationPricing",
  title: "Foundation Program Pricing",
  type: "document",

  fields: [
    defineField({
      name: "offerBadge",
      title: "Offer Badge",
      type: "string",
      initialValue: "Durga Puja Special Offer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "indiaOfferPrice",
      title: "India Offer Price (INR)",
      type: "number",
      initialValue: 1999,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "indiaOriginalPrice",
      title: "India Original Price (INR)",
      type: "number",
      initialValue: 4499,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "internationalOfferPrice",
      title: "International Offer Price (USD)",
      type: "number",
      initialValue: 49,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "internationalOriginalPrice",
      title: "International Original Price (USD)",
      type: "number",
      initialValue: 89,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "indiaPriceLabel",
      title: "India Price Label",
      type: "string",
      initialValue: "India Offer Price · INR",
    }),
    defineField({
      name: "internationalPriceLabel",
      title: "International Price Label",
      type: "string",
      initialValue: "International Offer Price · USD",
    }),
    defineField({
      name: "limitedSeatsText",
      title: "Limited Seats Text",
      type: "string",
      initialValue: "Limited seats available",
    }),
    defineField({
      name: "reserveButtonText",
      title: "Reserve Button Text",
      type: "string",
      initialValue: "Reserve My Seat",
    }),
    defineField({
      name: "askPricingButtonText",
      title: "Ask Pricing Button Text",
      type: "string",
      initialValue: "Ask for Pricing",
    }),
    defineField({
      name: "benefits",
      title: "Program Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "pricingDetails",
      title: "Pricing Card Details",
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
    }),
  ],
});
