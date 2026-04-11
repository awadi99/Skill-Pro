import React from "react";
import { motion } from "framer-motion";
import { problemData } from "../../constants/problemData";

export default function Problem() {
    return (
        <section className="py-16 px-4 bg-neutral-950 text-white"
        id="problem">
            <div className="max-w-6xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    Struggling with Your Preparation?
                </motion.h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Many students face these common problems while preparing for placements
                </p>

                
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                    className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
                >

                    {problemData.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3 }}
                            className="p-5 bg-neutral-900 rounded-lg border border-gray-800 hover:bg-neutral-800 transition"
                        >
                            <p className="text-gray-300 text-sm">{item}</p>
                        </motion.div>
                    ))}

                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 text-base text-red-400"
                >
                    Result: Low confidence and poor placement performance
                </motion.p>

            </div>
        </section>
    );
}