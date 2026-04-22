import React from 'react'

export default function ProgressBar() {
    return (
        <div className="w-full space-y-2">
            <div className='flex justify-between items-center w-full'>
                <h1 className='text-white text-[10px] sm:text-xs uppercase tracking-widest font-bold'>
                    Daily Progress
                </h1>
                <h1 className='text-white text-[10px] sm:text-xs uppercase tracking-widest font-bold'>
                    25 / 165 min
                </h1>
            </div>

            {/* The Bar Container */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full transition-all duration-1000 bg-gradient-to-r from-blue-500 to-violet-500"
                    /* Using percentage ensures visibility on all screen widths */
                    style={{ width: '29%' }} 
                />
            </div>

            <div className='flex justify-start items-center w-full'>
                <h1 className='text-white/50 text-[10px] sm:text-xs tracking-widest font-bold'>
                    29% complete — 5 tasks remaining
                </h1>
            </div>
        </div>
    )
}