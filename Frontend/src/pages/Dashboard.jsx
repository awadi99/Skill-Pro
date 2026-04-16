import StatCard from "../components/dashboard/StatCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import { Code2, Brain, Mic, Clock } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="space-y-6">

            
            <div>
                <h1 className="text-2xl font-bold">
                    Welcome back
                </h1>
                <p className="text-gray-400 text-sm">
                    Track your progress and stay consistent
                </p>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <StatCard title="DSA Solved" value="32" Icon={Code2} />
                <StatCard title="Aptitude" value="18" Icon={Brain} />
                <StatCard title="English Time" value="120m" Icon={Mic} />
                <StatCard title="Study Hours" value="24h" Icon={Clock} />
            </div>

            {/* Graph Section */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                <h2 className="text-lg font-semibold mb-4 text-violet-300">
                    Weekly Progress
                </h2>

                <ProgressChart />

            </div>
  
            

        </div>
    );
}