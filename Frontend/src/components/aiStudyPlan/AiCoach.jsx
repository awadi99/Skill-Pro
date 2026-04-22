import React from 'react'
import { Brain,Send, Sparkles } from 'lucide-react'

export default function AiCoach() {
    const quickQuestions = [
        "What should I study today?",
        "How do I improve my DP skills?",
        "Create a 7-day contest prep plan",
        "What are my weakest topics?"
    ];

    return (
        <aside className="lg:sticky lg:top-10 h-fit">
            <div className="w-full bg-[#0d0d0d] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">

                {/* Header - Matches image gradient and status */}
                <div className="p-5 border-b border-white/5 bg-gradient-to-b from-violet-500/10 to-transparent">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/20">
                                <Brain size={20} className="text-white" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#0d0d0d] rounded-full" />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-white">AI Study Coach</h2>
                            <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-green-500 font-bold uppercase tracking-tight">● Online</span>
                                <span className="text-[10px] text-gray-500 font-medium">· Personalised for you</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message Feed */}
                <div className="flex-1 p-5 overflow-y-auto space-y-4 min-h-[300px]">
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <Sparkles size={14} className="text-violet-400" />
                        </div>
                        <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-2xl rounded-tl-none text-xs sm:text-sm text-gray-300 leading-relaxed max-w-[85%]">
                            Hey there! 👋 I'm your AI study coach. I've analysed your progress and built a personalised plan. Ask me anything or pick a quick question below!
                        </div>
                    </div>
                </div>

                {/* Quick Questions & Input */}
                <div className="p-5 pt-0 space-y-4 bg-gradient-to-t from-black/20 to-transparent">
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Quick questions</p>
                        <div className="flex flex-wrap gap-2">
                            {quickQuestions.map((q, i) => (
                                <button
                                    key={i}
                                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-gray-400 font-medium hover:bg-white/5 hover:text-white hover:border-violet-500/30 transition-all text-left"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Ask your AI coach anything..."
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-xs text-white focus:outline-none focus:border-violet-500/50 transition-all placeholder:text-gray-600"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-violet-600/10 text-violet-400 rounded-xl hover:bg-violet-600 hover:text-white transition-all">
                            <Send size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </aside>
    )
}