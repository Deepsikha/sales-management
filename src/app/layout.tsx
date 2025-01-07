import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";


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
        className={`${geistSans.variable} ${geistMono.variable} bg-[#30313A] p-8 box-border min-h-screen antialiased`}
      >
        <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-black ">
          <Sidebar />
          <main className="w-full flex flex-col h-full">
            <DashboardHeader />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
