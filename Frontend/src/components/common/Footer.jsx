import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Input from '../ui/Input';
import Button from '../ui/Button';
import { MailCheck, MapPinCheck, PhoneCall } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative py-12 px-4 text-white overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#020617,#0f0a1f,#1a0f2e)]"></div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 ">

                <div>
                    <h2 className="text-xl font-bold text-violet-300">Skill Pro</h2>
                    <p className="mt-3 text-gray-400 text-sm">
                        Learn smart, practice better. Improve coding, aptitude, and communication skills in one place.
                    </p>

                    <div className="flex gap-4 mt-4">

                        <a
                            href="https://github.com/awadi99"
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 hover:bg-violet-500/20 hover:text-violet-300 transition"
                        >
                            <FiGithub size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/aditya-waghmare-95271b25a/"
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 hover:bg-violet-500/20 hover:text-violet-300 transition"
                        >
                            <FiLinkedin size={20} />
                        </a>

                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Quick Links</h3>
                    <Link to="/" className="text-gray-400 hover:text-violet-300 text-sm">Home</Link>
                    <Link to="/dashboard" className="text-gray-400 hover:text-violet-300 text-sm">Dashboard</Link>
                    <Link to="/problems" className="text-gray-400 hover:text-violet-300 text-sm">Problems</Link>
                    <Link to="dashboard/leaderboard" className="text-gray-400 hover:text-violet-300 text-sm">Leaderboard</Link>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Contact Us</h3>
                    <p  className="text-gray-400 hover:text-violet-300 text-sm flex justify-start items-center gap-2 "><MailCheck size={20} />SkillPro.space@gmail.com</p>
                    <p className="text-gray-400 hover:text-violet-300 text-sm flex justify-start items-center gap-2"><PhoneCall size={20}/>+919673298788</p>
                    <p  className="text-gray-400 hover:text-violet-300 text-sm flex justify-start  gap-2"><MapPinCheck size={20}/>Silicon Valley,U.S. state of California</p>
                </div>

                
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Stay Updated</h3>
                        <p className="text-[14px] text-white/60">Subscribe to our newsletter for the latest updates and opportunities.</p>
                        <div className="flex justify-between items-center gap-3 w-50 ">
                        <Input  type="email"className=" bg-white/6 border-white/20 rounded-4xl  " />
                        <Button type="submit">Subscribe</Button>
                        </div>

                </div>


            </div>

            <div className="mt-10 text-center text-gray-500 text-sm border-t border-white/10 pt-6">
                © {new Date().getFullYear()} Skill Pro. All rights reserved.
            </div>

        </footer>
    );
}