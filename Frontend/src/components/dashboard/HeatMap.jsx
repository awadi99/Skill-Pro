import React, { useMemo, useState } from "react";
import { format, subDays, eachDayOfInterval, isSameMonth, startOfMonth } from "date-fns";

const ContributionHeatmap = () => {
    const [hoveredDay, setHoveredDay] = useState(null);

    const days = useMemo(() => {
        const start = subDays(new Date(), 364);
        const end = new Date();
        const interval = eachDayOfInterval({ start, end });

        return interval.map((date) => {
            const count = Math.floor(Math.random() * 5);
            return {
                date: date, 
                dateStr: format(date, "yyyy-MM-dd"),
                displayDate: format(date, "MMM do, yyyy"),
                count,
            };
        });
    }, []);

    const getColor = (count) => {
        if (count === 0) return "bg-slate-800/30";
        if (count === 1) return "bg-indigo-900/40 border border-indigo-500/10";
        if (count === 2) return "bg-indigo-700/60 shadow-[0_0_8px_rgba(99,102,241,0.1)]";
        if (count === 3) return "bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.2)]";
        return "bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.3)]";
    };

    return (
        <div className="w-full bg-[#070d1f] p-6 sm:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">

            {/* 1. Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-1 bg-indigo-500 rounded-full" />
                    <div>
                        <h2 className="text-xl font-black text-white tracking-tight">Activity Pulse</h2>
                        <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">Live Data Feed</p>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-white/[0.03] p-1.5 rounded-2xl border border-white/5 w-fit mx-auto">

                    <div className="flex flex-col items-center justify-center px-6 py-2 min-w-[100px]">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">
                            Consistency
                        </p>
                        <p className="text-xl font-black text-indigo-400 leading-none">
                            94%
                        </p>
                    </div>


                    <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    {/* Days Active Stat */}
                    <div className="flex flex-col items-center justify-center px-6 py-2 min-w-[100px]">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">
                            Days Active
                        </p>
                        <p className="text-xl font-black text-white leading-none">
                            312
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="relative pt-6">
                <div
                    className="grid grid-flow-col gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar touch-pan-x"
                    style={{
                        gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
                    }}
                >
                    {days.map((day, i) => {
                       
                        const isFirstDayOfMonth = day.date.getDate() === 1;
                        
                        const isTopRow = i % 7 === 0;

                        return (
                            <div key={day.dateStr} className="relative">
                                {isTopRow && isFirstDayOfMonth && (
                                    <span className="absolute -top-6 left-0 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                                        {format(day.date, "MMM")}
                                    </span>
                                )}
                                <div
                                    onMouseEnter={() => setHoveredDay(day)}
                                    onMouseLeave={() => setHoveredDay(null)}
                                    className={`
                                        w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[2px] sm:rounded-[3px] 
                                        transition-all duration-500 shrink-0
                                        hover:scale-150 hover:z-50 hover:brightness-125
                                        ${getColor(day.count)}
                                    `}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Tooltip */}
                {hoveredDay && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none animate-in fade-in slide-in-from-bottom-2 z-[60]">
                        <div className="bg-[#1e1b4b]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg shadow-2xl">
                            <p className="text-[10px] text-white font-bold whitespace-nowrap">
                                {hoveredDay.count} Solved <span className="text-slate-500 mx-1">•</span> {hoveredDay.displayDate}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            
            <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Low</span>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map((v) => (
                            <div key={v} className={`w-2.5 h-2.5 rounded-[2px] ${getColor(v)} shadow-none`} />
                        ))}
                    </div>
                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">High</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium italic">Updated 2m ago</p>
            </div>
        </div>
    );
};

export default ContributionHeatmap;