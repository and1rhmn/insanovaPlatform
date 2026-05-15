import Image from "next/image";
import ContributionBarChart from "@/components/ContributionBarChart";

export default function About() {
  return (
    <section className="px-6 py-20 bg-gray-100" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-2">
            INSANOVA PLATFORM
          </p>

          <h3 className="text-4xl font-bold text-gray-900 leading-tight">
            Membangun Budaya Inovasi Berkelanjutan
          </h3>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT - IMAGE CARD (MATCH HEIGHT) */}
          <div className="relative h-[520px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Innovation Team"
              fill
              className="object-cover rounded-3xl shadow-sm"
            />
          </div>

          {/* RIGHT - SCROLLABLE CARD */}
          <div className="h-[520px] relative bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-3xl shadow-sm p-8 overflow-y-auto">
            {/* Title */}
            <h4 className="text-2xl font-semibold text-gray-900 mb-8">
              Apa itu INSANOVA?
            </h4>

            {/* Section 1 */}
            <div className="mb-8 border-l-2 border-blue-500 pl-4">
              <h5 className="text-xs font-semibold tracking-widest text-blue-600 mb-2">
                PERSPEKTIF INOVASI
              </h5>
              <p className="text-gray-700 leading-relaxed">
                Inovasi bukan sekadar penciptaan hal baru, tetapi pola pikir
                dalam membangun pendekatan yang lebih adaptif, efektif, dan
                efisien untuk meningkatkan kinerja organisasi secara
                berkelanjutan.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8 border-l-2 border-emerald-500 pl-4">
              <h5 className="text-xs font-semibold tracking-widest text-emerald-600 mb-2">
                KERANGKA KONSEP
              </h5>

              <p className="text-gray-700 leading-relaxed">
                Berdasarkan konsep{" "}
                <span className="font-medium text-gray-900">
                  CIAS Corporate Innovation Model
                </span>{" "}
                dan pendekatan{" "}
                <span className="font-medium text-gray-900">
                  CIMO (Corporate Innovation Model)
                </span>
                , inovasi dipandang sebagai sistem dinamis yang memungkinkan
                organisasi untuk terus belajar, beradaptasi, dan menciptakan
                nilai secara berkelanjutan. Model CIMO menekankan tiga kemampuan
                utama organisasi, yaitu{" "}
                <span className="font-medium text-gray-900">sensing</span>{" "}
                (mengenali peluang dan perubahan),{" "}
                <span className="font-medium text-gray-900">seizing</span>{" "}
                (menindaklanjuti peluang melalui proyek atau eksperimen), serta{" "}
                <span className="font-medium text-gray-900">reconfiguring</span>{" "}
                (menata ulang struktur, budaya, dan sistem kerja agar inovasi
                dapat berjalan secara konsisten dan berkelanjutan).
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-8 border-l-2 border-purple-500 pl-4">
              <h5 className="text-xs font-semibold tracking-widest text-purple-600 mb-2">
                PERAN ORGANISASI
              </h5>
              <p className="text-gray-700 leading-relaxed">
                BPJS Ketenagakerjaan melalui Deputi Bidang Perencanaan Strategis
                dan Transformasi mengelola program inovasi sebagai bagian dari
                transformasi berkelanjutan organisasi.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8 border-l-2 border-amber-500 pl-4">
              <h5 className="text-xs font-semibold tracking-widest text-amber-600 mb-2">
                INSANOVA
              </h5>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">
                  INSANOVA (Insan Berinovasi BPJS Ketenagakerjaan)
                </span>{" "}
                adalah gerakan inovasi internal untuk menumbuhkan budaya ide,
                kolaborasi, dan perbaikan berkelanjutan.
              </p>
            </div>

            {/* Section 5 */}
            <div className="border-l-2 border-gray-400 pl-4">
              <h5 className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
                DAMPAK & TUJUAN
              </h5>
              <p className="text-gray-700 leading-relaxed">
                INSANOVA menjadikan inovasi sebagai budaya kerja, bukan sekadar
                program, untuk mendukung organisasi yang lebih adaptif dan
                bernilai bagi stakeholder.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t pt-12">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
            {/* LEFT */}
            <div>
              <p className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-3">
                Building Innovation Through Time
              </p>

              <h3 className="text-3xl font-bold text-gray-900 leading-snug">
                A Chamber for Innovators
              </h3>

              <p className="mt-4 text-gray-600 max-w-md">
                Sebuah ruang perjalanan inovasi di lingkungan BPJS
                Ketenagakerjaan yang mencerminkan transformasi dan peningkatan
                berkelanjutan dari tahun ke tahun.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="h-[320px] md:h-[340px] relative">
              <Image
                src="/images/issa-award-2024.jpg"
                alt="issa-award-2024"
                fill
                className="object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>

          {/* TIMELINE SECTION */}
          <div className="relative">
            {/* WRAPPER */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="min-w-max md:min-w-0 md:w-full px-2">
                {/* LINE */}
                <div className="relative flex items-center justify-between gap-6 md:gap-4 py-6">
                  {/* LINE BG */}
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-gray-200"></div>

                  {[
                    "2018",
                    "2019",
                    "2020",
                    "2022",
                    "2023",
                    "2024",
                    "2025",
                    "2026",
                  ].map((year) => {
                    const isLatest = year === "2026";

                    return (
                      <div
                        key={year}
                        className="relative z-10 flex flex-col items-center min-w-[68px]"
                      >
                        {/* NODE */}
                        <div
                          className={`rounded-full border transition-all duration-300 ${
                            isLatest
                              ? "w-5 h-5 bg-blue-600 border-blue-600 shadow-lg shadow-blue-200"
                              : "w-3.5 h-3.5 bg-white border-2 border-gray-300"
                          }`}
                        />

                        {/* YEAR */}
                        <span
                          className={`mt-3 text-sm font-medium whitespace-nowrap ${
                            isLatest ? "text-blue-600" : "text-gray-500"
                          }`}
                        >
                          {year}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* KONTRIBUSI SECTION */}
            <div className="mt-24 border-t border-gray-200 pt-20">
              {/* TOP */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-14">
                {/* LEFT */}
                <div>
                  <p className="text-sm font-medium text-emerald-600 tracking-[0.2em] uppercase mb-4">
                    Innovation Contribution Insight
                  </p>

                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
                    Sebaran Kontribusi Inovasi INSANOVA 2026
                  </h3>

                  <p className="mt-6 text-gray-600 leading-relaxed max-w-lg text-[15px]">
                    Visualisasi kontribusi inovasi dari berbagai wilayah dan
                    kantor kerja dalam program INSANOVA 2026 untuk melihat
                    tingkat partisipasi, keterlibatan, serta persebaran budaya
                    inovasi organisasi secara nasional.
                  </p>
                </div>

                {/* RIGHT STATS */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="text-sm text-gray-500 mb-3">
                      Total Kontribusi
                    </p>

                    <h4 className="text-5xl font-bold text-gray-900">137</h4>

                    <div className="mt-6 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div className="w-[78%] h-full bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                    <p className="text-sm text-gray-500 mb-3">Wilayah Aktif</p>

                    <h4 className="text-5xl font-bold text-gray-900">12</h4>

                    <div className="mt-6 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div className="w-[65%] h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm col-span-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">
                          Kontributor Tertinggi
                        </p>

                        <h4 className="text-2xl font-semibold text-gray-900">
                          Kantor Pusat & Jawa Barat
                        </h4>

                        <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-md">
                          Menjadi wilayah dengan kontribusi inovasi tertinggi
                          dalam program INSANOVA 2026 dengan partisipasi aktif
                          dan konsisten.
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
                          <span className="text-emerald-600 text-2xl font-bold">
                            17
                          </span>
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-600 text-2xl font-bold">
                            17
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_1.4fr] gap-8 items-stretch">
                {/* LEFT MAP */}
                <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
                  {/* HEADER */}
                  <div className="absolute top-0 inset-x-0 z-10 h-[70px] bg-black/55 backdrop-blur-2xl border-b border-white/10 flex items-center justify-center overflow-hidden">
                    {/* GRADIENT LIGHT */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.09] via-white/[0.03] to-white/[0.09]" />

                    {/* TOP HIGHLIGHT */}
                    <div className="absolute top-0 inset-x-0 h-px bg-white/20" />

                    {/* BADGE */}
                    <div className="relative inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                      {/* INDICATOR */}
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-2 h-2 rounded-full bg-emerald-500 opacity-60 animate-ping" />
                      </div>

                      {/* TEXT */}
                      <span className="text-[11px] font-semibold tracking-[0.18em] text-white/95 uppercase">
                        Innovation Distribution Map
                      </span>
                    </div>
                  </div>

                  {/* MAP */}
                  <div className="relative h-[520px] w-full overflow-hidden rounded-[32px]">
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1RBRWxLHxcAafriSLhKgZuXqF8jHHEHU&ehbc=2E312F"
                      className="absolute inset-0 w-full h-[600px]"
                      loading="lazy"
                    />

                    {/* HIDE FOOTER */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-white z-10" />
                  </div>

                  {/* BOTTOM CLEAN INFO */}
                  <div className="absolute bottom-0 inset-x-0 z-20">
                    <div className="relative overflow-hidden border-t border-white/10 bg-white/80 backdrop-blur-2xl">
                      {/* subtle wash */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent pointer-events-none" />

                      {/* top line */}
                      <div className="absolute top-0 inset-x-0 h-px bg-white/60" />

                      {/* content */}
                      <div className="relative px-6 py-5">
                        <div className="flex items-start gap-4">
                          {/* ICON (replace green dot → real icon) */}
                          <div className="hidden md:flex w-11 h-11 rounded-xl bg-white/60 border border-gray-200 items-center justify-center">
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894l5-2.5a1 1 0 01.894 0l6.106 3.053a1 1 0 00.894 0l4-2A1 1 0 0122 4.118v10.764a1 1 0 01-.553.894l-5 2.5a1 1 0 01-.894 0L9.447 15.223a1 1 0 00-.894 0L4 17"
                              />
                            </svg>
                          </div>

                          {/* text stack */}
                          <div className="space-y-2">
                            {/* title */}
                            <p className="text-[10px] tracking-[0.22em] uppercase text-emerald-600 font-semibold">
                              National Innovation Insight
                            </p>

                            {/* description */}
                            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                              Visualisasi persebaran kontribusi inovasi dari
                              berbagai wilayah kerja BPJS Ketenagakerjaan dalam
                              program INSANOVA 2026.
                            </p>

                            {/* status */}
                            <p className="text-xs text-gray-500">
                              Connected to Google My Maps
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT CHART */}
                <div className="rounded-[32px] border border-gray-100 bg-white shadow-sm p-6 md:p-8 overflow-hidden">
                  {/* HEADER */}
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
                    {/* LEFT */}
                    <div className="space-y-3">
                      <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
                        Data Visualization
                      </p>

                      <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                        Kontribusi INSANOVA 2026
                      </h4>

                      {/* gradient accent line */}
                      <div className="relative w-16 h-[3px] rounded-full overflow-hidden bg-gray-200/60">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500 animate-pulse opacity-70" />
                      </div>
                    </div>

                    {/* RIGHT STATUS */}
                    <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
                      {/* icon stat (simple, no ping) */}
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>

                      {/* text */}
                      <span className="text-sm font-medium text-gray-700 tracking-wide">
                        Total kontribusi wilayah
                      </span>
                    </div>
                  </div>

                  {/* CHART */}
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="min-w-[780px]">
                      <div className="relative h-[420px]">
                        {/* CHART */}
                        <ContributionBarChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
