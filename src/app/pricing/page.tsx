import { product } from "@/lib/product";

export default function PricingPage() {
  return (
    <main className="page-shell">
      <section className="shop-layout">
        <div className="shop-copy">
          <p className="eyebrow">BlockForge launch</p>
          <h1>{product.name} {product.version}</h1>
          <p>
            A focused Fabric utility for Minecraft {product.minecraftVersion}.
            The store is prepared for secure Stripe checkout and Supabase
            download access.
          </p>
          <div className="price-rune">
            <span>{product.price}</span>
            <small>one-time purchase</small>
          </div>
        </div>

        <aside className="checkout-panel" aria-label="Purchase panel">
          <h2>Launch pack</h2>
          <ul className="check-list">
            <li>Crystal Obsidian jar</li>
            <li>Fabric {product.minecraftVersion}</li>
            <li>Install guide included</li>
            <li>Stripe + Supabase flow scaffolded</li>
          </ul>
          <form action="/api/checkout" method="post">
            <input type="hidden" name="product" value={product.slug} />
            <button className="btn primary full" type="submit">
              Continue to secure checkout
            </button>
          </form>
          <a className="btn ghost full" href="/api/download?license=YOUR_LICENSE_KEY">
            Protected download route
          </a>
          <p className="small-print">
            The checkout button becomes live after you add your Stripe and
            Supabase environment keys. Do not upload paid jars into `public`.
          </p>
        </aside>
      </section>

      <section className="license-grid">
        <article>
          <h2>Personal license</h2>
          <p>For one buyer account. Do not redistribute the jar.</p>
        </article>
        <article>
          <h2>Protected downloads</h2>
          <p>Production downloads should unlock only after webhook payment confirmation.</p>
        </article>
        <article>
          <h2>Creator-ready</h2>
          <p>Start with this store or swap the checkout button to Gumroad or Payhip.</p>
        </article>
      </section>
    </main>
  );
}
