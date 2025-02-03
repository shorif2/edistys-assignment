// import Carousel from "react-multi-carousel";

import Carousel from "../Carousel";

const Technology = () => {
  return (
    <div className="relative pt-28 md:pt-0">
      <div className="max-w-7xl mx-auto px-8 md:px-0">
        <div className="undefined md:space-y-sm space-y-xs text-center">
          <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h2 className="undefined whitespace-pre-line font-Montserrat text-[32px] lg:text-[56px] font-semibold text-blue-text lg:text-head-2">
            The future of finance
          </h2>
        </div>
        {/* Slider */}
        <div className="pt-4">
          <Carousel />
        </div>
      </div>
      <svg
        className="max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Technology;
