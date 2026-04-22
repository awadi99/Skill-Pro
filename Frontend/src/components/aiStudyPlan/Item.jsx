import React from 'react'
import {dailyData} from './ItemData.js';
import {motion} from 'framer-motion'
export default function Item() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
    { [...dailyData ].map((item, i) => {
        const Icon = item.icon;

        return (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex  items-center  gap-1 bg-stone-900   backdrop-blur-sm border border-white/10 rounded-2xl p-1  transition-all transform-gpu"
            >
                < div className='flex gap-3 px-3 py-2 items-center '>
                <Icon className={`  text-amber-50 sm:w-[40px] sm:h-[40px] p-2 rounded-2xl   ${item.bg}`} />
                
                <div className=''>
                <h3 className="text-[13px] text-white/40">{item.title}</h3>
                <p className="text-white font-semibold text-lg mt-1">{item.points}</p>
                
                </div>

                </div>

            </motion.div>
        );
    })}
</div>
  )
}
