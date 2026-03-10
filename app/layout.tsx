import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "MEGA Corporate Website",
  description: "Integrated digital green energy solutions for grid, industry, transport, and charging infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceMono.variable}>
        {children}
      </body>
    </html>
  );
}
