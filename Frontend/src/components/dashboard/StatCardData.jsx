import React from 'react'
import { Code2, Brain, Mic, Clock } from "lucide-react";
import StatCard from '../dashboard/StatCard';

export default function StatCardData() {
    return (


        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <StatCard title="DSA Solved" value="32" Icon={Code2} color="text-indigo-700" bg_color="bg-indigo-700/20" />
            <StatCard title="Aptitude" value="18" Icon={Brain} color="text-violet-700" bg_color="bg-indigo-700/20" />
            <StatCard title="English Time" value="120m" Icon={Mic} color="text-green-500" bg_color="bg-green-700/20" />
            <StatCard title="Study Hours" value="24h" Icon={Clock} color="text-orange-500" bg_color="bg-orange-700/20" />
        </div>
    )
}

