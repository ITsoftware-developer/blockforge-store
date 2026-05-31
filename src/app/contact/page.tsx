import Link from "next/link";
import { product } from "@/lib/product";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Contact</p>
        <h1>Need help or want a custom mod?</h1>
        <p>
          BlockForge Studios handles support, purchase questions, and custom
          Minecraft mod requests through Discord. Add{" "}
          <strong>{product.discordHandle}</strong> to contact me.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href={product.discordUrl}>
            Open Discord
          </a>
          <Link className="btn" href="/pricing">
            View Crystal Obsidian
          </Link>
        </div>
      </section>

      <section className="license-grid">
        <article>
          <h2>Support</h2>
          <p>Add {product.discordHandle} for installation help or purchase support.</p>
        </article>
        <article>
          <h2>Custom work</h2>
          <p>Request custom Minecraft mods, plugins, or store changes.</p>
        </article>
        <article>
          <h2>Fast replies</h2>
          <p>Discord keeps messages, files, and updates in one place.</p>
        </article>
      </section>
    </main>
  );
}
