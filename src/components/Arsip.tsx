"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const dataArsip = [
  {
    year: "2018",
    items: [
      {
        title: "Inovasi Aplikasi Absensi Digital",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
        slug: "inovasi-aplikasi-absensi-digital",
      },
      {
        title: "Sistem Monitoring Kinerja Pegawai",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
        slug: "sistem-monitoring-kinerja-pegawai",
      },
      {
        title: "Digitalisasi Layanan Internal",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
        slug: "digitalisasi-layanan-internal",
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        title: "Automasi Proses Administrasi",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        slug: "automasi-proses-administrasi",
      },
      {
        title: "Smart Reporting System",
        image:
          "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1200",
        slug: "smart-reporting-system",
      },
      {
        title: "Dashboard Kinerja Terintegrasi",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&2",
        slug: "dashboard-kinerja-terintegrasi",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Transformasi Digital Workflow",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
        slug: "transformasi-digital-workflow",
      },
      {
        title: "Data Driven Decision System",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&3",
        slug: "data-driven-decision-system",
      },
      {
        title: "Remote Collaboration Platform",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
        slug: "remote-collaboration-platform",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "Hybrid Work System Innovation",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
        slug: "hybrid-work-system-innovation",
      },
      {
        title: "AI Assisted Reporting Tools",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200",
        slug: "ai-assisted-reporting-tools",
      },
      {
        title: "Digital Service Optimization",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&4",
        slug: "digital-service-optimization",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Enterprise Automation Platform",
        image:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
        slug: "enterprise-automation-platform",
      },
      {
        title: "Smart Analytics Dashboard",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&5",
        slug: "smart-analytics-dashboard",
      },
      {
        title: "Integrated Workflow System",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&2",
        slug: "integrated-workflow-system",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Digital Transformation Acceleration",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
        slug: "digital-transformation-acceleration",
      },
      {
        title: "Cloud Based Innovation System",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
        slug: "cloud-based-innovation-system",
      },
      {
        title: "Smart Office Ecosystem",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
        slug: "smart-office-ecosystem",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Next Gen Digital Workplace",
        image:
          "https://images.unsplash.com/photo-1553877522-43c5074b52c3?q=80&w=1200",
        slug: "next-gen-digital",
      },
      {
        title: "AI Powered Work System",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
        slug: "ai-powered-work-system",
      },
      {
        title: "Innovation Culture Expansion",
        image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200",
        slug: "innovation-culture-expansion",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Future Ready Organization System",
        image:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200",
        slug: "future-ready-organization-system",
      },
      {
        title: "Advanced AI Integration",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
        slug: "advanced-ai-integration",
      },
      {
        title: "Sustainable Digital Innovation",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
        slug: "sustainable-digital-innovation",
      },
    ],
  },
];

export default function Arsip() {
  // const [selected, setSelected] = useState(null);
  const [activeYear, setActiveYear] = useState(dataArsip[0].year);
  type ArsipItem = {
    title: string;
    image: string;
    slug?: string;
  };

  const [selected, setSelected] = useState<ArsipItem | null>(null);

  // const activeData = dataArsip.find((d) => d.year === activeYear);
  const activeData = dataArsip.find((d) => d.year === activeYear)!;

  return (
    <section className="bg-gray-50 py-20 px-6" id="arsip">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-4">
          <p className="text-sm font-medium text-blue-600 tracking-widest uppercase">
            Innovation Archive
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-1">
            Arsip Pemenang INSANOVA
          </h2>
        </div>

        {/* YEAR PAGINATION */}
        <div className="flex flex-wrap gap-2 mb-8">
          {dataArsip.map((item) => {
            const isActive = item.year === activeYear;

            return (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`
          px-4 py-1.5 rounded-full text-sm font-medium border transition
          ${
            isActive
              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
              : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:text-blue-600"
          }
        `}
              >
                {item.year}
              </button>
            );
          })}
        </div>

        {/* GRID CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeData?.items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <p className="text-gray-800 font-medium group-hover:text-blue-600 transition">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            >
              {/* IMAGE */}
              <div className="h-72 md:h-96 overflow-hidden relative">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center space-y-4">
                {/* SMALL LABEL (OPTIONAL FEEL PREMIUM) */}
                <p className="text-xs tracking-widest text-blue-600 uppercase font-medium">
                  Insanova Winner
                </p>

                {/* TITLE */}
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                  {selected.title}
                </h4>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href={`/arsip/${activeYear}/${selected.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition shadow-sm"
                  >
                    Lihat Detail Pemenang
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
