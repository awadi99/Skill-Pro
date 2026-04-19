import React from "react";

const outerLogos = [
  "/image/microsoft _logo.jpg",
  "/image/google.webp",
  "/image/meta-logo.webp",
  "/image/netflix-logo.webp",
  "/image/open_ai_logo.webp",
];

const innerLogos = [
  "/image/microsoft _logo.jpg",
  "/image/google.webp",
  "/image/meta-logo.webp",
  "/image/netflix-logo.webp",
  "/image/open_ai_logo.webp",
];

export default function Earth() {
  return (
    <div className="flex items-center justify-center w-full py-10">

      <div 
        className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square flex items-center justify-center [--radius:110px] md:[--radius:200px] [--inner-radius:70px] md:[--inner-radius:120px]"
      >
        
        
        <img className="z-10 w-10 h-10 rounded-full" src="/image/SkillPro1.png" alt="" />

        
        <div className="absolute inset-0 border border-white/10 rounded-full orbit-spin">
          {outerLogos.map((logo, index) => {
            const angle = (index / outerLogos.length) * 360;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                
                  transform: `rotate(${angle}deg) translateX(var(--radius)) rotate(-${angle}deg)`,
                }}
              >
                <div className="counter-spin -translate-x-1/2 -translate-y-1/2">
                  <img src={logo} className="w-10 h-10 rounded-full bg-white p-1" />
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="absolute inset-[20%] border border-white/10 rounded-full orbit-spin-reverse">
          {innerLogos.map((logo, index) => {
            const angle = (index / innerLogos.length) * 360;
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateX(var(--inner-radius)) rotate(-${angle}deg)`,
                }}
              >
                <div className="counter-spin-reverse -translate-x-1/2 -translate-y-1/2">
                  <img src={logo} className="w-8 h-8 rounded-full bg-white p-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}