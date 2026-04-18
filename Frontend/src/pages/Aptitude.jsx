
import { BrainCircuit } from "lucide-react";
import Box from "../components/aptitude/Box";
import ProgressBar from "../components/aptitude/ProgressBar";



export default function Aptitude(timeLeft) {
    
    return (
        <div className="flex justify-center w-full">

            <div className="w-full max-w-3xl space-y-6">

                {/* Header */}
                <div>
                    <div className="text-3xl font-bold text-white flex items-center gap-1.5">
                        <BrainCircuit size={30} color="#ad46ff"/>Aptitude Sprint
                    </div>
                    <p className="text-gray-400 text-[17px]">
                        &nbsp;Quantitative & Logical Reasoning
                    </p>
                        {/* <div>{timeLeft}</div> */}
                </div>

                {/* Progress Bar */}
                    
                    <ProgressBar time={timeLeft} />
                {/* Card */}
                    <Box/>

            </div>
        </div>
    );
}

