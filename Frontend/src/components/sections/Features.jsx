import React from "react";
import { motion } from "framer-motion";
import featuresData from '../../constants/featuresData.js';


export default function Features() {
    return (
        <section className="relative py-20 px-4 text-white overflow-hidden"
            id="features">

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,#0f172a,#312e81,#4c1d95,#2563eb)] opacity-20 blur-2xl"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent"
                >
                    Everything You Need in One Place
                </motion.h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Skill Pro combines all essential tools to help you crack placements efficiently
                </p>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.08 },
                        },
                    }}
                    className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6"
                >

                    {featuresData.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.04] transition"
                            >

                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>


                                <div className="relative flex justify-center items-center gap-3">

                                    <Icon
                                        size={22}
                                        className={`${item.color} ${item.hoverColor} transition`}
                                    />

                                    <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition">
                                        {item.title}
                                    </h3>

                                </div>

                                <p className="relative mt-2 text-gray-400 text-sm">
                                    {item.desc}
                                </p>

                            </motion.div>
                        );
                    })}
                </motion.div>


                
                <div className="mt-20 w-full overflow-hidden">

                    <div className="flex gap-10 animate-scrollX">

                        {[...featuresData, ...featuresData].map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <div key={i} className="flex items-center gap-2 min-w-fit opacity-70 hover:opacity-100 transition">

                                    <Icon className={`${item.color} w-8 h-8`} />

                                    <span className="text-gray-400 text-md">
                                        {item.title}
                                    </span>

                                </div>

                                
                            );
                        })}

                    </div>

                </div>


                <div className="mt-20 w-full overflow-hidden">

                    <div className="flex gap-10 animate-scrollY">

                        {[...featuresData, ...featuresData].map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <div key={i} className="flex items-center gap-2 min-w-fit opacity-70 hover:opacity-100 transition">

                                    <Icon className={`${item.color} w-8 h-8`} />

                                    <span className="text-gray-400 text-md">
                                        {item.title}
                                    </span>

                                </div>

                                
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}