
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

const pricingQuery = `*[_type == "foundationPricing"][0] {
  offerBadge,
  indiaOfferPrice,
  indiaOriginalPrice,
  internationalOfferPrice,
  internationalOriginalPrice,
  indiaPriceLabel,
  internationalPriceLabel,
  limitedSeatsText,
  reserveButtonText,
  askPricingButtonText,
  benefits,
  pricingDetails[] {
    label,
    value
  }
}`;

export async function GET() {
  try {
    const pricing = await client.fetch(pricingQuery);

    if (!pricing) {
      return NextResponse.json(
        { error: "No published pricing document found in Sanity." },
        { status: 404 },
      );
    }

    return NextResponse.json(pricing, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Sanity pricing fetch failed:", error);

    return NextResponse.json(
      { error: "Unable to load pricing." },
      { status: 500 },
    );
  }
}
