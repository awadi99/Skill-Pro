import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../schema/auth.schema.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";

export const Login = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
        mode: "onBlur", 
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            console.log(data);
            reset();
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#020617] text-white">
            
            
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#020617_100%)] opacity-70"></div>

                
                <div className="absolute top-[-5%] left-[10%] w-[300px] h-[300px] bg-purple-600/20 blur-[80px] rounded-full animate-blob will-change-transform"></div>
                <div className="absolute bottom-[-5%] right-[10%] w-[300px] h-[300px] bg-violet-600/20 blur-[80px] rounded-full animate-blob animation-delay-2000 will-change-transform"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md p-8 rounded-3xl 
                    bg-white/[0.03] border border-white/10 
                    backdrop-blur-md shadow-2xl" 
                    
            >

                <h2 className="text-3xl font-bold text-center 
                    bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 
                    bg-clip-text text-transparent">
                    Welcome Back
                </h2>

                <p className="text-center text-gray-400 mt-2 text-sm">
                    Login to access your <span className="text-violet-500 font-semibold">account</span> 
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                    <div className="space-y-5">
                        <div className="relative">
                            <Input
                                type="email"
                                placeholder=" "
                                className="peer input-style"
                                {...register("email")}
                            />
                            <label className="label-style">Email</label>
                            {errors.email && <p className="text-xs text-red-400 mt-1 pl-1">{errors.email.message}</p>}
                        </div>

                        <div className="relative">
                            <Input
                                type="password"
                                placeholder=" "
                                className="peer input-style"
                                {...register("password")}
                            />
                            <label className="label-style">Password</label>
                            {errors.password && <p className="text-xs text-red-400 mt-1 pl-1">{errors.password.message}</p>}
                        </div>
                    </div>

                    <Button
                        className="w-full shadow-lg shadow-purple-500/20 active:scale-[0.98] transition-transform"
                        type="submit" 
                        loading={loading}
                    >
                        Login
                    </Button>
                </form>

                <p className="text-sm text-gray-400 mt-6 text-center">
                    Don't have an account? {" "}
                    <Link to="/register" className="text-violet-400 hover:text-violet-300 transition-colors hover:underline">
                        Register
                    </Link>
                </p>
            </motion.div>
        </section>
    );
};