import React from "react";
import { motion } from "framer-motion";
import { solutionData } from "../../constants/solutionData";

export default function Solution() {
    return (
        <section className="relative py-20 px-4 text-white overflow-hidden"
        id="solution">

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,#0f172a,#312e81,#4c1d95,#2563eb)] opacity-30 blur-2xl"></div>

                <div className="absolute top-[-80px] left-[20%] w-[220px] h-[220px] bg-purple-600 opacity-20 blur-2xl rounded-full"></div>
                <div className="absolute bottom-[-80px] right-[20%] w-[220px] h-[220px] bg-blue-600 opacity-20 blur-2xl rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    Skill Pro Solves This For You
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-gray-300 max-w-2xl mx-auto"
                >
                    We provide a guided learning experience that helps you improve step by step
                </motion.p>

                <div className="mt-12 grid sm:grid-cols-2 gap-6">

                    {solutionData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:scale-[1.03] transition text-left"
                        >
                            <h3 className="text-lg font-semibold text-violet-300">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-300 text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}