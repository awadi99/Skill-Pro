import React from 'react'
import { Sparkles } from 'lucide-react'
import Item from '../components/aiStudyPlan/Item';
import ProgressBar from '../components/aiStudyPlan/ProgressBar';
import StudyTask from '../components/aiStudyPlan/StudyTask';
import AiCoach from '../components/aiStudyPlan/AiCoach';

export default function AiStudyPlan() {
    return (

        <div className="flex justify-center w-full min-h-screen  px-4 sm:px-6 lg:px-8 py-6 sm:py-10 contrast-115">
            <div className="w-full max-w-7xl space-y-8">

                {/* Header */}
                <div>
                    <div className='flex gap-2'>
                        <Sparkles size={30} className="sm:w-[40px] sm:h-[40px] p-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl" />
                        <div>
                            <h1 className='text-2xl sm:text-2xl font-bold text-white'>AI Study Plan</h1>
                            <p className="text-gray-400 text-md sm:text-[15px]">
                                Personalised by AI · Updated just now
                            </p>
                        </div>
                    </div>
                </div>
                <Item />

                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                    {/* LEFT SIDE: Main Feed (Scrolls) */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* main */}
                        <div className="hidden lg:block p-8 border  bg-stone-900 border-white/5 rounded-[2rem] border-dashed text-center">
                            <p className="text-white text-xs uppercase tracking-widest font-bold">Progress</p>
                            <ProgressBar/>

                        </div>
                        <StudyTask/>
                    </div>
                    
                    {/* RIGHT SIDE: Sidebar (Sticky) */}
                    {/* The 'lg:sticky' ensures this panel stays visible while scrolling through long task lists */}

                        <AiCoach/>

                </div>

            </div>
        </div>
    )
};
