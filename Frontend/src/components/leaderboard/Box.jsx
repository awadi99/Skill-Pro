import { Medal } from 'lucide-react';
import React from 'react';

export const Box = () => {
    // Data structure updated to use the Medal icon for the top 3
    const leaderboardData = [
        { rank: 1, name: "code_ninja", level: 48, xp: "15,420", solved: 450, color: "text-yellow-500" },
        { rank: 2, name: "algo_queen", level: 46, xp: "14,890", solved: 421, color: "text-slate-400" },
        { rank: 3, name: "byte_hacker", level: 44, xp: "13,200", solved: 390, color: "text-orange-500" },
        { rank: 4, name: "alexdev99", level: 42, xp: "12,450", solved: 342, isUser: true },
        { rank: 5, name: "dev_smith", level: 40, xp: "11,900", solved: 310 },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto p-2 sm:p-4 md:p-6">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-2 md:gap-4 bg-black/50 p-4 md:p-6 border-b border-white/5 
                                text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-gray-500 uppercase">
                    <div className="col-span-2 text-center">Rank</div>
                    <div className="col-span-5 sm:col-span-4">Developer</div>
                    <div className="col-span-3 sm:col-span-3 text-right">XP Points</div>
                    <div className="col-span-2 sm:col-span-3 text-right">Solved</div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-white/5">
                    {leaderboardData.map((player, i) => (
                        <div
                            key={i}
                            className={`grid grid-cols-12 gap-2 md:gap-4 p-3 md:p-5 items-center transition
                                ${player.isUser ? 'bg-blue-500/10 border-l-[3px] md:border-l-4 border-l-blue-500' : 'hover:bg-white/[0.02]'}`}
                        >
                            
                            {/* Rank Column with Medal Icon */}
                            <div className="col-span-2 flex justify-center items-center">
                                {player.rank <= 3 ? (
                                    <Medal 
                                        className={`${player.color} w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`} 
                                    />
                                ) : (
                                    <span className="text-gray-500 font-mono text-[10px] sm:text-xs md:text-sm">#{player.rank}</span>
                                )}
                            </div>

                            {/* Developer Column */}
                            <div className="col-span-5 sm:col-span-4 flex items-center gap-2 md:gap-4 min-w-0">
                                <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 flex items-center justify-center 
                                                font-bold text-white text-[10px] sm:text-sm shadow-lg
                                    ${player.isUser ? 'bg-blue-600' : 'bg-indigo-600'}`}>
                                    {player.name[0].toUpperCase()}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className={`font-bold text-[11px] sm:text-sm md:text-base truncate ${player.isUser ? 'text-blue-400' : 'text-white'}`}>
                                        {player.name}
                                    </span>
                                    <span className="text-[8px] sm:text-[10px] text-gray-500 flex items-center gap-0.5">
                                        <span className="text-yellow-500/80">⭐</span> Lv.{player.level}
                                    </span>
                                </div>
                            </div>

                            {/* XP Column */}
                            <div className="col-span-3 sm:col-span-3 text-right font-black text-violet-400 
                                            text-[11px] sm:text-sm md:text-lg tracking-tighter tabular-nums">
                                {player.xp}
                            </div>

                            {/* Solved Column */}
                            <div className="col-span-2 sm:col-span-3 text-right font-medium text-gray-300 
                                            text-[11px] sm:text-sm md:text-base tabular-nums">
                                {player.solved}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Box;