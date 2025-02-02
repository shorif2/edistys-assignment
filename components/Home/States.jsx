import React from "react";

const States = () => {
  return (
    <div className="max-w-7xl mx-auto px-16">
      <h6 className="pb-4 text-center lg:pb-10 lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
        TRUSTED BY THE BEST
      </h6>
      <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28">
        <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB]  bg-clip-text">
            &gt;<span>20</span>
          </h2>{" "}
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Years of Experience
          </p>{" "}
        </div>
        <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB]  bg-clip-text">
            <span>40</span>+
          </h2>{" "}
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Financial Institutions
          </p>{" "}
        </div>
        <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB]  bg-clip-text">
            &gt;<span>200</span>m
          </h2>{" "}
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Customers Each
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default States;
