import React from "react";

const Finance = () => {
  return (
    <div className="max-w-7xl mx-auto mt-[62px] h-[800px] px-16">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
        {/* content */}
        <div className="md:space-y-sm space-y-xs">
          <h6 className="lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
            POWERING THE FUTURE OF FINANCE
          </h6>
          <h2 className="whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
            Uncovering new ways to delight customers
          </h2>
          <div className="lg:pt-2">
            <div>
              <div className="text-body-1">
                <p>
                  <strong>
                    AnyTech is revolutionising financial technology by
                    introducing innovative and real-time transaction account
                    processing capabilities, specifically designed for retail
                    financial services.
                  </strong>
                </p>
              </div>
              <div className="text-body-1">
                <p>
                  <br />
                  Our modern approach surpasses traditional banking and card
                  processing systems, empowering you with the most advanced
                  technology for lasting success.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="md:block relative h-fit lg:text-clip">
          <figure className="w-[76%] mx-auto boxShadow">
            <img
              src="/women.avif"
              width="1124"
              height="1364"
              alt="POWERING THE FUTURE OF FINANCE"
              className="object-cover w-full h-full background"
              sizes="(min-width: 1024px) 45vw, 95vw"
              loading="lazy"
            />
          </figure>
          <div className="">
            <figure
              className="absolute top-[10%] right-[12%] pulse translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl transform  translate-y-[var(--motion-translateY)] animate-bounce duration-[.5s]"
              style={{ "--motion-translateX": "50%" }}
            >
              <img
                src="/icons/home.svg"
                width="116"
                height="115"
                alt="anybass"
                sizes="115px"
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </figure>{" "}
            <figure className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl translate-y-[var(--motion-translateY)]">
              <img
                src="/icons/state.svg"
                width="89"
                height="88"
                alt="anypass"
                sizes="87px"
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </figure>{" "}
            <figure
              className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"
              style={{
                transform:
                  "translateX(var(--motion-translateX)) translateY(var(--motion-translateY)); --motion-translateX: -50%",
              }}
            >
              <img
                src="/icons/card.svg"
                width="74"
                height="75"
                className="object-contain w-full h-full"
                alt="anycaas"
                sizes="73px"
                loading="lazy"
              />
            </figure>
          </div>
          <figure className="absolute inset-0 w-full h-full -z-10">
            <img
              className="object-cover w-full h-full overflow-visible"
              loading="lazy"
              src="/backgrounds/background.svg"
              alt="background frame"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Finance;
