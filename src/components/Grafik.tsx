"use client";

import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  TooltipItem,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels,
);

function Grafik() {
  const dataWilayah = [
    { wilayah: "Jawa Timur", value: 5 },
    { wilayah: "DKI Jakarta", value: 4 },
    { wilayah: "Jawa Tengah & DIY", value: 4 },
    { wilayah: "Sulawesi Selatan", value: 3 },
    { wilayah: "Sumatera Utara", value: 2 },
    { wilayah: "Provinsi Aceh", value: 2 },
    { wilayah: "Kalimantan Timur", value: 2 },
    { wilayah: "Kep. Bangka Belitung", value: 1 },
    { wilayah: "Kepulauan Riau", value: 1 },
    { wilayah: "Sumatera Selatan", value: 1 },
    { wilayah: "Banten, Bali, NT, Papua", value: 1 },
  ];

  const total = dataWilayah.reduce((acc: number, cur) => acc + cur.value, 0);

  const labels = dataWilayah.map((item) => item.wilayah);
  const values = dataWilayah.map((item) => item.value);

  const colors = [
    "#3b82f6",
    "#ef4444",
    "#f59e0b",
    "#22c55e",
    "#f97316",
    "#14b8a6",
    "#60a5fa",
    "#f87171",
    "#facc15",
    "#4ade80",
    "#fb923c",
  ];

  const pieData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels,
    datasets: [
      {
        label: "Total Kemenangan",
        data: values,
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  };

  // ================= PIE OPTIONS =================
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          padding: 12,
        },
        layout: {
          padding: 10,
        },
      },

      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"pie">) => {
            const value = context.raw as number;
            const percent = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${value} (${percent}%)`;
          },
        },
      },

      datalabels: {
        display: false,
      },
    },
  };

  // ================= BAR OPTIONS =================
  const barOptions = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },

      datalabels: {
        anchor: "end" as const,
        align: "right" as const,
        formatter: (val: number) => val,
        color: "#111",
      },
    },

    scales: {
      x: {
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <section className="bg-gray-50 py-20 px-6" id="grafik">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-sm font-medium text-emerald-600 tracking-widest uppercase">
            Statistik INSANOVA
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
            Analisis Kontribusi & Peringkat Wilayah
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PIE */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-5">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">
              Proporsi Kontribusi Wilayah
            </h3>

            <div className="h-[420px]">
              <Pie data={pieData} options={pieOptions} />
            </div>

            <p className="text-[15px] text-gray-600 mt-4 leading-relaxed font-light">
              Diagram lingkaran ini menunjukkan proporsi persentase dari total
              kemenangan INSANOVA di seluruh Indonesia. Visualisasi ini
              menggambarkan kontribusi masing-masing wilayah terhadap
              keberhasilan program secara keseluruhan, di mana terlihat bahwa
              sekitar 40% inovasi berasal dari Jawa Timur, DKI Jakarta, serta
              Jawa Tengah & DIY.
            </p>
          </div>

          {/* BAR */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-5">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">
              Peringkat Total Kemenangan
            </h3>

            <div className="h-[420px]">
              <Bar data={barData} options={barOptions} />
            </div>

            <p className="text-[15px] text-gray-600 mt-4 leading-relaxed font-light">
              Diagram batang ini menunjukkan peringkat provinsi atau wilayah
              berdasarkan total kemenangan selama program INSANOVA (2018–2025).
              Visualisasi ini memperlihatkan wilayah yang paling dominan dan
              konsisten dalam menghasilkan inovasi, dengan Jawa Timur dan DKI
              Jakarta sebagai peringkat teratas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grafik;
