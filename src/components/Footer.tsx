import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2F2A]/80 backdrop-blur-lg border-t border-white/10 text-white/75">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* LEFT - LOGO */}
          <div className="flex items-start">
            <Image
              src="/logo.png"
              alt="INSANOVA"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>

          {/* NAVIGASI */}
          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white/90 uppercase mb-5">
              Navigasi
            </h2>

            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="#about" className="hover:text-green-300 transition">
                  Tentang Insanova
                </Link>
              </li>
              <li>
                <Link href="#arsip" className="hover:text-green-300 transition">
                  Arsip Juara
                </Link>
              </li>
              <li>
                <Link
                  href="#mekanisme"
                  className="hover:text-green-300 transition"
                >
                  Program & Mekanisme
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className="hover:text-green-300 transition"
                >
                  Timeline Pelaksanaan
                </Link>
              </li>
            </ul>
          </div>

          {/* BPJS LOGO */}
          <div className="flex items-start md:items-center md:justify-center">
            <Image
              src="/images/bpjsLogo.png"
              alt="BPJS Ketenagakerjaan"
              width={200}
              height={180}
              className="object-contain opacity-90"
            />
          </div>

          {/* KONTAK */}
          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.2em] text-white/90 uppercase mb-5">
              Kontak
            </h2>

            <div className="text-sm text-white/70 space-y-4 leading-relaxed">
              <p className="text-white/90 font-medium">
                BPJS Ketenagakerjaan Grha Bpjamsostek
              </p>

              <p className="text-white/60">
                Jl. Gatot Subroto No.79, Karet Semanggi, Setiabudi, Jakarta
                Selatan, DKI Jakarta 12930
              </p>

              <div>
                <p className="text-white/90 font-medium mb-1">Email</p>
                <p className="text-white/60">
                  inovasi@bpjsketenagakerjaan.go.id
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p className="text-white/50">
            © 2026 BPJS Ketenagakerjaan. Seluruh Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

            <p className="text-white/80 font-medium tracking-wide">
              Deputi Perencanaan Strategis & Transformasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
