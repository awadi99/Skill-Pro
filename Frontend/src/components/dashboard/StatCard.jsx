export default function StatCard({ title, value, Icon }) {
    return (
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md 
      hover:scale-[1.02] transition flex justify-between items-center">

            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <h3 className="text-xl font-bold mt-1">{value}</h3>
            </div>

            <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-violet-400" />
            </div>

        </div>
    );
}