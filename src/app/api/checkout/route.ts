import { NextResponse } from "next/server";
import { product } from "@/lib/product";
import { createStripe } from "@/lib/stripe";

export async function POST() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const priceId = process.env.STRIPE_PRICE_CRYSTAL_OBSIDIAN;

  if (!priceId) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured yet. Add STRIPE_PRICE_CRYSTAL_OBSIDIAN to .env.local."
      },
      { status: 503 }
    );
  }

  const stripe = createStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    metadata: {
      product: product.slug
    },
    success_url: `${siteUrl}/install?paid=1`,
    cancel_url: `${siteUrl}/pricing?cancelled=1`,
    allow_promotion_codes: true
  });

  if (!session.url) {
    return NextResponse.json({ error: "Stripe did not return a checkout URL." }, { status: 500 });
  }

  return NextResponse.redirect(session.url, 303);
}
