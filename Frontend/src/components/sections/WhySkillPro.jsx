import React from "react";
import { motion } from "framer-motion";
import { whyData } from "../../constants/whyData";

export default function WhySkillPro() {
    return (
        <section className="relative py-24 px-4 text-white overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,#0f172a,#312e81,#4c1d95,#2563eb)] opacity-30 blur-2xl"></div>

                <div className="absolute top-[-80px] left-[20%] w-[220px] h-[220px] bg-purple-600 opacity-20 blur-2xl rounded-full"></div>
                <div className="absolute bottom-[-80px] right-[20%] w-[220px] h-[220px] bg-blue-600 opacity-20 blur-2xl rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto relative">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-center"
                >
                    Why Skill Pro?
                </motion.h2>

                <div className="relative mt-16">

                    <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10"></div>

                    {whyData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className={`relative mb-12 flex ${i % 2 === 0 ? "justify-start" : "justify-end"
                                }`}
                        >

                            <div className="w-[45%] p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:scale-[1.03] transition">
                                <h3 className="text-lg font-semibold text-violet-300">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-gray-300 text-sm">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="absolute left-1/2 top-4 -translate-x-1/2 w-3 h-3 bg-violet-400 rounded-full"></div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}