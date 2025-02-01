import Banner from "@/components/Home/Banner";
import Finance from "@/components/Home/Finance";

import Navbar from "@/components/Navbar";
import BannerSvg from "@/components/SvgComponent/BannerSvg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <Finance />
    </div>
  );
}
