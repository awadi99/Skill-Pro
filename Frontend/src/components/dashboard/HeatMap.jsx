import React, { useMemo, useState } from "react";
import { format, subDays, eachDayOfInterval, startOfYear, endOfYear } from "date-fns";

const ContributionHeatmap = () => {
    const [hoveredDay, setHoveredDay] = useState(null);

    
    const days = useMemo(() => {
        const start = subDays(new Date(), 364); 
        const end = new Date();
        const interval = eachDayOfInterval({ start, end });

        return interval.map((date) => {
            // Mocking activity levels 0-4
            const count = Math.floor(Math.random() * 5);
            return {
                date: format(date, "yyyy-MM-dd"),
                displayDate: format(date, "MMM do, yyyy"),
                count,
            };
        });
    }, []);

    // Helper for colors
    const getColor = (count) => {
        if (count === 0) return "bg-slate-800/30";
        if (count === 1) return "bg-indigo-900/40 border border-indigo-500/20";
        if (count === 2) return "bg-indigo-700/60 shadow-[0_0_10px_rgba(99,102,241,0.2)]";
        if (count === 3) return "bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]";
        return "bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.4)]";
    };

    return (
        <div className="w-full bg-[070d1f] backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden relative">

            {/* 1. Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                    <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                        Activity Pulse
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </h2>
                    <p className="text-slate-500 text-sm font-medium mt-1">Your coding heartbeat over the last year</p>
                </div>

                <div className="flex items-center gap-4 bg-white/[0.03] p-2 rounded-2xl border border-white/5">
                    <div className="px-4 py-2 text-center">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Consistency</p>
                        <p className="text-xl font-black text-indigo-400">94%</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10" />
                    <div className="px-4 py-2 text-center">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Days Active</p>
                        <p className="text-xl font-black text-white">312</p>
                    </div>
                </div>
            </div>

            {/* 2. Optimized CSS Grid Heatmap */}
            <div className="relative group">
                <div
                    className="grid grid-flow-col gap-1.5 overflow-x-auto pb-4 no-scrollbar"
                    style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
                >
                    {days.map((day, i) => (
                        <div
                            key={day.date}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            className={`
                w-3.5 h-3.5 rounded-[3px] transition-all duration-300 cursor-crosshair
                hover:scale-150 hover:z-10 hover:rotate-12
                ${getColor(day.count)}
              `}
                        />
                    ))}
                </div>

                {/* Floating "Micro" Tooltip */}
                {hoveredDay && (
                    <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 flex flex-col items-center animate-in fade-in zoom-in duration-200 pointer-events-none">
                        <div className="bg-[#1e1b4b] border border-indigo-500/30 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md">
                            <p className="text-[10px] text-indigo-300 font-bold whitespace-nowrap uppercase tracking-widest">
                                {hoveredDay.displayDate} • {hoveredDay.count} Solved
                            </p>
                        </div>
                        <div className="w-2 h-2 bg-[#1e1b4b] border-r border-b border-indigo-500/30 rotate-45 -mt-1" />
                    </div>
                )}
            </div>

            {/* 3. Pro Legend & Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-6 border-t border-white/5 gap-4">
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>Cold</span>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map((v) => (
                            <div key={v} className={`w-3 h-3 rounded-[2px] ${getColor(v)}`} />
                        ))}
                    </div>
                    <span>On Fire</span>
                </div>

                <button className="text-xs font-bold text-indigo-400 hover:text-white transition-colors flex items-center gap-1 group">
                    View full report
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    );
};

export default ContributionHeatmap;