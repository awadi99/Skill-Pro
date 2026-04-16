import { Flame } from "lucide-react";

export default function Topbar() {
    return (
        <header className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md">

            <input
                placeholder="Search..."
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg outline-none focus:border-violet-500 text-sm"
            />

            <div className="flex items-center gap-4">

                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg text-sm">
                    <Flame className="w-4 h-4 text-orange-400" />
                    15 Day Streak
                </div>

                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold">
                    A
                </div>

            </div>

        </header>
    );
}