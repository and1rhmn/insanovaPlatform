"use client";

import { useEffect, useState } from "react";
import { Lightbulb, Shield, AlertTriangle, Wifi } from "lucide-react";

import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(() => import("@/components/ParticleCanvas"), {
  ssr: false,
});

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND PARTICLES (CLIENT ONLY) */}
      <ParticleCanvas />

      {/* BLOBS STATIC */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-200/20 blur-3xl rounded-full" />

      {/* ICONS */}
      <div className="absolute top-24 left-20 text-emerald-400">
        <Lightbulb size={28} />
      </div>

      <div className="absolute top-40 right-24 text-emerald-500">
        <Shield size={26} />
      </div>

      <div className="absolute bottom-32 left-32 text-emerald-400">
        <Wifi size={24} />
      </div>

      <div className="absolute bottom-40 right-40 text-emerald-500">
        <AlertTriangle size={26} />
      </div>

      {/* CARD */}
      <div className="relative z-10 w-[300px] h-[300px] rounded-full flex flex-col items-center justify-center text-center p-6 bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
        <h1 className="text-7xl font-extrabold text-emerald-800">404</h1>

        <p className="text-emerald-800 mt-2 text-sm font-semibold">
          Halaman tidak ditemukan
        </p>

        <p className="text-gray-500 mt-2 text-xs px-8">
          &#34;Silakan hubungi pihak terkait jika membutuhkan bantuan lebih
          lanjut&#34;
        </p>
      </div>
    </div>
  );
}
