"use client";

import { useState } from "react";
import { Plus, Search, Pencil, Trash2, Eye } from "lucide-react";

/* ================= TYPE ================= */
type Inovasi = {
  id: number;
  namaTim: string;
  kanwil: string;
  unitKerja: string;
  ketua: string;
  anggota1: string;
  anggota2: string;
  kataKunci: string;
  judul: string;
  latarBelakang: string;
  solusi: string;
  costBenefit: string;
  dampak: string;
  risiko: string;
  status: "belum" | "sudah";
};

type StatusFilter = "all" | "belum" | "sudah";

/* ================= DUMMY DATA ================= */
const dummyData: Inovasi[] = [
  {
    id: 1,
    namaTim: "SiJempol",
    kanwil: "-", // ga ada di data, bisa lo isi nanti
    unitKerja: "Tata Kelola",
    ketua: "Anna Wijayanti - Manager Tata Kelola (253491391)",
    anggota1: "Ni Nyoman Ayu C.K.Y.D (274161691)",
    anggota2: "-",
    kataKunci:
      "Coverage PRT, Komunitas Digital, Hybrid Digital-Offline, Akselerasi UCJ, Akuisisi Berbasis Perilaku",
    judul:
      "Digital-to-Community Activation Engine (Activation Engine PRT Berbasis Komunitas Digital)",
    latarBelakang:
      "Rendahnya coverage Pekerja Rumah Tangga (PRT). Pendekatan lama masih berbasis wilayah (offline), padahal majikan saat ini didominasi ibu muda yang aktif di komunitas digital. Perlu kanal baru untuk menjembatani gap hubungan kerja domestik. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et accusamus voluptates esse iste repellat incidunt ab itaque tenetur quo iure dolorum, praesentium facere quae magnam laborum, sit quia? Laudantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit architecto voluptas, animi assumenda totam odio possimus sunt eius dolores eaque facilis sit repellendus unde. Et dolorum quae laboriosam sunt aperiam. ",
    solusi:
      "Mengubah akuisisi dari berbasis wilayah menjadi berbasis perilaku/komunitas digital melalui konten edukasi di media sosial yang terintegrasi dengan link pendaftaran mandiri atau bantuan RT/RW (Hybrid Digital-Offline).",
    costBenefit:
      "Cost: ± Rp 950.000. Benefit: 10 peserta → Rp 2.016.000/tahun. Kanal akuisisi baru & scalable nasional. Awareness jangka panjang meningkat.",
    dampak:
      "Terbentuknya kanal akuisisi baru, peningkatan awareness majikan terhadap perlindungan PRT, peningkatan efektivitas peran RT/RW, dan akselerasi Universal Coverage Jaminan Sosial Ketenagakerjaan (UCJ).",
    risiko:
      "Overlapping program → mitigasi dengan integrasi peran. Konten tidak menarik → gunakan influencer & storytelling. Tidak konversi → simplifikasi proses + CTA kuat. Persepsi beban majikan → framing manfaat. Skalabilitas → standarisasi & monitoring data.",
    status: "belum",
  },
];

export default function KelolaInovasiPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [selectedItem, setSelectedItem] = useState<Inovasi | null>(null);
  const handleEdit = (item: Inovasi) => {
    console.log("Edit:", item);
  };

  const handleDelete = (id: number) => {
    console.log("Delete:", id);
  };

  const filteredData = dummyData.filter((item) => {
    const matchSearch = item.judul.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "all" ? true : item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <div className="p-0 space-y-6">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Kelola Inovasi</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manajemen dan review inovasi INSANOVA
        </p>

        <div className="mt-4">
          <button className="flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 active:scale-[0.98] text-white px-4 py-2 rounded-lg text-sm transition">
            <Plus size={16} />
            Tambah Data Inovasi
          </button>
        </div>
      </div>

      {/* ================= TOOLBAR ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* FILTER */}
        <div className="flex gap-2 flex-wrap">
          {[
            { label: "Semua", value: "all" },
            { label: "Belum Direview", value: "belum" },
            { label: "Telah Direview", value: "sudah" },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setStatusFilter(btn.value as StatusFilter)}
              className={`px-3 py-1.5 text-xs rounded-lg border transition ${
                statusFilter === btn.value
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-80 bg-white">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Cari inovasi..."
            className="ml-2 w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* ================= LIST ================= */}
      <div className="space-y-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex justify-between items-start">
              {/* LEFT */}
              <div className="space-y-3">
                {/* STATUS (FIXED) */}
                <div>
                  <span
                    className={`inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded ${
                      item.status === "belum"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.status === "belum"
                      ? "Belum Direview"
                      : "Telah Direview"}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-900 leading-snug hover:text-emerald-600 transition">
                  {item.judul}
                </h3>

                {/* TAG */}
                <p className="text-xs text-gray-500">{item.kataKunci}</p>

                {/* TEAM */}
                <p className="text-sm font-medium text-gray-700">
                  {item.namaTim}
                </p>

                {/* META */}
                <p className="text-xs text-gray-400">
                  {item.kanwil} • {item.unitKerja}
                </p>
              </div>

              {/* ACTION */}
              <div
                className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedItem(item)}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  <Eye size={16} />
                </button>

                <button className="p-2 rounded-md hover:bg-gray-100">
                  <Pencil size={16} />
                </button>

                <button className="p-2 rounded-md text-red-500 hover:bg-red-50">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-5xl p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-xl"
          >
            {/* HEADER */}
            <div className="flex items-start justify-between border-b pb-4">
              <div>
                <h1 className="text-2xl font-bold tracking-wide">
                  RESUME INSANOVA
                </h1>
                <h2 className="text-lg font-semibold mt-1">
                  {selectedItem.judul}
                </h2>
                <p className="text-sm text-gray-500">{selectedItem.namaTim}</p>
              </div>

              {/* ACTION BUTTON */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(selectedItem)}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(selectedItem.id)}
                  className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Hapus
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <b>Ketua:</b>
                <p className="text-gray-700">{selectedItem.ketua}</p>
              </div>

              <div>
                <b>Anggota:</b>
                <p className="text-gray-700">
                  {selectedItem.anggota1}, {selectedItem.anggota2}
                </p>
              </div>

              <div className="md:col-span-2">
                <b>Latar Belakang</b>
                <p className="text-gray-600 mt-1">
                  {selectedItem.latarBelakang}
                </p>
              </div>

              <div className="md:col-span-2">
                <b>Solusi</b>
                <p className="text-gray-600 mt-1">{selectedItem.solusi}</p>
              </div>

              <div className="md:col-span-2">
                <b>Cost vs Benefit</b>
                <p className="text-gray-600 mt-1">{selectedItem.costBenefit}</p>
              </div>

              <div className="md:col-span-2">
                <b>Dampak Inovasi</b>
                <p className="text-gray-600 mt-1">{selectedItem.dampak}</p>
              </div>

              <div className="md:col-span-2">
                <b>Aspek Risiko</b>
                <p className="text-gray-600 mt-1">{selectedItem.risiko}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
