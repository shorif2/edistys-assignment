import React from "react";
import ContactSvg from "../SvgComponent/ContactSvg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden bg-[url('/backgrounds/ctaMobileWaveLines.svg')] bg-no-repeat bg-cover md:z-20 z-0 svelte-vr11vg"
    >
      <div className="max-w-7xl mx-auto px-16 flex w-full items-start justify-center h-full relative z-10 flex-col mt-6">
        <h2 className="font-Montserrat text-7xl text-white lg:text-6xl font-semibold mb-[24px]">
          Legacy no longer
        </h2>{" "}
        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">
          Talk to us to find out how we can transform your organisation for the
          future
        </p>{" "}
        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
          <button className="md:py-[15.5px] py-[14px] px-[42px] rounded-sm shadow-button-primary text-link text-white text-lg font-bold flex items-center justify-center space-x-[8px] bg-orange-main ">
            <span>Contact Us</span>{" "}
            <svg
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <ContactSvg />
    </div>
  );
};

export default Contact;
