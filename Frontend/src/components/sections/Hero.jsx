import React, { useMemo, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HeroBackground from "../three/HeroBackground";

const Earth = React.lazy(() => import("../three/Earth"));



export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden w-full px-4 sm:px-6">

      <HeroBackground />

      <div className="z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="text-center md:text-left max-w-md mx-auto md:mx-0"
        >
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight">
            S<span className="text-red-700">K</span>ILL <span className="text-violet-700">PRO</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-gray-300 text-base sm:text-lg md:text-xl">
            Learn Smart, Practice Better
          </p>

          <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base">
            Skill Pro helps you improve your problem-solving, logical thinking, and English skills with structured practice and smart guidance.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              to="/register"
              className="w-full sm:w-auto bg-violet-700 text-white px-6 py-3 rounded-4xl hover:animate-pulse font-medium hover:scale-105 transition text-center"
            >
              Get Started
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8}}
          className="flex justify-center items-center w-full"
        >
          <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[400px] h-[220px] sm:h-[280px] md:h-[400px]">

            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_10%,_rgba(255,255,255,0.05)_100%,_transparent_70%)] blur-3xl"></div>
            </div>

            <Suspense fallback={null}>
              <Earth />
            </Suspense>

          </div>
        </motion.div>

      </div>

    </section>
  );
}