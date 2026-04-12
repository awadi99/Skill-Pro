
export const AddLayout =({children ,title,subtitle})=>{
    return(
        <>
        <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4">

            <div className="w-full max-w-md p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            
            <h2 className="text-2xl font-medium text-center">{title}</h2>
            <p className="text-gray-400 text-center mt-2">{subtitle}</p>
            </div>

            <div className="mt-6">{children}</div>
        </section>
        </>
    )
}