import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/layout/navbar';
import { Footer } from '../components/layout/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SynthLauncher',
  description: 'Modern, Free and Open-Source Minecraft Launcher!',
  keywords: ["Minecraft", "Free", "Secure", "Game", "Blocks", "Caves", "Launcher", "Creeper", "Block Game"],
  openGraph: {
    title: "",
    description: "This is the description of my website.",
    url: "https://example.com",
    siteName: "My Website",
    images: [
      {
        url: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        width: 1200,
        height: 630,
        alt: "My OG Image",
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
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black`}>
        <Navbar />
        
        <main className="pt-16">
          {children}
        </main>
        
        <Footer />

        <SpeedInsights /> 
      </body>
    </html>
  );
}