export default function InstallPage() {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Install</p>
        <h1>Drop the jar into your Modrinth Fabric profile.</h1>
        <p>
          Use Minecraft 1.21.11 with Fabric and Fabric API. Then put the jar in
          the profile&apos;s mods folder.
        </p>
      </section>

      <section className="install-steps">
        <article>
          <span>01</span>
          <h2>Open Modrinth</h2>
          <p>Select your Minecraft 1.21.11 Fabric profile.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Add Fabric API</h2>
          <p>Crystal Obsidian depends on Fabric API.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Open mods</h2>
          <p>Open the profile folder and go to the `mods` directory.</p>
        </article>
        <article>
          <span>04</span>
          <h2>Launch</h2>
          <p>Place the jar there and start Minecraft.</p>
        </article>
      </section>

      <section className="hotbar-demo">
        <div>
          <p className="eyebrow">In-game setup</p>
          <h2>Crystal in hand. Obsidian in hotbar.</h2>
          <p>The mod searches hotbar slots 1 through 9 for obsidian.</p>
        </div>
        <div className="hotbar" aria-label="Example hotbar">
          <span className="slot obsidian" />
          <span className="slot" />
          <span className="slot crystal active" />
          <span className="slot" />
          <span className="slot" />
          <span className="slot" />
          <span className="slot" />
          <span className="slot" />
          <span className="slot" />
        </div>
      </section>
    </main>
  );
}
