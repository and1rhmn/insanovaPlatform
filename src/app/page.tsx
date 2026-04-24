import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mekanisme from "@/components/Mekanisme";
import Arsip from "@/components/Arsip";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import Grafik from "@/components/Grafik";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Arsip />
      <Grafik />
      <Mekanisme />
      <Timeline />
      <Footer />
    </>
  );
}
