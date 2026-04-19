import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";


export default function MainLayout() {
    return (
        <div className="flex h-screen bg-[#020617] text-white">


            <Sidebar />
            <div className="flex-1 flex flex-col ">

                <main className="flex-1 overflow-y-auto p-6 sm:mt-5 mt-10 ">
                    
                    <Outlet/>
                </main>
                
                
            </div>

        </div>
    );
}