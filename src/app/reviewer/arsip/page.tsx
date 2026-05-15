"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  X,
  MoreVertical,
  ChevronRight,
  //   Trophy,
  Users,
  Building,
  //   FileText,
} from "lucide-react";

/* ================= TYPE ================= */
type Arsip = {
  id: number;
  title: string;
  year: number;
  image: string;
  description: string;
  category: string;
  team: string;
  members: string[];
  deputi: string; //
  winner: "Juara 1" | "Juara 2" | "Juara 3" | "Favorit";
  winnerDesc: string;
};

/* ================= DATA ================= */
const dummyData: Arsip[] = [
  {
    id: 1,
    title: "Sistem Monitoring Kinerja Pegawai",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    description:
      "Sistem monitoring kinerja pegawai berbasis dashboard real-time.",
    category: "Digitalisasi Internal",
    team: "Tim IT Performance",
    deputi: "Deputi Teknologi Informasi",
    members: ["Andi", "Budi", "Citra", "Dewi"],
    winner: "Juara 1",
    winnerDesc:
      "Meningkatkan efisiensi monitoring kinerja hingga 40% dan mempercepat pengambilan keputusan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis vitae doloremque culpa fuga, velit ipsa illo reprehenderit, nostrum eos exercitationem odit dignissimos optio aperiam mollitia, enim explicabo ratione animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae iusto assumenda. Explicabo modi possimus pariatur et, eos vero quos, minima facere reprehenderit quasi non fugit quisquam perspiciatis, maiores vel!.",
  },
  {
    id: 3,
    title: "Sistem Informasi Pengadaan Barang",
    year: 2022,
    image:
      // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      "https://images.unsplash.com/photo-1584448141569-69f342da535c?q=80&w=741&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sistem monitoring kinerja pegawai berbasis dashboard real-time.",
    category: "Digitalisasi Internal",
    team: "Tim IT Performance",
    deputi: "Deputi Teknologi Informasi",
    members: ["Andi", "Budi", "Citra", "Dewi"],
    winner: "Juara 3",
    winnerDesc:
      "Meningkatkan efisiensi monitoring kinerja hingga 40% dan mempercepat pengambilan keputusan Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis vitae doloremque culpa fuga, velit ipsa illo reprehenderit, nostrum eos exercitationem odit dignissimos optio aperiam mollitia, enim explicabo ratione animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae iusto assumenda. Explicabo modi possimus pariatur et, eos vero quos, minima facere reprehenderit quasi non fugit quisquam perspiciatis, maiores vel!.",
  },
  {
    id: 2,
    title: "Digitalisasi Layanan Internal",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    description:
      "Transformasi layanan internal menjadi digital untuk efisiensi operasional.",
    category: "Pelayanan Internal",
    team: "Tim Transformasi Digital",
    deputi: "Kanwil Sumatera Barat Bagian Tengah",
    members: ["Rina sitopang", "Fajar", "Doni"],
    winner: "Juara 2",
    winnerDesc:
      "Mempercepat proses layanan internal dan meningkatkan transparansi.",
  },
];

/* ================= BADGE ================= */
const getBadge = (winner: Arsip["winner"]) => {
  switch (winner) {
    case "Juara 1":
      // return "bg-yellow-400 text-white";
      return "bg-yellow-400 text-white shadow-[0_0_10px_rgba(250,204,21,0.6)]";
    case "Juara 2":
      return "bg-gray-400 text-white";
    case "Juara 3":
      return "bg-orange-400 text-white";
    default:
      return "bg-blue-400 text-white";
  }
};

