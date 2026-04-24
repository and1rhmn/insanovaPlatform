"use client";

const timeline = [
  {
    month: "Maret",
    title: "Blasting & Campaign INSANOVA",
    desc: "Surat edaran dan petunjuk teknis program disebarluaskan ke seluruh unit kerja.",
  },
  {
    month: "April",
    title: "Kickoff & Submission Inovasi",
    desc: "Kickoff INSANOVA, sosialisasi program, pembentukan tim, clustering ide, dan submission inovasi.",
  },
  {
    month: "Mei",
    title: "Penjurian Pertama & Pra Inkubasi",
    desc: "Seleksi oleh Kanwil dan REN menghasilkan 40 tim. Dilanjutkan mentoring pra inkubasi dan submission lanjutan.",
  },
  {
    month: "Juni",
    title: "Inkubasi & Seleksi Finalis",
    desc: "Penjurian kedua menghasilkan 14 besar. Dilanjutkan inkubasi dan seleksi menuju 6 besar innovator.",
  },
  {
    month: "Juli (Final Phase)",
    title: "Demo Day Preparation",
    desc: "Pengumuman 6 besar dan mentorship intensif menuju final stage.",
  },
  {
    month: "Juli (Peak Event)",
    title: "Demo Day & Awarding",
    desc: "Final presentation 6 besar innovator dan awarding day INSANOVA.",
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <section className="bg-white py-20 px-6" id="timeline">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
            Roadmap Insanova
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Timeline Pelaksanaan
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl">
            Rangkaian proses inovasi dari tahap awal hingga awarding yang
            dilaksanakan secara terstruktur dan berkelanjutan.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-emerald-100 ml-3">
          {timeline.map((item, i) => (
            <div key={i} className="relative ml-6 mb-10">
              {/* DOT */}
              <span
                className={`absolute -left-[30px] top-2 w-4 h-4 rounded-full border-4 border-white shadow-sm
                ${item.highlight ? "bg-emerald-600" : "bg-emerald-400"}`}
              ></span>

              {/* CARD */}
              <div
                className={`p-5 rounded-xl border transition shadow-sm hover:shadow-md
                ${
                  item.highlight
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-white border-gray-100"
                }`}
              >
                {/* MONTH */}
                <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">
                  {item.month}
                </p>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
