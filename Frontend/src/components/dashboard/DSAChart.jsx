import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { topic: "Arrays", solved: 30 },
  { topic: "DP", solved: 15 },
  { topic: "Graph", solved: 10 },
  { topic: "Tree", solved: 20 },
  { topic: "Stack", solved: 12 },
  { topic: "Strings", solved: 25 }, // Added one more for balance
];

export default function DSAChart() {
  return (
    <div className="bg-[070d1f] backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_60px_rgba(124,58,237,0.1)]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          DSA Solving Progress
        </h2>
        <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          Last 30 Days
        </span>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          {/* Subtle Grid Lines */}
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          
          <XAxis 
            dataKey="topic" 
            stroke="#6b7280" // gray-500
            tick={{ fill: '#9ca3af', fontSize: 12 }} // gray-400
            tickLine={false}
            axisLine={false}
            dy={10} // Padding
          />
          
          <YAxis 
            stroke="#6b7280"
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            dx={-10}
          />

          {/* BEAUTIFIED TOOLTIP */}
          <Tooltip 
            cursor={{ fill: 'rgba(139, 92, 246, 0.1)', radius: 8 }} // Custom hover background
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-[#1e1b4b] border border-white/10 rounded-xl p-4 shadow-2xl backdrop-blur-md">
                    <p className="text-xs text-gray-400 font-medium">{payload[0].payload.topic}</p>
                    <p className="text-xl font-bold text-violet-300 mt-1">
                      {payload[0].value} <span className="text-xs text-gray-500 font-normal">Problems</span>
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />


          <defs>
            <linearGradient id="colorSolved" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity={1} /> {/* violet-400 */}
              <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.8} /> {/* violet-600 */}
            </linearGradient>
          </defs>

          
          <Bar 
            dataKey="solved" 
            fill="url(#colorSolved)" 
            radius={[8, 8, 0, 0]} 
            barSize={35} 
            activeBar={{ fill: '#c4b5fd', stroke: '#a78bfa', strokeWidth: 1 }} // brighter hover
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}