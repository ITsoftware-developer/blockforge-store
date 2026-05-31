export default function ModPage() {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">What buyers get</p>
        <h1>Crystal placement without the awkward hotbar dance.</h1>
        <p>
          Hold an End Crystal, right-click beside a block, and Crystal
          Obsidian briefly switches to obsidian, places it, swaps back, and
          places the crystal on top.
        </p>
      </section>

      <section className="mechanic-grid">
        <article>
          <span className="mini-block purple" />
          <h2>Trigger</h2>
          <p>
            Activates only while an End Crystal is in your main hand and the
            target space is clear.
          </p>
        </article>
        <article>
          <span className="mini-block black" />
          <h2>Hotbar resource</h2>
          <p>
            Obsidian must be in your hotbar so the mod can use normal player
            slot switching.
          </p>
        </article>
        <article>
          <span className="mini-block teal" />
          <h2>Vanilla fallback</h2>
          <p>
            Existing obsidian and bedrock are left to vanilla Minecraft, so the
            mod stays out of the way.
          </p>
        </article>
      </section>

      <section className="timeline">
        <h2>The action in ticks</h2>
        <ol>
          <li>
            <span>01</span>
            <p>You hold an End Crystal and click the target spot.</p>
          </li>
          <li>
            <span>02</span>
            <p>The helper finds obsidian in your hotbar.</p>
          </li>
          <li>
            <span>03</span>
            <p>It places obsidian using a normal block interaction.</p>
          </li>
          <li>
            <span>04</span>
            <p>It swaps back and places the End Crystal on the new base.</p>
          </li>
        </ol>
      </section>
    </main>
  );
}
