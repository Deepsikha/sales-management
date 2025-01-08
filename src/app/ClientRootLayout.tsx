"use client";
import { useState, useCallback, ReactNode } from "react";

import DashboardHeader from "@/components/DashboardHeader";

import Sidebar from "../components/Sidebar";

type ClientRootLayoutProps = {
  children: ReactNode;
};

export default function ClientRootLayout({ children }: ClientRootLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      className="flex h-screen md:h-[calc(100vh-64px)] overflow-hidden bg-black"
      onClick={isOpen ? closeSidebar : () => {}}
    >
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main className="w-full flex flex-col h-full">
        <DashboardHeader toggleSidebar={toggleSidebar} isOpen={isOpen} />
        {children}
      </main>
    </div>
  );
}
