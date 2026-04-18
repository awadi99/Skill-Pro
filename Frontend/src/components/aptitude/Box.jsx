import Button from '../ui/Button';

export const Box = () => {
    return (
        <>
            <div className="bg-black/10 border border-white/10 rounded-2xl p-12 space-y-6">
                <p className="text-sm text-violet-400">
                    Questions 1 of 10000
                    { }
                </p>

                <h2 className="text-lg font-semibold text-white">
                    { }
                    A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?
                </h2>

                {/* Options */}
                <div className="space-y-4">
                    
                    {["120 metres", "180 metres", "150 metres", "100 metres"].map((opt, i) => (
                        <div
                            key={i}
                            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition flex items-center gap-4"
                        >
                            <span className="w-8 h-8 flex items-center justify-center rounded-[12px] bg-white/10 text-sm">
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span className="text-gray-300">{opt}</span>
                        </div>
                    ))}


                </div>
                    <hr className='text-gray-700' />
                {/* Button */}
                <div className="flex justify-end">
                    <Button className="px-6 py-3 rounded-xl hover:bg-violet-500 transition">
                        Submit Answer
                    </Button>
                </div>

            </div>
        </>
    )
}

export default Box;