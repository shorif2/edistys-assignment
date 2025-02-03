import React from "react";
import BannerSvg from "@/components/SvgComponent/BannerSvg";
import BannerMobile from "../SvgComponent/BannerMobile";
const Banner = () => {
  return (
    <>
      <div
        id="hello"
        className="test lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white [clip-path:polygon(0_0,100%_0,100%_90%,0_97%)] xl:[clip-path:polygon(0_0,100%_0,100%_81%,0%_100%)] overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]"
      >
        {/* banner */}
        <div className="max-w-7xl z-10 px-8 md:px-16 mx-auto relative  w-full h-full md:flex md:items-center md:justify-center">
          <div className=" h-fit lg:flex-[65] xl:flex-[75]">
            <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
              <h1 className="font-Montserrat lg:max-w-max lg:whitespace-pre-line lg:text-head-1  text-res-head-1 text-white text-[56px] lg:text-[80px] font-semibold leading-[64px] lg:leading-[96px] tracking-wide lg:tracking-[-1.6px]">
                Embrace the future of finance
              </h1>{" "}
              <h5 className="text-white max-w-[37rem] lg:mr-5 font-semibold font-Montserrat tracking-wide leading-[25px]">
                Reimagine financial services with AnyTech’s open platform,
                distributed banking solution that powers transformation
              </h5>
            </header>
            <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
              <button className="text-[18px] px-[42px] py-[15px] shadow-xl bg-[#FE8B53] text-white font-semibold rounded leading-[23px] flex gap-1 items-center ">
                Reach Out to Us{" "}
                <svg
                  className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 group-hover/highlight:fill-blue-400"
                  width={7}
                  height={11}
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
        </div>
        {/* image */}
        <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full [clip-path:polygon(67%_0,100%_0,100%_68%,80%_100%,0_100%,32%_51%)] pointer-events-none test ">
          {/* old */}
          <div
            className="h-[115%] w-[115%] object-cover "
            style={{
              transform:
                "translateX(var(--motion-translateX)); --motion-translateX: -12%",
            }}
          >
            <img
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format"
              width="7952"
              height="5304"
              style={{ background: "cover no-repeat" }}
              className="h-full w-full object-cover"
              sizes="55vw"
              alt="background image"
            />
          </div>
          {/* old end */}
          <div className="gradient-overlay test"></div>
        </div>
        <BannerSvg />
        <BannerMobile />
        {/* Svg */}
      </div>
      <div className="block lg:hidden translate-y-[-20%] -mb-[10%]">
        <figure
          className="object-cover overflow-hidden"
          style={{ clipPath: "polygon(0px 15%, 100% 0px, 100% 85%, 0% 100%)" }}
        >
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format"
            width="7952"
            height="5304"
            className="h-full w-full object-cover scale-150"
            sizes="100vw"
            alt="background image"
            style={{ background: "cover no-repeat" }}
          />
        </figure>{" "}
        <div className="gradient-overlay"></div>
      </div>
    </>
  );
};

export default Banner;
