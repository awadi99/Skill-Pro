import React from 'react'
import Button from '../components/ui/Button';
import Achievement from '../components/profile/Achievement';
import Achievement2 from '../components/profile/Achievement2';
import { TrophyIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const navigate = useNavigate();
    return (
        <div className="flex justify-center p-4">
            <div className="w-full max-w-4xl space-y-6">
                
                {/* Profile Header Card */}
                <div className="bg-stone-900/90 contrast-112  rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                    <div className="h-32 w-full bg-gradient-to-r from-[#1e3a8a]/40 via-[#4c1d95]/40 to-[#0a0a0a]"></div>

                    <div className="relative px-6 py-4 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <div className="relative -mt-16">
                                <div className="w-28 h-28 rounded-full border-4 border-[#0a0a0a] overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/image/SkillPro1.png"
                                        alt="Aditya"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <h1 className="text-2xl font-bold text-white tracking-tight">
                                    Aditya Waghmare
                                </h1>
                                <h3 className="text-blue-500 font-medium text-sm">
                                    @awadi.99
                                </h3>
                            </div>
                        </div>

                        <Button onClick={() => navigate('edit')} >
                            Edit Profile
                        </Button>
                    </div>
                </div>

                {/* Achievements Card */}
                <div className="rounded-3xl  p-0">
                    <Achievement/>
                </div>


                <div className="bg-[#0a0a0a] rounded-3xl border border-white/5 shadow-2xl p-6">
                    <h2 className="text-xl font-semibold mb-6 text-white px-2 flex gap-2"><TrophyIcon color='orange'/>Earned Badges</h2>
                    <Achievement2/>
                </div>

            </div>
        </div>
    )
}