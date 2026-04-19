import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "JavaScript", value: 40, color: "#818cf8" }, 
    { name: "Java", value: 25, color: "#60a5fa" },       
    { name: "Python", value: 20, color: "#34d399" },     
    { name: "C++", value: 15, color: "#fbbf24" },       
];

export default function LanguageChart() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="bg-[070d1f] p-7 rounded-3xl border border-slate-800 shadow-xl  mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] font-bold text-slate-200 tracking-tight">
                    Language Usage
                </h3>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-md border border-indigo-500/20 font-medium">
                    Global
                </span>
            </div>

            <div className="relative h-50 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={65}
                            outerRadius={85}
                            paddingAngle={4}
                            dataKey="value"
                            stroke="#0f172a" 
                            strokeWidth={2}
                            onMouseEnter={(_, index) => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            cornerRadius={6}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                    className="transition-all duration-300 outline-none cursor-pointer"
                                    style={{
                                        filter: activeIndex === index ? `drop-shadow(0 0 8px ${entry.color}66)` : 'none',
                                        opacity: activeIndex === null || activeIndex === index ? 1 : 0.6
                                    }}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<div className="hidden" />} />
                    </PieChart>
                </ResponsiveContainer>

                {/* Medium Center Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                        {activeIndex !== null ? data[activeIndex].name : "Total"}
                    </span>
                    <span className="text-3xl font-bold text-white tabular-nums">
                        {activeIndex !== null ? `${data[activeIndex].value}%` : "100%"}
                    </span>
                </div>
            </div>

            {/* Structured List Legend */}
            <div className="mt-8 space-y-2">
                {data.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className={`flex items-center justify-between p-2 rounded-lg transition-colors duration-200 ${activeIndex === index ? "bg-slate-800/50" : "bg-transparent"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className={`text-xs font-medium transition-colors ${activeIndex === index ? "text-slate-100" : "text-slate-400"
                                }`}>
                                {item.name}
                            </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 font-mono">
                            {item.value}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}