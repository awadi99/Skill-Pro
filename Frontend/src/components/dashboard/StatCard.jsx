function StatCard({ title, value, Icon, color,bg_color }) {
    return (




        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md 
                                        hover:scale-[1.02] transition  items-center ">



            <div className="flex justify-between items-center w-full h-15 ">
                <div className={`w-10 h-10 rounded-lg ${bg_color} flex items-center justify-center`}>
                    {Icon && <Icon className={`w-6 h-6 ${color}`} />}
                </div>
                <h3 className="text-xl font-bold mt-1 p-1.5">{value}</h3>
            </div>

                

                <p className="text-gray-400 text-sm">{title}</p>

            

        </div>
    );
}

export default StatCard;