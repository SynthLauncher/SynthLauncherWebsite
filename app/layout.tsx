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