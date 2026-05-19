"use client";

import { useState } from "react";
import { Plus, Search, Trash2, MapPin } from "lucide-react";

/* ================= TYPE ================= */
type Inovasi = {
  id: number;
  namaTim: string;
  kanwil: string;
  unitKerja: string;
  kataKunci: string;
  judul: string;
  status: "belum" | "sudah";
};

type StatusFilter = "all" | "belum" | "sudah";

/* ================= DUMMY DATA ================= */
const dummyData: Inovasi[] = [
  {
    id: 1,
    namaTim: "SiJempol",
    kanwil: "#900 - Kantor Pusat",
    unitKerja: "TATA KELOLA",
    kataKunci:
      "Coverage PRT, Komunitas Digital, Hybrid Digital-Offline, Akselerasi UCJ, Akuisisi Berbasis Perilaku",
    judul:
      "Digital-to-Community Activation Engine (Activation Engine PRT Berbasis Komunitas Digital)",
    status: "belum",
  },
  {
    id: 2,
    namaTim: "RiskSquad",
    kanwil: "#900 - Kantor Pusat",
    unitKerja: "MANAJEMEN RISIKO",
    kataKunci:
      "Fintech Integration, Real-time Analysis, Credit Risk, API Connection, Efficiency",
    judul: "Automated Risk Scoring System for Credit Approval (ARSSA)",
    status: "sudah",
  },
  {
    id: 3,
    namaTim: "ChainDigi",
    kanwil: "#900 - Kantor Pusat",
    unitKerja: "ADMINISTRASI",
    kataKunci:
      "Keamanan Data, Paperless Office, Audit Trail, Ledger Management",
    judul: "Sistem Pengarsipan Digital Terpadu Berbasis Blockchain",
    status: "belum",
  },
];

