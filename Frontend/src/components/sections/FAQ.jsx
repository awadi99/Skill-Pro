import React, { useState } from "react";
import { motion } from "framer-motion";
import { faqData } from "../../constants/faqData";

export default function FAQ() {
    const [active, setActive] = useState(null);

    return (
        <section className="py-20 px-4 bg-neutral-950 text-white" id="fAQ">

            <div className="max-w-3xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-violet-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="mt-10 space-y-4 text-left">

                    {faqData.map((item, i) => (
                        <div
                            key={i}
                            className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden"
                        >

                            <button
                                onClick={() => setActive(active === i ? null : i)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className="font-medium">{item.question}</span>
                                <span className="text-violet-400">
                                    {active === i ? "-" : "+"}
                                </span>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: active === i ? "auto" : 0,
                                    opacity: active === i ? 1 : 0,
                                }}
                                transition={{ duration: 0.25 }}
                                className="px-5 overflow-hidden"
                            >
                                <p className="pb-4 text-gray-400 text-sm">
                                    {item.answer}
                                </p>
                            </motion.div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}