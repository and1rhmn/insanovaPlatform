import Image from "next/image";

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
          <div className="relative w-full">
            {/* CENTER LINE (FIXED ALIGN TO NODE CENTER) */}
            <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-200"></div>

            {/* ITEMS */}
            <div className="flex justify-between items-start relative">
              {[
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
                "2025",
                "2026",
              ].map((year) => (
                <div
                  key={year}
                  className="flex flex-col items-center relative z-10"
                >
                  {/* NODE (centered with line) */}
                  <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-sm"></div>

                  {/* YEAR */}
                  <span className="mt-3 text-sm font-medium text-gray-800">
                    {year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
