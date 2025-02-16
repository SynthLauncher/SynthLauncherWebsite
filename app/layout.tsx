import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynthLauncher",
  description: "Modern, Free and Open-Source Minecraft Launcher!",
  keywords: [
    "Minecraft",
    "Free",
    "Secure",
    "Game",
    "Blocks",
    "Caves",
    "Launcher",
    "Creeper",
    "Block Game",
  ],
  openGraph: {
    title: "SynthLauncher",
    description: "Modern, Free and Open-Source Minecraft Launcher!",
    url: "https://example.com",
    siteName: "SynthLauncher",
    images: [
      {
        url: "https://cdn.prod.website-files.com/610ff99467acf52f27504987/6217aed40d6ca91862228861_minecraft-p-1600.jpeg",
        width: 1200,
        height: 630,
        alt: "Minecraft",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black`}
      >
        <Navbar />

        <main className="bg-black">{children}</main>

        <Footer />

        <SpeedInsights />
      </body>
    </html>
  );
}
