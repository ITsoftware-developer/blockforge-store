import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark" aria-hidden="true" />
        <span>BlockForge Studios</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/mod">The Mod</Link>
        <Link href="/pricing">Buy</Link>
        <Link href="/install">Install</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  );
}
