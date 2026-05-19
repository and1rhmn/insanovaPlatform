"use client";

import Image from "next/image";
import { Menu, X, ChevronDown, Lightbulb } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      // Desktop
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDesktopDropdownOpen(false);
      }

      // Mobile
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(target)
      ) {
        setMobileDropdownOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#0F2F2A]/80 backdrop-blur-lg border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="INSANOVA"
          width={90}
          height={40}
          className="object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-sm text-white/80 [&_*]:cursor-pointer">
          <Link href="/" className="px-2 py-1 hover:text-green-300 transition">
            Beranda
          </Link>

          {/* Dropdown Desktop */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              className="flex items-center gap-1 px-2 py-1 hover:text-green-300 transition select-none"
            >
              Tentang Insanova
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  desktopDropdownOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {desktopDropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white text-gray-700 rounded-lg shadow-lg py-2">
                <Link
                  href="#about"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Apa itu Insanova
                </Link>

                <Link
                  href="#arsip"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Arsip Juara
                </Link>

                <Link
                  href="#mekanisme"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Program & Mekanisme
                </Link>
              </div>
            )}
          </div>

          <a
            // href="https://docs.google.com/forms/d/e/1FAIpQLSenpbvyY_XZAwZ4-IaBm9o3VxyjQI16JPDli8wMC-rzitdhNg/viewform"
            href="https://drive.google.com/file/d/1YHlDn5vyNF8yeuqfwaT9QJDTT0A5wTXu/view?usp=drive_link"
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition font-medium backdrop-blur-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lightbulb size={16} className="text-yellow-300" />
            Ajukan Ide
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white cursor-pointer relative w-6 h-6"
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileDropdownOpen(false);
          }}
        >
          {/* Menu Icon */}
          <Menu
            size={24}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isOpen
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />

          {/* X Icon */}
          <X
            size={24}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>

        {/* <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileDropdownOpen(false);
          }}
        >
          {isOpen ? (
            <X
              size={24}
              className="transition-transform duration-300 rotate-90"
            />
          ) : (
            <Menu size={24} className="transition-transform duration-300" />
          )}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col items-center text-center gap-4 text-sm text-white/80 [&_*]:cursor-pointer">
          <a href="#" className="hover:text-green-300 ">
            Beranda
          </a>

          {/* Dropdown Mobile */}
          <div ref={mobileDropdownRef} className="flex flex-col items-center">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-center gap-1 w-full max-w-[200px] hover:text-green-300 transition select-none "
            >
              Tentang Insanova
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  mobileDropdownOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>

            {mobileDropdownOpen && (
              <div className="mt-2 flex flex-col items-center gap-2 text-white/70">
                <Link
                  href="#about"
                  className="hover:text-green-300 transition0"
                >
                  Apa itu Insanova
                </Link>

                <Link
                  href="#arsip"
                  className="hover:text-green-300 transition0"
                >
                  Arsip Juara
                </Link>

                <Link
                  href="#mekanisme"
                  className="hover:text-green-300 transition0"
                >
                  Program & Mekanisme
                </Link>
              </div>
            )}
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSenpbvyY_XZAwZ4-IaBm9o3VxyjQI16JPDli8wMC-rzitdhNg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition font-medium backdrop-blur-sm w-full max-w-[180px]"
          >
            <Lightbulb size={16} className="text-yellow-300" />
            Ajukan Ide
          </a>
        </div>
      )}
    </nav>
  );
}
