import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

// layout.tsx

export const metadata = {
  openGraph: {
    images: [
      {
        url: 'https://www.birdagency.io/logo/logo.webp', // Correct placement
        width: 1200,
        height: 630,
        alt: 'globstand',
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
