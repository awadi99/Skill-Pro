import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Area,
    AreaChart, 
} from "recharts";

const data = [
    { day: "Mon", value: 2 },
    { day: "Tue", value: 4 },
    { day: "Wed", value: 3 },
    { day: "Thu", value: 6 },
    { day: "Fri", value: 5 },
    { day: "Sat", value: 7 },
    { day: "Sun", value: 4 },
];

export default function ProgressChart() {
    return (
        <div className=" backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_60px_rgba(59,130,246,0.1)]">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-white bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                        Activity Trends
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">Hours spent practicing</p>
                </div>
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <span className="text-blue-400 text-xs font-semibold">+12% vs last week</span>
                </div>
            </div>

            <div className="w-full h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                    
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />

                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                            dy={10}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                        />

                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-[#020617] border border-white/10 rounded-xl p-3 shadow-2xl backdrop-blur-md">
                                            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                                                {payload[0].payload.day}
                                            </p>
                                            <p className="text-lg font-bold text-blue-500">
                                                {payload[0].value} <span className="text-xs font-normal text-gray-00">hrs</span>
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />

                        
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="none"
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />

                        
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={4}
                            dot={{ r: 4, fill: "#3b82f6", strokeWidth: 2, stroke: "#020617" }}
                            activeDot={{ r: 6, strokeWidth: 0 }}
                            animationDuration={2000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}