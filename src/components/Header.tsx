"use client";

import { useState, useEffect, useRef } from "react";
import localFont from "next/font/local";

const rixi = localFont({
  src: "../assets/fonts/RixInooAriDuriRegular.ttf",
  display: "swap",
  variable: "--font-rixi",
});

const Header = () => {
  const [activeNav, setActiveNav] = useState("intro");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const navItems = [
    { name: "Intro", href: "#intro", id: "intro" },
    { name: "Tech Stack", href: "#tech", id: "tech" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
  ];

  useEffect(() => {
    const activeElement = navRefs.current[activeNav];
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeNav]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActiveNav(id);
  };

  return (
    <header className="sticky top-0 w-full z-[100] bg-zinc-950/70 backdrop-blur-md border-b border-white/[0.05]">
      <nav className="flex justify-between items-center px-[24px] py-[16px] max-w-[1400px] mx-auto">
        {/* Logo */}
        <div
          className={`${rixi.className} text-[22px] tracking-[2px] leading-none select-none cursor-pointer hover:opacity-80 transition-opacity`}
        >
          JUNG WOON JIK
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-[8px] relative bg-zinc-900/40 p-[4px] rounded-full border border-white/[0.05]">
          {/* Sliding Capsule Indicator */}
          <div
            className="absolute h-[calc(100%-8px)] bg-zinc-800 rounded-full transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] z-0 shadow-lg border border-white/[0.05]"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />

          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              ref={(el) => {
                navRefs.current[item.id] = el;
              }}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`${
                activeNav === item.id
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              } transition-colors duration-300 relative px-[20px] py-[8px] text-[13px] font-bold tracking-wide uppercase z-10`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
