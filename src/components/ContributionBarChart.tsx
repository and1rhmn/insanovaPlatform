"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import type { ScriptableContext } from "chart.js";
import type { Context } from "chartjs-plugin-datalabels";
// import type { Tick } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels,
);

type Props = {
  data?: {
    label: string;
    value: number;
  }[];
};

const defaultData = [
  { label: "Kantor Pusat", value: 17 },
  { label: "Sumatera Utara", value: 6 },
  { label: "Sumatera Selatan", value: 13 },
  { label: "DKI Jakarta", value: 8 },
  { label: "Jawa Barat", value: 17 },
  { label: "Jawa Tengah & DIY", value: 15 },
  { label: "Jawa Timur", value: 9 },
  { label: "Kalimantan", value: 16 },
  { label: "Sulawesi & Maluku", value: 10 },
  { label: "Sumatera Barat & Kep. Riau", value: 10 },
  { label: "Banten", value: 8 },
  { label: "Bali, Nusa Tenggara, Papua", value: 8 },
];

export default function ContributionBarChart({ data = defaultData }: Props) {
  const labels = data.map((d) => d.label);
  const values = data.map((d) => d.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Kontribusi",
        data: values,

        // warna lebih enterprise (bukan random biru/ijo)
        backgroundColor: (ctx: ScriptableContext<"bar">) => {
          const value = ctx.raw as number;

          return value >= 15 ? "#059669" : "#2563eb";
        },

        borderRadius: 10,
        borderSkipped: false,
        barThickness: 28,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,

    layout: {
      padding: 10,
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "rgba(255,255,255,0.95)",
        titleColor: "#111827",
        bodyColor: "#374151",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },

      datalabels: {
        display: (context: Context) => {
          const chart = context.chart;
          const active = chart.getActiveElements();

          return active.length > 0 && active[0].index === context.dataIndex;
        },

        anchor: "end",
        align: "end",
        color: "#111827",
        font: {
          weight: 600,
        },

        formatter: (value: number) => value,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value: string | number) {
            const label = this.getLabelForValue(Number(value));

            return label.length > 14 ? label.slice(0, 14) + "..." : label;
          },
        },
      },

      y: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
        ticks: {
          color: "#6b7280",
        },
      },
    },
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[780px] h-[420px] bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-sm">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
