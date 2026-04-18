import { Mic } from "lucide-react";
import  EmailWriting  from "../components/english/EmailWriting";
import Items from "../components/english/Items";
import Speaking from "../components/english/Speaking";
import { useState } from "react";

export default function English() {
    const [active, setActive] = useState("speaking");
    return (
        <div className="flex justify-center w-full  sm:px-6">
            <div className="w-full max-w-7xl space-y-6">

                <div>
                    <div className="text-3xl sm:text-3xl font-bold text-white flex items-center gap-2">
                        <Mic size={30} className="sm:w-[30px] sm:h-[30px]" color="rgb(0, 188, 125)" />
                        English Fluency
                    </div>
                    <p className="text-gray-400 text-md sm:text-[17px]">
                        AI-assisted communication skills for interviews
                    </p>
                </div>

                <Items active={active} setActive={setActive} />

                {active === "speaking" && <Speaking />}
                {active === "email" && <EmailWriting />}


            </div>
        </div>
    );
}