import React, { useState } from 'react'
import { motion } from 'framer-motion';
import studyData from './StudyData';
import { Calendar, CheckCircle2, Clock, ChevronRight } from 'lucide-react';

export default function StudyTask() {
    const [view, setView] = useState('today'); // State for toggle buttons
    const [completed, setCompleted] = useState([]); // State for radio buttons

    const toggleCheck = (id) => {
        setCompleted(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className='w-full p-4 sm:p-8 border bg-stone-900 border-white/5 rounded-[1.5rem] sm:rounded-[2rem]'>
            {/* Header with Responsive Toggle */}
            <div className='flex flex-row justify-between items-center mb-6 sm:mb-10'>
                <div className='flex items-center gap-2'>
                    <Calendar className='text-blue-600 h-6 w-6 sm:h-8 sm:w-8'/>
                    <h1 className='text-white text-sm sm:text-md font-semibold'>Study Tasks</h1>
                </div>

                <div className="flex bg-black/40 p-1 rounded-xl border border-white/5 shadow-inner">
                    <button 
                        onClick={() => setView('today')}
                        className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-bold rounded-lg transition-all ${view === 'today' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Today
                    </button>
                    <button 
                        onClick={() => setView('week')}
                        className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-bold rounded-lg transition-all ${view === 'week' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        This Week
                    </button>
                </div>
            </div>

            {/* Responsive Task List */}
            <div className="flex flex-col gap-3">
                {[...studyData].map((item, i) => {
                    const Icon = item.icon;
                    const isDone = completed.includes(i);
                    
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className={`border transition-all duration-300 rounded-2xl ${isDone ? 'bg-white/[0.02] border-transparent opacity-50' : 'bg-stone-900 border-white/10 hover:border-blue-500/30'}`}
                        >
                            <div className='flex justify-between items-center px-3 py-3 sm:px-4 sm:py-4 gap-3'>
                                <div className='flex items-center gap-3 sm:gap-5 flex-1 min-w-0'>
                                    {/* Radio Button Logic */}
                                    <button onClick={() => toggleCheck(i)} className="flex-shrink-0 transition-transform active:scale-90">
                                        {isDone ? (
                                            <CheckCircle2 size={20} className="text-emerald-500" />
                                        ) : (
                                            <div className="w-5 h-5 rounded-full border-2 border-stone-700 group-hover:border-blue-500/50" />
                                        )}
                                    </button>

                                    {/* Responsive Icon */}
                                    <Icon className={`flex-shrink-0 ${item.color} w-8 h-8 sm:w-10 sm:h-10 p-2 rounded-2xl ${item.bg}`} />

                                    <div className="min-w-0">
                                        <h3 className={`text-xs sm:text-sm font-bold truncate ${isDone ? 'text-gray-500 line-through' : 'text-white'}`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-[10px] uppercase font-black tracking-widest text-gray-600 truncate">
                                            {item.category || "Development"}
                                        </p>
                                    </div>
                                </div>

                                {/* Meta Data: Hides some elements on extra small screens for responsiveness */}
                                <div className='flex items-center gap-3 flex-shrink-0'>
                                    <div className='hidden xs:flex items-center gap-1.5 text-gray-500 font-mono text-[10px]'>
                                        <Clock size={12} />
                                        <span>30m</span>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border ${item.prio === 'high' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'}`}>
                                        {item.prio || 'high'}
                                    </span>
                                    <ChevronRight size={14} className="text-stone-800 hidden sm:block" />
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
};