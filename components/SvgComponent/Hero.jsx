"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePos({
        x: (clientX / window.innerWidth - 0.5) * 20, // Adjust intensity
        y: (clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      className="hidden lg:block absolute h-full w-full object-cover inset-0"
      width={1920}
      height={929}
      viewBox="0 0 1920 929"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="hero-background-desktop">
        <g
          id="background"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <g id="Vector">
            <path
              d="M668 23.4954V-382L-643 929H-237.504L668 23.4954Z"
              fill="url(#paint0_linear_132_3263)"
            />
          </g>
          <g id="Vector_2">
            <path
              d="M1195 -226.405V-592L13 590H378.596L1195 -226.405Z"
              fill="url(#paint1_linear_132_3263)"
            />
          </g>
        </g>

        <g
          id="foreground"
          style={{
            transform: `translate3d(${-mousePos.x / 2}px, ${
              -mousePos.y / 2
            }px, 0px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <path
            id="Vector_13"
            d="M1563 30.6791V-85L1189 289H1304.68L1563 30.6791Z"
            fill="url(#paint14_linear_132_3263)"
          />
          <g id="Vector_14">
            <path
              d="M1909 -173.321V-289L1535 85H1650.68L1909 -173.321Z"
              fill="url(#paint15_linear_132_3263)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Hero;
