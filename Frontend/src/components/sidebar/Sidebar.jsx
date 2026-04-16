import { useState } from "react";
import { Menu, X } from "lucide-react";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>

            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed top-4 left-4 z-100  bg-white/10 p-2 rounded-lg backdrop-blur"
            >
                <Menu className="text-white hover:animate-ping" />
            </button>


            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/60 z-90 md:hidden"
                />
            )}


            <aside
                className={`
          fixed top-0 left-0 h-screen w-64
          bg-[#020617] border-r border-white/10
          flex flex-col z-100
          transform transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
            >


                <div className="flex items-center justify-between px-4 py-4">

                    <div className="font-bold text-2xl flex gap-2 justify-center items-center">
                        <img
                            className="w-7 h-8 rounded-[50%]"
                            src="/image/SkillPro.png" alt="" />
                        <div>S<span className="text-red-700">K</span>ILL <span className="text-violet-700">PRO</span></div>

                    </div>



                    <button
                        onClick={() => setOpen(false)}
                        className="md:hidden"
                    >
                        <X className="text-white hover:animate-spin" />
                    </button>

                </div>

                
                <SidebarMenu expanded={true}/>

            </aside>
        </>
    );
}