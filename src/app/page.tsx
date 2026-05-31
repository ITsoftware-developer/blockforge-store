import Image from "next/image";
import Link from "next/link";
import { product } from "@/lib/product";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image
          className="hero-art"
          src="/assets/hero-crystal-obsidian.png"
          alt="Voxel arena with obsidian and crystal energy"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">Fabric {product.minecraftVersion} client helper</p>
          <h1>{product.name}</h1>
          <p className="lead">
            Place obsidian and an End Crystal in one clean sequence. Built for
            players who want faster crystal setups without a bloated client.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/pricing">
              Buy for {product.price}
            </Link>
            <Link className="btn ghost" href="/mod">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="forge-strip" aria-label="Product highlights">
        <div>
          <strong>One action</strong>
          <span>Crystal click becomes obsidian plus crystal.</span>
        </div>
        <div>
          <strong>Lightweight</strong>
          <span>No menus, macros, or oversized client pack.</span>
        </div>
        <div>
          <strong>Real input</strong>
          <span>Uses hotbar switching and normal block interactions.</span>
        </div>
        <div>
          <strong>Launch build</strong>
          <span>Ready for Minecraft {product.minecraftVersion} on Fabric.</span>
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">A cleaner combat utility</p>
          <h2>Built like a focused tool, sold like a real product.</h2>
          <p>
            Crystal Obsidian does one job clearly: it turns a clumsy
            hotbar-switch sequence into a controlled placement flow. The store
            is wired for Stripe checkout, Supabase orders, licenses, and
            protected downloads.
          </p>
          <Link className="text-link" href="/pricing">
            Open the launch pack →
          </Link>
        </div>
        <div className="block-diagram" aria-label="Action sequence">
          <div className="diagram-step step-1">
            <span>1</span>
            <b>Crystal</b>
          </div>
          <div className="diagram-step step-2">
            <span>2</span>
            <b>Obsidian</b>
          </div>
          <div className="diagram-step step-3">
            <span>3</span>
            <b>Place</b>
          </div>
        </div>
      </section>
    </main>
  );
}
