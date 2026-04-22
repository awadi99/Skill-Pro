import {
    LayoutDashboard,
    Code2,
    Brain,
    Mic,
    User,
    LogOut,
    Trophy,
    BrainCircuit,
    ChessKing,
    Sparkle,
    Sparkles,
    File,
    FileText,
} from "lucide-react";

export const navItems = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Coding Practice",
        path: "/dashboard/dsa",
        icon: Code2,
    },
    {
        name: "Aptitude",
        path: "/dashboard/aptitude",
        icon: BrainCircuit,
    },
    {
        name: "English",
        path: "/dashboard/english",
        icon: Mic,
    },

    {
        name: "Leaderboard",
        path: "/dashboard/leaderboard",
        icon: ChessKing ,
    },
    {
        name: "Ai Study Plan",
        path: "/dashboard/aiplan",
        icon: Sparkles,
        highlight: true,
        badge: "AI", 
        
    },
    
    {
        name: "Resume Checker",
        path: "/dashboard/ai",
        icon: FileText,
        high: true,
        badges: "AI", 
        
    },
    {
        name: "Profile",
        path: "/dashboard/profile",
        icon: User,
    },

    {
        name: "Logout",
        path: "/dashboard/Logout",
        icon: LogOut,
        danger:true
    },

];