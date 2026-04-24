"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb } from "lucide-react";

/* ===================== Typing Effect ===================== */
function TypingText() {
  const text = "(Insan Berinovasi)";

  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = index + 1;
        setDisplayed(text.substring(0, next));
        setIndex(next);

        if (next === text.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const next = index - 1;
        setDisplayed(text.substring(0, next));
        setIndex(next);

        if (next === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <span className="text-white/70 text-lg md:text-xl font-light tracking-wide block mt-2">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* ===================== HERO ===================== */
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  type Particle = {
    x: number;
    y: number;
    r: number;
    d: number;
    opacity: number;
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 3 + 1.5,
        d: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.r * 5,
        );

        gradient.addColorStop(0, `rgba(255,255,255,${p.opacity})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      update();
    }

    function update() {
      angle += 0.01;

      particles.forEach((p) => {
        p.y += p.d;
        p.x += Math.sin(angle) * 0.4;

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen grid place-items-center px-6 bg-gradient-to-br from-[#0F2F2A] via-[#14423B] to-[#0F2F2A] text-white overflow-hidden"
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Content Wrapper FIX */}
      <div className="relative z-10 text-center max-w-3xl flex flex-col items-center gap-4">
        <div className="max-w-3xl w-full text-center flex flex-col items-center gap-4">
          {/* Icon Inovasi */}
          <div className="relative mb-2">
            <div className="absolute inset-0 blur-xl bg-green-400/30 rounded-full animate-pulse" />
            <div className="relative p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <Lightbulb className="text-green-300" size={26} />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-white/20 bg-white/5 text-white/70 text-xs tracking-widest uppercase backdrop-blur-md">
            Innovation Platform • BPJS Ketenagakerjaan
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-green-300 via-white to-green-200 bg-clip-text text-transparent">
              INSANOVA
            </span>

            <TypingText />
          </h1>

          {/* Card */}
          <div className="mt-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-green-100/10 transition max-w-xl">
            <p className="text-lg md:text-xl font-mono tracking-wider text-green-200/90">
              Wujudkan Inovasi, Sejahterakan Pekerja
            </p>

            <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
              Selaraskan visi BPJS Ketenagakerjaan melalui ide, kolaborasi, dan
              inovasi berkelanjutan untuk meningkatkan kualitas layanan bagi
              seluruh pekerja Indonesia.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#arsip"
                className="inline-flex items-center justify-center gap-2 
    w-full sm:w-auto
    px-6 py-3 sm:px-6 sm:py-3
    rounded-lg 
    bg-green-400 text-black font-semibold 
    hover:bg-green-300 hover:scale-105 active:scale-95 transition"
              >
                Lihat Arsip
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
