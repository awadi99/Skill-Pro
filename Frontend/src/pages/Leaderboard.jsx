import { CrownIcon } from "lucide-react";

import Box from "../components/leaderboard/Box";

export default function English() {
    
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-3xl space-y-6">

                <div className="flex-col items-center justify-center w-full max-w-7xl ">
                    <div className="mt-10  ">
                        <p className="mx-auto bg-orange-400/15 h-25 w-25 p-5 rounded-full mb-5 "><CrownIcon size={60} color="ORANGE"  /></p>

                        <p className="text-3xl sm:text-3xl font-bold text-white  text-center">Global Leaderboard</p>
                    </div>
                    <p className="text-gray-400 text-center text-md sm:text-[17px]">
                    See how you stack up against top developers
                    </p>
                </div>

                <Box/>



          


            </div>
        </div>
    );
}