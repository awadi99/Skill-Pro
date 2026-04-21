import { motion } from "framer-motion";
import { infoBadges } from './AchievementData.js';

export const Achievement2 = () => {
    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            { [...infoBadges ].map((item, i) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex flex-col items-center text-center gap-1 bg-stone-900/90 contrast-112  backdrop-blur-sm border border-white/10 rounded-2xl p-5  transition-all transform-gpu"
                    >
                        <div className={`p-3 rounded-xl   ${item.bg_color}`}>
                            <Icon className={`  ${item.color} w-8 h-8`} />
                        </div>

                        <div>
                            <h3 className="text-[13px] text-white/40">{item.title}</h3>
                            <p className="text-white font-semibold text-lg mt-1">{item.points}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Achievement2;