import React from "react";

const outerLogos = [
  "/image/microsoft _logo.webp",
  "/image/google.webp",
  "/image/meta-logo.webp",
  "/image/netflix-logo.webp",
  "/image/open_ai_logo.webp",
];

const innerLogos = [
  "/image/microsoft _logo.webp",
  "/image/google.webp",
  "/image/meta-logo.webp",
  "/image/netflix-logo.webp",
  "/image/open_ai_logo.webp",
];

export default function Earth() {
  return (
    <div className="flex items-center justify-center h-[350px] w-full ">

      <div className="relative w-80 h-80 flex items-center justify-center">
        

        <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-3xl"></div>
        <img className="w-10 h-10 rounded-full" src="/image/SkillPro1.png" alt="" />
        <div className="absolute inset-0 lg:border border-white/10 rounded-full orbit-spin">
          {outerLogos.map((logo, index) => {
            const angle = (index / outerLogos.length) * 360;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  // translate(160px) puts the center of the logo on the 320px border
                  transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`,
                }}
              >

                <div className="counter-spin -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={logo}
                    alt="brand"
                    className="w-10 h-10 rounded-full bg-white p-1 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20"
                  />
                </div>
              </div>
            );
          })}
        </div>


        <div className="absolute inset-[60px] lg:border border-white/10 rounded-full orbit-spin-reverse">
          {innerLogos.map((logo, index) => {
            const angle = (index / innerLogos.length) * 360;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`,
                }}
              >
                <div className="counter-spin-reverse -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={logo}
                    alt="brand"
                    className="w-8 h-8 rounded-full bg-white p-1 shadow-lg border border-white/20"
                  />
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
}