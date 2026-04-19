import React, { useMemo } from "react";

function HeroBackground() {
    const stars = useMemo(() => {
        return [...Array(40)].map(() => ({
            size: Math.random() * 2 + 1,
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
            {stars.map((s, i) => (
                <span
                    key={i}
                    className="absolute bg-white rounded-full animate-twinkle pointer-events-none"
                    style={{
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        animationDelay: `${s.delay}s`,

                        willChange: "opacity",
                    }}
                />
            ))}


            <div
                className="absolute inset-0 bg-[linear-gradient(120deg,#1e1b4b,#312e81,#4c1d95)] opacity-30 blur-2xl"
                style={{ backfaceVisibility: "hidden" }}
            ></div>


            <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-purple-700/30 rounded-full blur-[80px] animate-blob will-change-transform"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-violet-600/30 rounded-full blur-[80px] animate-blob animation-delay-2000 will-change-transform"></div>
            <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-indigo-700/20 rounded-full blur-[80px] animate-blob animation-delay-4000 will-change-transform"></div>
        </div>
    );
}

export default React.memo(HeroBackground);