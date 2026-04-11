import React from "react";
import { motion } from "framer-motion";
import { howItWorksData } from "../../constants/howItWorksData";

export default function HowItWorks() {
    return (
        <section className="relative py-20 px-4 text-white overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#020617,#0f0a1f,#1a0f2e,#2e1065,#1a0f2e)] opacity-100"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-violet-400 to-purple-500 bg-clip-text text-transparent"
                >
                    How It Works
                </motion.h2>

                <p className="mt-4 text-gray-400">
                    Follow a simple path to improve your skills and crack placements
                </p>

                <div className="mt-12 space-y-6">

                    {howItWorksData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition"
                        >

                            <div className="text-2xl font-bold text-violet-300">
                                {item.step}
                            </div>

                            <div className="text-left">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}