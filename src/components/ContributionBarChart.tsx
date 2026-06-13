"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import type { ScriptableContext } from "chart.js";
import type { Context } from "chartjs-plugin-datalabels";

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

type ChartItem = {
  label: string;
  value: number;
};

export default function ContributionBarChart() {
  const [data, setData] = useState<ChartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/contribution");
        const result = await res.json();

        console.log("API RESULT:", result);

        // 🔥 NORMALIZE DATA (SUPER SAFE)
        let normalized: ChartItem[] = [];

        if (Array.isArray(result)) {
          normalized = result;
        } else if (result?.values && Array.isArray(result.values)) {
          normalized = result.values
            .filter((row: any) => row?.[0] && row?.[1])
            .map((row: string[]) => ({
              label: String(row[0] ?? ""),
              value: Number(row[1] ?? 0),
            }));
        }

        setData(normalized);
      } catch (error) {
        console.error("Fetch error:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔥 SAFE GUARD (WAJIB)
  const labels = Array.isArray(data) ? data.map((d) => d.label) : [];
  const values = Array.isArray(data) ? data.map((d) => d.value) : [];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Kontribusi",
        data: values,

        backgroundColor: (ctx: ScriptableContext<"bar">) => {
          const value = (ctx.raw as number) ?? 0;
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

          return active?.length > 0 && active[0]?.index === context.dataIndex;
        },

        anchor: "end",
        align: "end",
        color: "#111827",
        font: {
          weight: 600,
        },

        formatter: (value: number) => value ?? "",
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          callback: function (value: string | number) {
            const label = this.getLabelForValue?.(Number(value)) ?? "";

            if (!label) return "";

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

  if (loading) {
    return (
      <div className="w-full overflow-x-auto">
        <div className="min-w-[780px] h-[420px] bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-sm flex items-center justify-center">
          Loading...
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full overflow-x-auto">
        <div className="min-w-[780px] h-[420px] bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-sm flex items-center justify-center">
          No data available
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[780px] h-[420px] bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-sm">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
