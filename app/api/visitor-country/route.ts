
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Local testing only — never enable this override in production.
  if (
    process.env.NODE_ENV === "development" &&
    searchParams.get("testCountry")
  ) {
    const testCountry = searchParams
      .get("testCountry")!
      .trim()
      .toUpperCase();

    if (!/^[A-Z]{2}$/.test(testCountry)) {
      return NextResponse.json(
        { error: "Invalid test country code." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { country: testCountry },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const country = (
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    ""
  )
    .trim()
    .toUpperCase();

  if (!/^[A-Z]{2}$/.test(country) || country === "XX" || country === "T1") {
    return NextResponse.json(
      { error: "Visitor country could not be determined." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  return NextResponse.json(
    { country },
    { headers: { "Cache-Control": "no-store" } },
  );
}
