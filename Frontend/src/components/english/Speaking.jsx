import { Mic } from "lucide-react";
import { useState } from "react";

export const Speaking = () => {
    const [isActive, setIsActive] = useState(false);

    const trigger = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className="bg-black/10 border border-white/10 rounded-2xl p-5 sm:p-8 md:p-12 space-y-6">

            <div className="bg-neutral-900/70 border border-white/10 p-4 sm:p-5 rounded-3xl text-center">

                <p className="text-md mb-10 font-bold text-green-500/80">
                    TODAY'S TOPIC
                </p>

                <h2 className="text-[20px] sm:text-md font-semibold text-white">
                    "Tell me about a time you had to overcome a significant challenge in a team project."
                </h2>

                <div className="flex w-full justify-center mt-10 mb-10">

                    <button
                        onClick={trigger}
                        className={`h-24 w-24 flex items-center justify-center rounded-full transition-all duration-300
              ${isActive ? "bg-red-400 scale-110" : "bg-green-400"}
            `}
                    >
                        <Mic size={40} />
                    </button>

                </div>
                <div className="mb-20 mt-10" >
                    {isActive 
                    ?  "Listening... Speak clearly. "
                    :"Click to start recording your answer."}
                    </div>

            </div>

        </div>
    );
};

export default Speaking;