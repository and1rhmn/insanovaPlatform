"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Trophy } from "lucide-react";

export default function AdminDashboard() {
  //   const data = [
  //     { name: "Jabar", value: 40 },
  //     { name: "DKI", value: 30 },
  //     { name: "Jatim", value: 50 },
  //     { name: "Jateng", value: 35 },
  //   ];

  const timeline = [
    {
      month: "Maret",
      title: "Blasting & Campaign INSANOVA",
      desc: "Surat edaran dan petunjuk teknis program disebarluaskan ke seluruh unit kerja.",
      highlight: false,
    },
    {
      month: "April",
      title: "Kickoff & Submission Inovasi",
      desc: "Kickoff INSANOVA, sosialisasi program, pembentukan tim, clustering ide, dan submission inovasi.",
      highlight: false,
    },
    {
      month: "Mei",
      title: "Penjurian & Pra Inkubasi",
      desc: "Seleksi oleh Kanwil dan REN menghasilkan 40 tim, dilanjutkan mentoring pra inkubasi.",
      highlight: false,
    },
    {
      month: "Juni",
      title: "Inkubasi & Finalis",
      desc: "Penjurian kedua menghasilkan 14 besar menuju seleksi final.",
      highlight: false,
    },
    {
      month: "Juli",
      title: "Demo Day & Awarding",
      desc: "Final presentation 6 besar innovator dan awarding INSANOVA.",
      highlight: true,
    },
  ];

  return (
    <div className="space-y-4 pb-20 md:pb-0">
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Dashboard INSANOVA
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Monitoring inovasi nasional secara real-time
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
          ● Live System
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-sm bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-5 space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Total Inovasi</p>
              <Lightbulb className="text-emerald-600" size={18} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900">320</h2>

            <p className="text-xs text-emerald-600 font-medium">
              ▲ Akumulasi seluruh inovasi
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-5 space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Kontribusi Wilayah</p>
              <Users className="text-sky-600" size={18} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900">120</h2>

            <p className="text-xs text-sky-600 font-medium">
              ▲ Unit aktif pengusul
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-5 space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Total Pemenang</p>
              <Trophy className="text-amber-600" size={18} />
            </div>

            <h2 className="text-3xl font-bold text-gray-900">15</h2>

            <p className="text-xs text-amber-600 font-medium">
              ▲ Seluruh periode program
            </p>
          </CardContent>
        </Card>
      </div>

      {/* TIMELINE */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-5">
          {/* HEADER */}
          <div className="mb-5">
            <h2 className="text-base font-semibold text-gray-900">
              Timeline Pelaksanaan
            </h2>
            <p className="text-xs text-gray-500">
              Reminder tahapan program INSANOVA
            </p>
          </div>

          {/* GRID TIMELINE (NO SCROLL) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`
            relative rounded-xl border p-4 space-y-2 transition
            ${
              item.highlight
                ? "border-emerald-300 bg-emerald-50"
                : "border-gray-200 bg-white"
            }
          `}
              >
                {/* NUMBER BADGE */}
                <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-white border flex items-center justify-center text-xs font-semibold text-gray-600 shadow-sm">
                  {index + 1}
                </div>

                {/* MONTH */}
                <div className="text-[11px] font-medium text-gray-500">
                  {item.month}
                </div>

                {/* TITLE */}
                <div className="text-sm font-semibold text-gray-900 leading-snug">
                  {item.title}
                </div>

                {/* DESC */}
                <div className="text-[11px] text-gray-500 leading-relaxed">
                  {item.desc}
                </div>

                {/* STATUS */}
                <span
                  className={`
              text-[10px] px-2 py-0.5 rounded-full font-medium inline-block
              ${
                item.highlight
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-500"
              }
            `}
                >
                  {item.highlight ? "Current Phase" : "Planned"}
                </span>

                {/* CONNECTOR DOT (visual feel timeline) */}
                {index !== timeline.length - 1 && (
                  <div className="hidden md:block absolute right-[-10px] top-1/2 w-3 h-3 rounded-full bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
