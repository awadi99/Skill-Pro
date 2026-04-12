import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative py-24 px-4 text-white overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#020617,#0f0a1f,#1a0f2e,#2e1065,#4c1d95)]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Start Your Learning Journey Today 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-lg"
        >
          Practice daily. Improve consistently. Crack your dream job.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to="/register"
            className="inline-block bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition hover:scale-105"
          >
            Get Started Now
          </Link>
        </motion.div>

      </div>

    </section>
  );
}