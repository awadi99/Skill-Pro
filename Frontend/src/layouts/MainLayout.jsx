import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";


export default function MainLayout() {
    return (
        <div className="flex  min-h-screen bg-[#020617] text-white">


            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0"> {/* min-w-0 is critical for flex child responsiveness */}
                <main className="flex-1 p-4 sm:p-6 md:p-10 w-full max-w-[1600px] mx-auto">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}