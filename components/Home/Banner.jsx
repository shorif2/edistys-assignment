import React from "react";
import BannerSvg from "@/components/SvgComponent/BannerSvg";
const Banner = () => {
  return (
    <div
      id="hello"
      className="test lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white [clip-path:polygon(0_0,100%_0,100%_90%,0_97%)] xl:[clip-path:polygon(0_0,100%_0,100%_81%,0%_100%)] overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]"
    >
      {/* banner */}
      <div className="max-w-7xl z-10 px-16 mx-auto relative  w-full h-full md:flex md:items-center md:justify-center">
        <div className=" h-fit lg:flex-[65] xl:flex-[75]">
          <h1 className="text-7xl font-medium">
            Embrace the <br /> future of finance
          </h1>
          <p className="font-medium py-6 max-w-[37rem]">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation
          </p>
          <button className="text-[18px] px-10 py-4 shadow-sm bg-[#FE8B53] text-white font-bold rounded ">
            Reach Out to Us &gt;
          </button>
        </div>
        <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
      </div>
      {/* image */}
      <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full [clip-path:polygon(67%_0,100%_0,100%_68%,80%_100%,0_100%,32%_51%)] pointer-events-none test ">
        <figure className="h-[115%] w-[115%] object-cover">
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1280&auto=format"
            alt="banner-img"
          />
        </figure>
        <div className="gradient-overlay test"></div>
      </div>
      <BannerSvg />
      {/* Svg */}
    </div>
  );
};

export default Banner;
