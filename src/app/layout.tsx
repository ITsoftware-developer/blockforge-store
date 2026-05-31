import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "BlockForge Studios | Crystal Obsidian",
  description: "A Minecraft-inspired store for the Crystal Obsidian Fabric mod."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="site-footer">
          <span>BlockForge Studios</span>
          <span>Independent project. Not affiliated with Mojang or Microsoft.</span>
        </footer>
      </body>
    </html>
  );
}