export default function KelolaInovasiPage() {
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const [selectedItem, setSelectedItem] = useState<Inovasi | null>(null);
  const filteredData = dummyData.filter((item) => {
    const matchSearch =
      item.judul.toLowerCase().includes(search.toLowerCase()) ||
      item.namaTim.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "all" ? true : item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-base font-semibold text-gray-800">
            Kelola Inovasi
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manajemen dan review inovasi INSANOVA
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-[#0F3D2E]
            hover:bg-[#124734]
            active:scale-[0.98]
            text-white
            px-5
            py-3
            rounded-2xl
            text-sm
            font-medium
            transition
            shadow-sm
          "
        >
          <Plus size={16} />
          Tambah Data Inovasi
        </button>
      </div>

      {/* ================= TOOLBAR ================= */}
      <div
        className="
          bg-white
          border
          border-gray-200
          rounded-3xl
          p-3
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-3
          shadow-sm
        "
      >
        {/* FILTER */}
        <div className="flex gap-2 flex-wrap">
          {[
            { label: "Semua", value: "all" },
            {
              label: "Belum Direview",
              value: "belum",
            },
            {
              label: "Telah Direview",
              value: "sudah",
            },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setStatusFilter(btn.value as StatusFilter)}
              className={`
                px-5 py-3 text-sm rounded-2xl border transition
                ${
                  statusFilter === btn.value
                    ? "bg-white text-gray-800 border-gray-200 shadow-sm"
                    : "bg-[#F8FAFC] text-gray-500 border-transparent hover:bg-gray-100"
                }
              `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <div
          className="
            flex items-center
            bg-[#F8FAFC]
            border border-[#EEF2F6]
            rounded-2xl
            px-4
            py-3
            w-full
            md:w-80
          "
        >
          <Search size={16} className="text-gray-400" />

          <input
            type="text"
            placeholder="Cari inovasi, tim, atau kata kunci..."
            className="
              ml-2
              w-full
              bg-transparent
              outline-none
              text-sm
              placeholder:text-gray-400
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* ================= LIST ================= */}
      <div className="space-y-5">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              border
              border-gray-200
              rounded-[28px]
              p-6
              hover:shadow-sm
              transition
            "
          >
            {/* TOP */}
            <div className="flex justify-between items-start gap-4">
              {/* LEFT */}
              <div className="space-y-4 flex-1">
                {/* STATUS */}
                <div>
                  <span
                    className={`
                      inline-flex items-center gap-2
                      text-[11px]
                      font-semibold
                      px-3 py-1.5
                      rounded-xl
                      tracking-wide
                      ${
                        item.status === "belum"
                          ? "bg-red-50 text-red-600"
                          : "bg-emerald-50 text-emerald-600"
                      }
                    `}
                  >
                    <div
                      className={`
                        w-1.5 h-1.5 rounded-xl
                        ${
                          item.status === "belum"
                            ? "bg-red-500"
                            : "bg-emerald-500"
                        }
                      `}
                    />

                    {item.status === "belum"
                      ? "BELUM DIREVIEW"
                      : "TELAH DIREVIEW"}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                  {item.judul}
                </h3>

                {/* TAG */}
                <p className="text-xs text-gray-500">{item.kataKunci}</p>
              </div>

              {/* LOCATION */}
              <div
                className="
                  flex items-center gap-1.5
                  text-xs text-gray-400
                  whitespace-nowrap
                "
              >
                <MapPin size={14} />
                {item.kanwil}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-100 my-5" />

            {/* BOTTOM */}
            <div className="flex items-center justify-between">
              {/* TEAM */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-[#F1F5F9]
                    border border-gray-200
                    flex items-center justify-center
                    text-sm font-semibold text-gray-700
                  "
                >
                  {item.namaTim
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.namaTim}
                  </p>

                  <p className="text-xs text-gray-400 tracking-wide uppercase">
                    {item.unitKerja}
                  </p>
                </div>
              </div>

              {/* ACTION */}
              <div className="flex items-center gap-2">
                <button
                  className="
                    px-4 py-2
                    rounded-xl
                    bg-[#172554]
                    hover:bg-[#1E2F6D]
                    text-white
                    text-sm
                    font-medium
                    transition
                  "
                >
                  Lihat Detail
                </button>

                <button
                  onClick={() => setSelectedItem(item)}
                  className="
    px-4 py-2
    rounded-xl
    border border-gray-200
    bg-white
    hover:bg-gray-50
    text-sm
    font-medium
    text-gray-700
    transition
  "
                >
                  Penilaian
                </button>

                <button
                  className="
                    px-4 py-2
                    rounded-xl
                    border border-red-200
                    bg-white
                    hover:bg-red-50
                    text-red-500
                    text-sm
                    font-medium
                    transition
                    flex items-center gap-2
                  "
                >
                  <Trash2 size={15} />
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedItem && (
        <div
          className="
      fixed inset-0 z-50
      bg-black/40
      backdrop-blur-[2px]
      flex items-center justify-center
      p-6
    "
          onClick={() => setSelectedItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
        w-full
        max-w-5xl
        max-h-[92vh]
        overflow-y-auto
        bg-white
        rounded-2xl
        border border-gray-200
        shadow-2xl
      "
          >
            {/* HEADER */}
            <div
              className="
          flex items-center justify-between
          px-8 py-6
          border-b border-gray-200
        "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
              w-6 h-6
              rounded-md
              bg-[#0F3D2E]
              rotate-45
            "
                />

                <h2 className="text-base font-semibold text-gray-900">
                  Detail Inovasi
                </h2>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="
            text-gray-700
            hover:text-black
            transition
            text-sm
            leading-none
          "
              >
                ×
              </button>
            </div>

            {/* BODY */}
            <div className="px-8 py-8">
              {/* TITLE */}
              <h1
                className="
            text-sm
            font-bold
            leading-tight
            text-gray-900
          "
              >
                RESUME INSANOVA: {selectedItem.judul}
              </h1>

              {/* META */}
              <div
                className="
            grid grid-cols-2
            gap-10
            mt-8
            pt-8
            border-t border-gray-200
          "
              >
                <div>
                  <p
                    className="
                text-sm
                tracking-[0.12em]
                uppercase
                text-gray-500
                mb-2
              "
                  >
                    Team Name
                  </p>

                  <h3 className="text-base font-semibold text-gray-900">
                    {selectedItem.namaTim}
                  </h3>
                </div>

                <div>
                  <p
                    className="
                text-sm
                tracking-[0.12em]
                uppercase
                text-gray-500
                mb-2
              "
                  >
                    Region Code
                  </p>

                  <h3 className="text-base font-semibold text-gray-900">
                    900 - Kantor Pusat
                  </h3>
                </div>
              </div>

              {/* KATA KUNCI */}
              <div
                className="
            mt-8
            pt-8
            border-t border-gray-200
          "
              >
                <p
                  className="
              text-sm
              font-semibold
              tracking-[0.12em]
              uppercase
              text-gray-800
              mb-5
            "
                >
                  Kata Kunci
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Activation", "Community", "Digital", "Engagement"].map(
                    (tag) => (
                      <div
                        key={tag}
                        className="
                  px-5 py-2
                  rounded-xl
                  bg-[#BFE4D2]
                  text-gray-900
                  text-sm
                  border border-[#A7D3BE]
                "
                      >
                        {tag}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* TEAM DETAIL */}
              <div
                className="
            mt-8
            border border-gray-200
            rounded-2xl
            p-7
            bg-[#FCFCFC]
          "
              >
                <h3 className="text-base font-semibold text-gray-900 mb-7">
                  Team Details
                </h3>

                <div className="grid grid-cols-2 gap-10">
                  {/* KETUA */}
                  <div>
                    <p
                      className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                  mb-4
                "
                    >
                      Ketua
                    </p>

                    <div className="flex items-center gap-4">
                      <div
                        className="
                    w-11 h-11
                    rounded-xl
                    bg-[#062E23]
                    text-white
                    flex items-center justify-center
                    font-bold
                    text-base
                  "
                      >
                        AW
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-gray-900">
                          Anna Wijayanti
                        </h4>

                        <p className="text-gray-600 text-sm">
                          Manager Tata Kelola (253491391)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ANGGOTA */}
                  <div>
                    <p
                      className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-500
                  mb-4
                "
                    >
                      Anggota
                    </p>

                    <div className="flex items-center gap-4">
                      <div
                        className="
                    w-11 h-11
                    rounded-xl
                    bg-[#67E08A]
                    text-[#065F46]
                    flex items-center justify-center
                    font-bold
                    text-base
                  "
                      >
                        NA
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-gray-900">
                          Ni Nyoman Ayu C.K.Y.D
                        </h4>

                        <p className="text-gray-600 text-sm">
                          Staff Ahli (274161691)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION */}
              <div className="mt-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 bg-[#062E23] rounded-xl h-10 mt-1" />

                  <h3 className="text-base font-semibold text-gray-900">
                    Latar Belakang
                  </h3>
                </div>

                <p className="text-gray-700 leading-7  text-sm">
                  Era digital menuntut transformasi dalam cara komunitas
                  berinteraksi dan berkolaborasi. Saat ini, masih terdapat gap
                  yang signifikan antara aktivasi program secara digital dengan
                  implementasi nyata di lapangan (offline). Komunitas seringkali
                  memiliki antusiasme tinggi di media sosial namun sulit untuk
                  dikonversi menjadi pergerakan yang terstruktur. INSANOVA hadir
                  untuk menjembatani kesenjangan ini melalui pendekatan
                  Activation Engine yang mengintegrasikan data digital dengan
                  mobilisasi komunitas fisik secara real-time.
                </p>
              </div>

              {/* SECTION */}
              <div className="mt-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-1 bg-[#062E23] rounded-xl h-10 mt-1" />

                  <h3 className="text-base font-semibold text-gray-900">
                    Solusi
                  </h3>
                </div>

                <p className="text-gray-700 leading-7  text-sm">
                  Mengembangkan platform "Digital-to-Community Activation
                  Engine" yang berfungsi sebagai pusat komando koordinasi
                  program. Platform ini menggunakan algoritma analisis sentimen
                  untuk memetakan kebutuhan komunitas, kemudian secara otomatis
                  mendistribusikan tugas kepada koordinator wilayah di Kantor
                  Pusat.
                </p>
                {/* ================= COST VS BENEFIT ================= */}
                <div className="mt-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-1 bg-[#062E23] rounded-xl h-10 mt-1" />

                    <h3 className="text-base font-semibold text-gray-900">
                      Cost vs Benefit
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* COST */}
                    <div
                      className="
        rounded-2xl
        border border-red-100
        bg-red-50
        p-5
      "
                    >
                      <p
                        className="
          text-[11px]
          font-bold
          tracking-wide
          uppercase
          text-red-600
          mb-2
        "
                      >
                        Investasi (Cost)
                      </p>

                      <p className="text-sm text-gray-700 leading-7">
                        Pengembangan infrastruktur cloud, lisensi API pemetaan,
                        dan biaya operasional tim inti teknis selama 6 bulan
                        pertama.
                      </p>
                    </div>

                    {/* BENEFIT */}
                    <div
                      className="
        rounded-2xl
        border border-emerald-100
        bg-emerald-50
        p-5
      "
                    >
                      <p
                        className="
          text-[11px]
          font-bold
          tracking-wide
          uppercase
          text-emerald-600
          mb-2
        "
                      >
                        Manfaat (Benefit)
                      </p>

                      <p className="text-sm text-gray-700 leading-7">
                        Efisiensi biaya aktivasi lapangan hingga 40%,
                        peningkatan brand awareness sebesar 65%, dan basis data
                        user terverifikasi mencapai 100.000+ anggota dalam satu
                        tahun.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= DAMPAK INOVASI ================= */}
                <div className="mt-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-1 bg-[#062E23] rounded-xl h-10 mt-1" />

                    <h3 className="text-base font-semibold text-gray-900">
                      Dampak Inovasi
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-7 text-sm">
                    Inovasi ini memberikan dampak transformasional pada cara
                    organisasi mengelola PRT (Public Relations Tactics). Dengan
                    adanya mesin aktivasi ini, respon terhadap isu publik
                    menjadi 3x lebih cepat. Selain itu, tercipta ekosistem
                    digital yang sehat di mana komunitas merasa lebih dihargai
                    dan dilibatkan dalam setiap proses pengambilan keputusan
                    strategis di Kantor Pusat.
                  </p>
                </div>
              </div>

              {/* ================= PENILAIAN ================= */}
              <div className="mt-10 pt-8 border-t border-dashed border-gray-300">
                {/* TITLE */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-base font-semibold text-gray-900">
                    Form Penilaian Inovasi
                  </h3>
                </div>

                {/* ITEM */}
                {[
                  {
                    title: "1. Penilaian Problem Statement",
                    options: [
                      "Problem Kurang Jelas",
                      "Problem Cukup Jelas",
                      "Problem Sangat Jelas",
                    ],
                  },
                  {
                    title: "2. Kualitas Solusi",
                    options: [
                      "Solusi kurang menjawab problem",
                      "Solusi dapat menjawab problem",
                      "Solusi tepat menjawab problem",
                    ],
                  },
                  {
                    title: "3. Kesesuaian dengan Regulasi",
                    options: [
                      "Tidak sesuai regulasi",
                      "Sebagian sesuai regulasi",
                      "Seluruh inovasi sesuai regulasi",
                    ],
                  },
                  {
                    title: "4. Dampak Inovasi",
                    options: [
                      "Dampak 1 aspek",
                      "Dampak 2 aspek",
                      "Dampak 3 aspek",
                    ],
                  },
                  {
                    title: "5. Efisiensi (Cost vs Benefit)",
                    options: [
                      "Cost lebih besar",
                      "Cost dan benefit seimbang",
                      "Benefit lebih besar",
                    ],
                  },
                  {
                    title: "6. Penilaian Risiko",
                    options: [
                      "Tidak ada mitigasi risiko",
                      "Mitigasi belum lengkap",
                      "Mitigasi lengkap",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="mb-8">
                    <p className="text-sm font-semibold text-gray-900 mb-4">
                      {section.title}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {section.options.map((option, idx) => (
                        <label
                          key={idx}
                          className="
              border border-gray-200
              rounded-2xl
              p-4
              cursor-pointer
              hover:border-[#0F3D2E]
              hover:bg-[#F7FBF9]
              transition
              group
            "
                        >
                          <input
                            type="radio"
                            name={`section-${index}`}
                            className="hidden peer"
                          />

                          <div className="space-y-1">
                            <p
                              className="
                  text-[11px]
                  uppercase
                  tracking-wide
                  text-gray-400
                  font-semibold
                "
                            >
                              Nilai {idx + 1}
                            </p>

                            <p
                              className="
                  text-sm
                  text-gray-700
                  font-medium
                  leading-6
                "
                            >
                              {option}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {/* CATATAN */}
                <div className="mt-10">
                  <label className="text-sm font-semibold text-gray-900 block mb-3">
                    Catatan Tambahan
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tuliskan catatan atau umpan balik tambahan..."
                    className="
        w-full
        rounded-2xl
        border border-gray-200
        bg-[#FCFCFC]
        px-4 py-4
        text-sm
        outline-none
        focus:ring-2
        focus:ring-[#0F3D2E]/10
        focus:border-[#0F3D2E]
        transition
        resize-none
      "
                  />
                </div>

                {/* BUTTON */}
                <div className="flex justify-end mt-8">
                  <button
                    className="
        px-6 py-3
        rounded-2xl
        bg-[#0F3D2E]
        hover:bg-[#124734]
        text-white
        text-sm
        font-medium
        transition
        shadow-sm
      "
                  >
                    Simpan Penilaian
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
