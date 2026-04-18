import { Mic, PenTool } from "lucide-react";
import { useState } from "react";

export const Items = ({active,setActive}) => {
    

    return (
        <div className="flex justify-start w-full">
            <div className="w-full max-w-3xl space-y-6">

                <div className="flex flex-col sm:flex-row gap-3">

                    <button
                        onClick={() => setActive("speaking")}
                        className={`flex items-center justify-center sm:justify-start gap-3 py-3 sm:py-4 px-4 w-full sm:w-50 opacity-75 hover:opacity-100 
              ${active === "speaking"
                                ? "opacity-100 text-green-400 bg-green-500/20 rounded-3xl border border-green-500/70"
                                : "bg-white/10 text-white rounded-3xl"
                            }`}
                    >
                        <Mic size={18} />
                        Speaking Mock
                        
                    </button>

                    <button
                        onClick={() => setActive("email")}
                        className={`flex items-center justify-center sm:justify-start gap-3 py-3 sm:py-4 px-4 w-full sm:w-50 opacity-75 hover:opacity-100 
              ${active === "email"
                                ? "opacity-100 text-green-400 bg-green-500/20 rounded-3xl border border-green-500/70"
                                : "bg-white/10 text-white rounded-3xl"
                            }`}
                    >
                        <PenTool size={18} />
                        Email Writing
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Items;