export default function ArsipPage() {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<Arsip | null>(null);
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredData = dummyData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-0 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Arsip Pemenang INSANOVA
          </h1>
          <p className="text-sm text-gray-500">
            Pemenang Inovasi BPJS Ketenagakerjaan
          </p>
        </div>

        {/* // ================= HEADER BUTTON ================= */}
        <button className="flex items-center gap-2 bg-emerald-900 hover:bg-gray active:scale-[0.98] text-white px-4 py-2 rounded-lg text-sm transition-all duration-150 cursor-pointer">
          <Plus size={16} />
          Tambah Data
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-80 bg-white">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Cari inovasi..."
          className="ml-2 w-full outline-none text-sm cursor-text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
          >
            {/* IMAGE */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* BADGE */}
              <div className="absolute top-3 left-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold shadow-sm ${getBadge(
                    item.winner,
                  )}`}
                >
                  {item.winner}
                </span>
              </div>

              {/* TITLE OVER IMAGE */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-semibold text-sm leading-snug line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-3">
              {/* TEAM */}
              <div className="text-sm">
                <p className="flex items-center gap-1 font-medium text-gray-800">
                  <Users size={14} /> {item.team}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.members.slice(0, 2).join(", ")}
                  {item.members.length > 2 &&
                    ` +${item.members.length - 2} lainnya`}
                </p>
              </div>

              {/* DEPUTI */}
              <p className="flex items-center gap-1 text-xs text-gray-500">
                <Building size={14} /> {item.deputi}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-gray-400">Tahun {item.year}</span>

                <div className="flex items-center gap-1">
                  {/* ACTION WRAPPER */}
                  <div
                    className={`flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1 transition-all duration-300 overflow-hidden ${openId === item.id ? "w-36" : "w-10"}`}
                  >
                    {/* TOGGLE BUTTON */}
                    <button
                      onClick={() =>
                        setOpenId(openId === item.id ? null : item.id)
                      }
                      className="p-2 rounded-md hover:bg-white active:scale-95 transition cursor-pointer"
                    >
                      {openId === item.id ? (
                        <ChevronRight
                          size={16}
                          className="rotate-360 transition-transform duration-300"
                        />
                      ) : (
                        <MoreVertical size={16} />
                      )}
                    </button>

                    {/* ACTIONS */}
                    {openId === item.id && (
                      <div className="flex gap-1 ml-1 transition-all duration-300">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="p-2 rounded-md hover:bg-white active:scale-95 transition cursor-pointer"
                        >
                          <Eye size={16} />
                        </button>

                        <button className="p-2 rounded-md hover:bg-white active:scale-95 transition cursor-pointer">
                          <Pencil size={16} />
                        </button>

                        <button className="p-2 rounded-md text-red-500 hover:bg-red-50 active:scale-95 transition cursor-pointer">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DETAIL */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* HERO */}
            <div className="relative h-60 w-full flex-shrink-0">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white active:scale-95 p-2 rounded-full transition cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                {/* BADGE */}
                <span className="text-xs px-3 py-1 rounded-full bg-white/90 text-gray-800 font-medium">
                  {selectedItem.winner}
                </span>

                {/* TITLE */}
                <h2 className="text-xl font-semibold mt-2 leading-snug">
                  {selectedItem.title}
                </h2>

                {/* YEAR */}
                <p className="text-xs opacity-80 mt-1">
                  Tahun {selectedItem.year}
                </p>
              </div>

              {/* ICON PREVIEW (SEJAJAR CLOSE BUTTON) */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <button
                  onClick={() => window.open(selectedItem.image, "_blank")}
                  className="bg-white/90 hover:bg-white p-2 rounded-full shadow-sm transition cursor-pointer"
                >
                  <Eye size={16} />
                </button>

                <span className="text-[10px] text-white/90">Detail Gambar</span>
              </div>
            </div>

            {/* SCROLL CONTENT */}
            <div className="overflow-y-auto bg-white">
              <div className="p-6 space-y-10">
                {/* SECTION: DESCRIPTION */}
                <section className="space-y-5">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-5 bg-emerald-500 rounded-full" />
                    <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                      Overview
                    </p>
                  </div>

                  <div className="space-y-4 pl-4 border-l border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Ringkasan Inovasi
                      </p>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Alasan Terpilih
                      </p>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                        {selectedItem.winnerDesc}
                      </p>
                    </div>
                  </div>
                </section>

                {/* SECTION: META INFO */}
                <section className="space-y-5">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-5 bg-emerald-500 rounded-full" />
                    <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                      Information
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4 border-l border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Deputi / Kanwil</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {selectedItem.deputi}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Nama Tim</p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {selectedItem.team}
                      </p>
                    </div>
                  </div>
                </section>

                {/* SECTION: MEMBERS */}
                <section className="space-y-5">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-5 bg-emerald-500 rounded-full" />
                    <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                      Team Members
                    </p>
                  </div>

                  <div className="pl-4 border-l border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.members.map((member, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 transition"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULL IMAGE PREVIEW */}

      {/* {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative inline-block"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-3 -right-3 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition cursor-pointer"
            >
              <X size={18} />
            </button>

            <Image
              src={previewImage}
              alt="preview"
              width={0}
              height={0}
              sizes="100vw"
              className="max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )} */}
    </div>
  );
}
