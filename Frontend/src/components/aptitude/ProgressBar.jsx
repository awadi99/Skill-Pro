import { useEffect, useState } from "react";
import { Clock, Clock1 } from "lucide-react";


export  function ProgressBar({ duration = 75 }) {
    const [timeLeft, setTimeLeft] = useState(duration);

    
    useEffect(() => {
        if (timeLeft ===0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    
    const progress = (timeLeft / duration) * 100;

    return (
        <div className="w-full space-y-2">

            
            <div className="flex justify-end text-sm text-blue-400 font-semibold  ">
                    <div className={`  text-2xl h-12 w-30 p-2 mb-2  rounded-2xl flex gap-2
                        ${timeLeft <11 ? "animate-pulse text-red-600 bg-red-600/20" : "text-violet-500 bg-violet-700/10"}`}><Clock size={30}/>00:{timeLeft}</div>
            </div>

            
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                <div
                    className={`h-full transition-all duration-1000 
          ${timeLeft < 11 ? "text-red-600 bg-red-500" : "bg-gradient-to-r from-blue-500 to-violet-500"}`}
                    style={{ width: `${progress}%` }}
                />

            </div>

        </div>
    );
}

export default ProgressBar;