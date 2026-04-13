import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../schema/auth.schema.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";

export const Login= () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            console.log(data);
            reset();
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#020617] text-white">

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,#020617,#1e1b4b,#4c1d95,#312e81)] opacity-40 blur-2xl"></div>

                <div className="absolute top-[-80px] left-[20%] w-[250px] h-[250px] bg-purple-600 opacity-20 blur-3xl rounded-full animate-blob"></div>
                <div className="absolute bottom-[-80px] right-[20%] w-[250px] h-[250px] bg-violet-600 opacity-20 blur-3xl rounded-full animate-blob animation-delay-2000"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-md p-8 rounded-3xl 
        bg-gradient-to-br from-white/5 to-white/0 
        backdrop-blur-xl border border-white/10 
        shadow-[0_0_60px_rgba(124,58,237,0.15)]"
            >

                <h2 className="text-3xl font-bold text-center 
        bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 
        bg-clip-text text-transparent">
                    Welcome Back
                </h2>

                <p className="text-center text-gray-400 mt-2 text-sm">
                Login to access your <span className="text-violet-700">account</span> 
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
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>


                        <div className="relative">
                            <Input
                                type="password"
                                placeholder=" "
                                className="peer input-style"
                                {...register("password")}
                            />
                            <label className="label-style">Password</label>
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div>

                    </div>

                    <div className="w-full">
                        <Button
                            className="w-full"
                            type="submit" loading={loading}>
                            Login
                        </Button></div>


                </form>

                <p className="text-sm text-gray-400 mt-6 text-center">
                    Don't have an account Register? {" "}
                    <Link to="/register" className="text-violet-400 hover:underline">
                        Register
                    </Link>
                </p>

            </motion.div>
        </section>
    );
};