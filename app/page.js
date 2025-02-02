import Carousel from "@/components/Carousel";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Customers from "@/components/Home/Customers";
import Finance from "@/components/Home/Finance";
import Footer from "@/components/Home/Footer";
import Philosophy from "@/components/Home/Philosophy";
import States from "@/components/Home/States";
import Technology from "@/components/Home/Technology";

import Navbar from "@/components/Navbar";
import BannerSvg from "@/components/SvgComponent/BannerSvg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = [
    "https://source.unsplash.com/300x200/?nature,water",
    "https://source.unsplash.com/300x200/?mountain",
    "https://source.unsplash.com/300x200/?forest",
    "https://source.unsplash.com/300x200/?beach",
    "https://source.unsplash.com/300x200/?sunset",
  ];
  return (
    <div className="relative h-max">
      <Navbar />
      <Banner />
      <Finance />
      <Philosophy />
      <Technology />
      <States />
      <div className="pt-24">
        <Customers />
        <Customers />
        <Customers />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
