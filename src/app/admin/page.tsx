export default function AdminPage() {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Owner dashboard</p>
        <h1>Your admin panel starts here.</h1>
        <p>
          This page is ready to connect to Supabase Auth. Keep it private before
          publishing.
        </p>
      </section>

      <section className="admin-grid">
        <article>
          <strong>Products</strong>
          <span>1 launch product</span>
        </article>
        <article>
          <strong>Orders</strong>
          <span>Stripe webhook controlled</span>
        </article>
        <article>
          <strong>Licenses</strong>
          <span>Created after paid orders</span>
        </article>
        <article>
          <strong>Downloads</strong>
          <span>Track by license</span>
        </article>
      </section>

      <section className="note-panel">
        <h2>Before going live</h2>
        <p>
          Add Supabase Auth protection to this route, paste the SQL schema into
          Supabase, create a Stripe product and price, then set the environment
          variables from `.env.example`. The public contact handle is configured
          in `src/lib/product.ts`.
        </p>
      </section>
    </main>
  );
}
