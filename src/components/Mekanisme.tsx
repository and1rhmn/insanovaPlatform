"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

import { Rocket, ClipboardList } from "lucide-react";

export default function Mekanisme() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  // const waveVariant = {
  //   hidden: (dir) => ({
  //     opacity: 0,
  //     x: dir === "left" ? -80 : 80,
  //   }),
  //   show: {
  //     opacity: 1,
  //     x: 0,
  //   },
  // };

  const waveVariant: Variants = {
    hidden: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "left" ? -80 : 80,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };
  return (
    <section
      className="relative bg-white py-20 px-6 overflow-hidden"
      id="mekanisme"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* MAIN GLOW */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-emerald-300/20 rounded-full blur-3xl"
        />

        {/* RIGHT GLOW */}
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-[-140px] right-[-140px] w-[550px] h-[550px] bg-emerald-200/10 rounded-full blur-3xl"
        />

        {/* LEFT GLOW */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute bottom-[-140px] left-[-140px] w-[600px] h-[600px] bg-emerald-200/10 rounded-full blur-3xl"
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#047857_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* ================= LEFT WAVE (ANIMATED) ================= */}
        <motion.div
          custom="left"
          variants={waveVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute left-[-140px] top-0 h-full w-[320px] pointer-events-none"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 200 800"
            preserveAspectRatio="none"
          >
            <path
              fill="#064e3b"
              fillOpacity="0.18"
              d="M0,0 C120,100 80,200 140,300 C200,400 60,500 120,600 C180,700 100,800 0,800 Z"
            />
          </svg>
        </motion.div>

        {/* ================= RIGHT WAVE (ANIMATED) ================= */}
        <motion.div
          custom="right"
          variants={waveVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute right-[-140px] top-0 h-full w-[320px] pointer-events-none"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 200 800"
            preserveAspectRatio="none"
          >
            <path
              fill="#064e3b"
              fillOpacity="0.18"
              d="M200,0 C80,100 120,200 60,300 C0,400 140,500 80,600 C20,700 100,800 200,800 Z"
            />
          </svg>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm font-semibold text-emerald-600 tracking-widest uppercase mb-2">
            INSANOVA SYSTEM
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Program & Mekanisme
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-8 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-transparent" />

            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
              <Rocket className="w-5 h-5 text-emerald-600" />
              Tujuan Program
            </h3>

            <div className="space-y-6 relative z-10">
              {[
                {
                  title: "Mendorong Kreativitas",
                  desc: "Membangkitkan semangat insan BPJS Ketenagakerjaan untuk menghasilkan ide transformatif.",
                },
                {
                  title: "Meningkatkan Layanan",
                  desc: "Menyederhanakan proses dan memperluas manfaat perlindungan jaminan sosial.",
                },
                {
                  title: "Arsip Pengetahuan",
                  desc: "Mendokumentasikan inovasi agar dapat direplikasi dan dikembangkan.",
                },
              ].map((itemData, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ x: 6 }}
                  className="relative pl-4 border-l border-emerald-400/40"
                >
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-emerald-500 rounded-full" />

                  <p className="font-semibold text-gray-900">
                    {itemData.title}
                  </p>
                  <p className="text-sm mt-1 text-gray-600">{itemData.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-8 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-50/15 to-transparent" />

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
              <ClipboardList className="w-5 h-5 text-emerald-600" />
              Mekanisme Pengajuan Inovasi
            </h3>

            {/* STEPS */}
            <div className="space-y-6 relative z-10">
              {[
                {
                  title: "Kriteria Ide",
                  desc: "Ide harus relevan, berdampak, dan dapat diimplementasikan.",
                },
                {
                  title: "Proses Review",
                  desc: "Evaluasi dilakukan oleh tim inovasi berdasarkan standar penilaian.",
                },
                {
                  title: "Validasi Data",
                  desc: "Pastikan data dan informasi pengusul benar dan valid.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ x: 6 }}
                  className="relative pl-4 border-l border-emerald-400/40"
                >
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-emerald-500 rounded-full" />

                  <p className="font-semibold text-gray-900">{step.title}</p>
                  <p className="text-sm mt-1 text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 relative z-10">
              <a
                // href="https://docs.google.com/forms/d/e/1FAIpQLSenpbvyY_XZAwZ4-IaBm9o3VxyjQI16JPDli8wMC-rzitdhNg/viewform"
                href="https://drive.google.com/file/d/1YHlDn5vyNF8yeuqfwaT9QJDTT0A5wTXu/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="
      inline-block
      w-full md:w-auto
      px-6 py-3
      rounded-xl
      font-semibold
      text-white
      bg-gradient-to-r from-emerald-600 to-emerald-500
      hover:from-emerald-500 hover:to-emerald-400
      shadow-md hover:shadow-lg
      transition-all duration-300
      active:scale-95
      text-center
    "
              >
                Mulai Ajukan Ide
              </a>
            </div>

            {/* NOTE (SETELAH CTA) */}
            <div className="mt-6 pt-5 border-t border-emerald-100 relative z-10">
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-gray-700">Note:</span> Data
                inovasi bersifat rahasia dan digunakan untuk evaluasi internal.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
