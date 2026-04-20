import StatCard from "../components/dashboard/StatCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import { Code2, Brain, Mic, Clock, Flame } from "lucide-react";
import LanguageChart from "../components/dashboard/LanguageChart";
import DSAChart from "../components/dashboard/DSAChart";
import Heatmap from "../components/dashboard/HeatMap";
import StatCardData from '../components/dashboard/StatCardData';
export default function Dashboard() {
    return (
        
        <div className="space-y-6 ">

            
            <div className="flex justify-between items-center gap-5 w-full">
                <div>  
                <h1 className="text-2xl font-bold">
                    Welcome back
                </h1>             
                <p className="text-gray-400 text-sm">
                    Track your progress and stay consistent
                </p>
                </div>
                <div className="w-45 ">
                <StatCard  title="Daily Streak" value="15 Days" Icon={Flame} color="text-orange-500" bg_color="bg-orange-700/20"/>
                </div>
                
            </div>

            <StatCardData/>

            {/* Graph Section */}
            <div className="bg-[070d1f] border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                <h2 className="text-lg font-semibold mb-4 text-violet-300">
                    Weekly Progress
                </h2>

            
            <ProgressChart />
            </div>
            <Heatmap/>
            <LanguageChart/>
            <DSAChart/>

  
            

        </div>
    );
}