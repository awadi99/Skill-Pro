import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";


export default function MainLayout() {
    return (
        <div className="flex bg-[#020617] text-white min-h-screen">
            
            <Sidebar />
            <div className="z-50  fixed  bg-transparent opacity-100 backdrop-blur-xl (100px) h-18 w-full rounded-b-4xl "></div>
            
            <div className="flex-1 flex flex-col min-w-0 md:ml-64"> 
                <main className="flex-1 p-4 sm:p-6 md:p-10 w-full max-w-[1600px] mx-auto mt-15 ">
                    
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
