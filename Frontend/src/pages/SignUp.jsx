import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../schema/auth.schema.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";

export const SignUp = () => {
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#020617_100%)] opacity-60"></div>

        
        <div className="absolute top-[-10%] left-[15%] w-[300px] h-[300px] bg-purple-600/10 blur-[90px] rounded-full animate-blob will-change-transform"></div>
        <div className="absolute bottom-[-10%] right-[15%] w-[300px] h-[300px] bg-violet-600/10 blur-[90px] rounded-full animate-blob animation-delay-2000 will-change-transform"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 rounded-3xl 
          bg-white/[0.02] border border-white/10 
          backdrop-blur-md shadow-2xl" 
          
      >
        <h2 className="text-3xl font-bold text-center 
          bg-gradient-to-r from-violet-300 via-purple-400 to-indigo-400 
          bg-clip-text text-transparent">
          Create Account
        </h2>

        <p className="text-center text-gray-400 mt-2 text-sm">
          Start your journey with Skill <span className="text-violet-500 font-semibold">Pro</span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <Input
                placeholder=" "
                className="peer input-style"
                {...register("fullName")}
              />
              <label className="label-style">Full Name</label>
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName.message}</p>}
            </div>
            
            {/* Username */}
            <div className="relative">
              <Input
                placeholder=" "
                className="peer input-style"
                {...register("userName")}
              />
              <label className="label-style">Username</label>
              {errors.userName && <p className="text-xs text-red-400 mt-1">{errors.userName.message}</p>}
            </div>
            
            {/* Email */}
            <div className="relative">
              <Input
                type="email"
                placeholder=" "
                className="peer input-style"
                {...register("email")}
              />
              <label className="label-style">Email</label>
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
            </div>
            
            {/* Password */}
            <div className="relative">
              <Input
                type="password"
                placeholder=" "
                className="peer input-style"
                {...register("password")}
              />
              <label className="label-style">Password</label>
              {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
            </div>
          </div>

          <Button 
            className="w-full active:scale-[0.98] transition-transform"
            type="submit" 
            loading={loading}
          >
            Register
          </Button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-400 hover:text-violet-300 transition-colors hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
};