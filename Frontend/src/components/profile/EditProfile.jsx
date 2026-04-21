import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from "framer-motion";
import { Camera, ArrowLeft, User, AtSign, Mail, Lock, ShieldCheck } from 'lucide-react';

import Button from '../ui/Button';
import Input from '../ui/Input'; 
import { editProfileSchema } from '../../schema/user.profile.schema';

export default function EditProfile() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const user = {
        fullName: "Jonh Doe",
        userName: "jonhdoe",
        email: "jonhdoe@example.com",
        profilePic: "/image/SkillPro1.png"
    };

    const [preview, setPreview] = useState(user.profilePic);
    const [selectedFile, setSelectedFile] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
            password: "" 
        }
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden bg-[#020617] text-white font-sans">
            
            {/* Background Decorations - Hidden on small screens to save GPU/Battery */}
            <div className="absolute inset-0 -z-10 hidden sm:block">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#020617_100%)] opacity-70"></div>
                <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-600/10 blur-[100px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-5%] right-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-violet-600/10 blur-[100px] rounded-full animate-pulse"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-xl relative"
            >
                {/* Main Container with responsive padding */}
                <div className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl relative">
                    
                    {/* Responsive Back Button - Smaller on mobile */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute top-6 sm:top-8 left-6 sm:left-8 p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all active:scale-90"
                    >
                        <ArrowLeft size={18} className="sm:w-[20px] sm:h-[20px]" />
                    </button>

                    {/* Header with responsive spacing */}
                    <div className="text-center mb-8 sm:mb-10 pt-10 sm:pt-4">
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
                            Account Settings
                        </h2>
                        <p className="text-gray-500 text-xs sm:text-sm mt-2 px-4">Manage your public presence and security</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-7">
                        
                        {/* Profile Image */}
                        <div className="flex flex-col items-center mb-2 sm:mb-4">
                            <div className="relative">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full ring-2 ring-violet-500/30 p-1">
                                    <img 
                                        src={preview} 
                                        alt="Avatar" 
                                        className="w-full h-full rounded-full object-cover" 
                                    />
                                </div>
                                <label className="absolute bottom-0 right-0 p-2 sm:p-2.5 bg-violet-600 rounded-full cursor-pointer border-2 sm:border-4 border-[#0a0f1d] shadow-xl hover:scale-110 active:scale-95 transition-all">
                                    <Camera size={14} className="sm:w-[16px] sm:h-[16px]" />
                                    <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                                </label>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-5">
                            {/* Inputs - Using pl-10 on mobile and pl-12 on desktop for icons */}
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-violet-400 transition-colors" size={16} />
                                <Input
                                    {...register("fullName")}
                                    className="pl-10 sm:pl-12 h-12 sm:h-14 bg-white/[0.03] border-white/10 rounded-xl sm:rounded-2xl"
                                    placeholder="Full Name"
                                />
                                {errors.fullName && <p className="text-[10px] text-red-400 mt-1 ml-2">{errors.fullName.message}</p>}
                            </div>

                            <div className="relative group">
                                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-violet-400 transition-colors" size={16} />
                                <Input
                                    {...register("userName")}
                                    className="pl-10 sm:pl-12 h-12 sm:h-14 bg-white/[0.03] border-white/10 rounded-xl sm:rounded-2xl"
                                    placeholder="Username"
                                />
                                {errors.userName && <p className="text-[10px] text-red-400 mt-1 ml-2">{errors.userName.message}</p>}
                            </div>

                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-violet-400 transition-colors" size={16} />
                                <Input
                                    {...register("email")}
                                    className="pl-10 sm:pl-12 h-12 sm:h-14 bg-white/[0.03] border-white/10 rounded-xl sm:rounded-2xl"
                                    placeholder="Email Address"
                                />
                                {errors.email && <p className="text-[10px] text-red-400 mt-1 ml-2">{errors.email.message}</p>}
                            </div>

                            {/* Security Section */}
                            <div className="pt-2 sm:pt-4">
                                <div className="flex items-center gap-2 mb-3 px-1 text-gray-400">
                                    <ShieldCheck size={14} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Security Update</span>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-violet-400 transition-colors" size={16} />
                                    <Input
                                        type="password"
                                        {...register("password")}
                                        className="pl-10 sm:pl-12 h-12 sm:h-14 bg-white/[0.03] border-white/10 rounded-xl sm:rounded-2xl"
                                        placeholder="New password (optional)"
                                    />
                                    {errors.password && <p className="text-[10px] text-red-400 mt-1 ml-2">{errors.password.message}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Buttons - Mobile: Full width / Desktop: Side-by-side */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                            <Button 
                                type="submit" 
                                loading={loading}
                                className="w-full sm:flex-[2] h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 border-none font-bold shadow-lg shadow-violet-600/20"
                            >
                                Save Changes
                            </Button>
                            <Button 
                                type="button" 
                                onClick={() => navigate(-1)}
                                className="w-full sm:flex-1 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border-white/10 text-gray-400"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}