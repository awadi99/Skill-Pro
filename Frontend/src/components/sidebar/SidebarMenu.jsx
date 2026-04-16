import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";

export default function SidebarMenu({ expanded }) {
    return (
        <nav className="flex flex-col justify-center p-5 gap-2.5 mt-4">

            {navItems.map((item) => {
                const Icon = item.icon;

                return (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center justify-between   px-4 py-3 rounded-lg transition-all duration-200
    ${item.danger
                                ? "text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                                : item.highlight
                                    ? "hover:bg-violet-400/10 text-violet-400 border border-violet-500/30"
                                    : isActive
                                        ? "bg-violet-600/20 text-violet-400"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`
                        }
                    >
                        
                        <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5" />

                            <span
                                className={`transition-all whitespace-nowrap ${expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                                    }`}
                            >
                                {item.name}
                            </span>
                        </div>

                        
                        {item.badge && expanded && (
                            <span className="text-[10px] px-2 py-[2px] rounded-full bg-violet-500/20 text-violet-300 border border-violet-400/30">
                                {item.badge}
                            </span>
                        )}
                    </NavLink>
                );
            })}

        </nav>
    );
}