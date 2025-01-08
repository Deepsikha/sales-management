import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import ClientRootLayout from "./ClientRootLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suntapped Energy",
  description: "Dashboard Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#30313A] p-0 md:p-8 box-border min-h-screen antialiased`}
      >
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
