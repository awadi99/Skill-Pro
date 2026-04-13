import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const sections = ["problem", "solution", "features", "fAQ"];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            let current = "";
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const top = section.offsetTop - 120;
                    if (window.scrollY >= top) {
                        current = id;
                    }
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition ${scrolled
                    ? "bg-[#020617]/90 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                <h1 className="text-xl font-bold text-white">
                    S<span className="text-red-700">K</span>ILL{" "}
                    <span className="text-purple-700">PRO</span>
                </h1>

                <nav className="hidden md:flex items-center gap-6 text-sm">

                    {sections.map((sec) => (
                        <Link
                            key={sec}
                            to={`/#${sec}`}
                            className={`relative transition ${active === sec ? "text-white" : "text-gray-400"
                                }`}
                        >
                            {sec.charAt(0).toUpperCase() + sec.slice(1)}

                            {active === sec && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-violet-400 rounded-full"></span>
                            )}
                        </Link>
                    ))}

                </nav>
                
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/login"
                        className="bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg text-sm font-medium transition hover:scale-105"
                    >
                        Login
                    </Link>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-xl"
                >
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-[#020617]/95 backdrop-blur-md">

                    {sections.map((sec) => (
                        <Link
                            key={sec}
                            to={`/#${sec}`}
                            onClick={() => setOpen(false)}
                            className="block text-gray-300"
                        >
                            {sec.charAt(0).toUpperCase() + sec.slice(1)}
                        </Link>
                    ))}

                    <Link to="/login" className="block text-gray-300">
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="block bg-violet-600 text-center py-2 rounded-lg"
                    >
                        Get Started
                    </Link>

                </div>
            )}
        </header>
    );
}