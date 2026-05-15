"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";

import {
  LayoutDashboard,
  Lightbulb,
  BarChart3,
  Settings,
  Archive,
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Inovasi", path: "/admin/inovasi", icon: Lightbulb },
  { name: "Kelola Data", path: "/admin/data", icon: BarChart3 },
  { name: "Arsip Pemenang", path: "/admin/arsip", icon: Archive },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar open={open} menu={menu} />

      {/* NAVBAR */}
      <Navbar open={open} onToggleSidebar={() => setOpen(!open)} />

      {/* MAIN CONTENT */}
      <main
        className={`
    pt-20 px-4 md:px-6 pb-24 md:pb-6
    transition-all duration-300
    ${open ? "md:pl-[272px]" : "md:pl-6"}
  `}
      >
        {/* WRAPPER  */}
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 min-h-[calc(100vh-120px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
