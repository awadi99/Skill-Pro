import { useEffect, useMemo, useState } from "react";

export default function Heatmap() {
    const [backendData, setBackendData] = useState({});

    // 🔥 TEMP DATA (replace with API)
    useEffect(() => {
        const temp = {};
        const today = new Date();

        for (let i = 0; i < 365; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i);

            const key = date.toISOString().split("T")[0];
            temp[key] = Math.floor(Math.random() * 5);
        }

        setBackendData(temp);
    }, []);

    // 🎨 COLOR SYSTEM
    const getColor = (count) => {
        if (!count) return "bg-[#0f172a]";
        if (count === 1) return "bg-[#2e1065]";
        if (count === 2) return "bg-[#4c1d95]";
        if (count === 3) return "bg-[#7c3aed]";
        return "bg-[#3b82f6]";
    };

    const todayStr = new Date().toISOString().split("T")[0];

    // 🔥 BUILD HEATMAP STRUCTURE
    const { weeks, months } = useMemo(() => {
        const weeks = [];
        const months = [];
        let currentWeek = [];

        const start = new Date();
        start.setDate(start.getDate() - 364);

        for (let i = 0; i < 365; i++) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);

            const key = date.toISOString().split("T")[0];
            const day = date.getDay();

            // month labels
            if (day === 0) {
                months.push({
                    label: date.toLocaleString("default", { month: "short" }),
                    index: weeks.length,
                });
            }

            currentWeek[day] = {
                date: key,
                count: backendData[key] || 0,
            };

            if (day === 6) {
                weeks.push(currentWeek);
                currentWeek = [];
            }
        }

        return { weeks, months };
    }, [backendData]);

    // 🔥 STREAK SYSTEM
    const calculateStreak = () => {
        let streak = 0;
        let current = new Date();

        while (true) {
            const key = current.toISOString().split("T")[0];

            if (backendData[key] > 0) {
                streak++;
                current.setDate(current.getDate() - 1);
            } else {
                break;
            }
        }

        return streak;
    };

    const streak = calculateStreak();

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-violet-300">
                    Daily Progress
                </h2>

                <span className="text-sm text-gray-400">
                    🔥 {streak} day streak
                </span>
            </div>

            {/* MONTH LABELS */}
            <div className="w-full overflow-x-auto">
                <div className="inline-flex ml-8 mb-2 gap-1">
                    {weeks.map((_, i) => {
                        const month = months.find(m => m.index === i);
                        return (
                            <div key={i} className="w-3 text-[10px] text-gray-400">
                                {month ? month.label : ""}
                            </div>
                        );
                    })}
                </div>

                {/* HEATMAP GRID */}
                <div className="inline-flex gap-1">

                    {weeks.map((week, i) => (
                        <div key={i} className="flex flex-col gap-1">

                            {Array.from({ length: 7 }).map((_, day) => {
                                const item = week[day];

                                return (
                                    <div
                                        key={day}
                                        title={
                                            item
                                                ? `${item.date} • ${item.count} activity`
                                                : ""
                                        }
                                        className={`
                      w-3 h-3 rounded-sm border border-white/5
                      ${item ? getColor(item.count) : "bg-transparent"}
                      ${item?.date === todayStr
                                                ? "ring-2 ring-blue-400"
                                                : ""
                                            }
                      hover:scale-125 transition duration-200 cursor-pointer
                    `}
                                    />
                                );
                            })}

                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}