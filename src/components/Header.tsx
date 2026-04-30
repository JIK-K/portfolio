"use client"

import { useState } from "react";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

const rixi = localFont({
  src: "../assets/fonts/RixInooAriDuriRegular.ttf",
  display: "swap",
  variable: "--font-rixi",
});

const Header = () => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("intro");

  const navItems = [
    { name: "Intro", href: "#intro", id: "intro" },
    { name: "Tech Stack", href: "#tech", id: "tech" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
  ];
  
  return (
    <header className="sticky top-0 w-full z-[50] bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl shadow-blue-500/5">
      <nav className="flex justify-between items-center px-[32px] py-[16px] max-w-[1280px] mx-auto">
        <div className={`text-[22px] font-bold tracking-tighter text-white select-none cursor-pointer`}>
          JUNG WOON JIK
        </div>
        
        <div className="hidden md:flex items-center gap-[32px] tracking-tight">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={item.href}
              onClick={() => setActiveNav(item.id)}
              className={`${
                activeNav === item.id 
                  ? "text-blue-500 font-bold border-blue-500" 
                  : "text-zinc-400 font-medium hover:text-white"
              } pb-[4px] transition-all duration-300`}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <button 
          className="bg-[#2E5BFF] text-white px-[12px] py-[8px] rounded-[8px] font-medium text-[14px] active:scale-95 hover:bg-[#124af0] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          onClick={() => {}}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
