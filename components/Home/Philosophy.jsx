import React from "react";

const Philosophy = () => {
  return (
    <div className="max-w-7xl mx-auto md:mb-[128px] px-16">
      <div className="undefined md:space-y-6 space-y-xs text-center">
        <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
          OUR PHILOSOPHY
        </h6>
        <h2 className="undefined whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
          Human-centred innovation
        </h2>
        {/* div */}
        <div className="pt-[32px]">
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?auto=format"
            width="2206"
            height="727"
            sizes="95vw"
            className="h-full w-full hidden md:block"
            alt="Image"
            loading="lazy"
          />
        </div>
        {/* card */}
        <ul className="grid grid-cols-3  gap-[30px] text-start pt-8">
          <li className="z-20 h-full md:space-y-6 space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-8 p-sm ">
            <div className="w-fit rounded-full">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?auto=format"
                width="50"
                height="50"
                sizes="50px"
                alt="Full suite solutions"
                className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                loading="lazy"
              />
            </div>{" "}
            <h4 className="font-Montserrat text-blue-text text-res-head-4 text-2xl ">
              Full-suite solutions
            </h4>{" "}
            <p className="text-body-1">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </li>
          <li className=" z-20 h-full md:space-y-6 space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-8 p-sm ">
            <div className="w-fit rounded-full">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?auto=format"
                width="50"
                height="51"
                sizes="50px"
                alt="Simplify the complex"
                className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                loading="lazy"
              />
            </div>{" "}
            <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 text-2xl">
              Simplify the complex
            </h4>{" "}
            <p className="text-body-1">
              Simplify complex processes and optimise your financial operations
              by leveraging the power of AI, Blockchain, Cloud Computing, and
              Big Data.
            </p>
          </li>
          <li className=" z-20 h-full md:space-y-6 space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-8 p-sm ">
            <div className="w-fit rounded-full">
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?auto=format"
                width="50"
                height="50"
                sizes="50px"
                alt="Cutting-edge tech"
                className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                loading="lazy"
              />
            </div>{" "}
            <h4 className="undefined font-Montserrat text-blue-text text-res-head-4 text-2xl">
              Cutting-edge tech
            </h4>{" "}
            <p className="text-body-1">
              We seamlessly combine cutting-edge technologies, resulting in an
              unparalleled fintech experience for financial institutions.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Philosophy;
