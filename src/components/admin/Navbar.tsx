"use client";

import { Menu, User } from "lucide-react";
import { useState } from "react";

export default function Navbar({
  onToggleSidebar,
  open,
}: {
  onToggleSidebar: () => void;
  open: boolean;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className={`
    fixed top-0 z-40 h-16 px-4 md:px-6 
    flex items-center justify-between
    bg-white/70 backdrop-blur-xl 
    border-b border-gray-200/60
    transition-all duration-300

    left-0 w-full
    ${open ? "md:left-64 md:w-[calc(100%-16rem)]" : "md:left-0 md:w-full"}
  `}
    >
      {/* LEFT */}
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={onToggleSidebar}
          className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu size={20} className="text-gray-700" />
        </button>

        <div className="flex items-center gap-2 select-none">
          <div className="w-2 h-2 bg-green-500 rounded-full" />

          <span className="text-gray-800 font-semibold text-sm md:text-base">
            Insanova
          </span>

          <span className="hidden sm:inline text-green-600 font-semibold text-sm md:text-base">
            Dashboard
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-2 md:px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        >
          <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
            <User size={14} className="text-gray-700" />
          </div>

          <span className="hidden sm:inline text-sm text-gray-700 font-medium">
            Admin
          </span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-44 md:w-48 bg-white border shadow-lg rounded-xl overflow-hidden z-50">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
              Change Password
            </button>
            <div className="h-px bg-gray-100" />
            <button className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-red-500">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
