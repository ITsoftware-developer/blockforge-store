import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabaseAdmin";
import { createStripe } from "@/lib/stripe";
import { product } from "@/lib/product";

export async function POST(request: Request) {
  const stripe = createStripe();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json({ error: "Missing STRIPE_WEBHOOK_SECRET." }, { status: 503 });
  }

  const body = await request.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature." }, { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid Stripe signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email ?? session.customer_email;
    const supabase = createSupabaseAdmin();

    const { data: productRow, error: productError } = await supabase
      .from("products")
      .select("id")
      .eq("slug", product.slug)
      .single();

    if (productError || !productRow || !email) {
      return NextResponse.json({ received: true, skipped: true });
    }

    const { data: order } = await supabase
      .from("orders")
      .upsert(
        {
          product_id: productRow.id,
          user_email: email,
          stripe_session_id: session.id,
          status: "paid",
          amount_total: session.amount_total,
          currency: session.currency,
          paid_at: new Date().toISOString()
        },
        { onConflict: "stripe_session_id" }
      )
      .select("id")
      .single();

    if (order) {
      await supabase.from("licenses").insert({
        order_id: order.id,
        product_id: productRow.id,
        user_email: email
      });
    }
  }

  return NextResponse.json({ received: true });
}
