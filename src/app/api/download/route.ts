import { NextResponse } from "next/server";
import { product } from "@/lib/product";
import { createSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const license = url.searchParams.get("license");

  if (!license) {
    return NextResponse.json({ error: "Missing license key." }, { status: 400 });
  }

  const bucket = process.env.DOWNLOAD_BUCKET;

  if (!bucket) {
    return NextResponse.redirect(new URL(product.localDownloadPath, url.origin));
  }

  const supabase = createSupabaseAdmin();
  const { data: licenseRow, error } = await supabase
    .from("licenses")
    .select("id, product_id, user_email")
    .eq("license_key", license)
    .single();

  if (error || !licenseRow) {
    return NextResponse.json({ error: "Invalid license key." }, { status: 403 });
  }

  await supabase.from("downloads").insert({
    license_id: licenseRow.id,
    product_id: licenseRow.product_id,
    user_email: licenseRow.user_email
  });

  const signed = await supabase.storage
    .from(bucket)
    .createSignedUrl(product.fileName, 60);

  if (signed.error || !signed.data?.signedUrl) {
    return NextResponse.json({ error: "Could not create download link." }, { status: 500 });
  }

  return NextResponse.redirect(signed.data.signedUrl);
}
