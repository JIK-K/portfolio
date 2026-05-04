"use client";

import Image from "next/image";
import React from "react";

const TechStack = () => {
  // Row 1: Core Languages & UI (언어 및 UI 프레임워크)
  const row1 = [
    "C++",
    "C#",
    "Java",
    "TypeScript",
    "JavaScript",
    "React",
    "Nextjs",
    "WPF",
  ];
  // Row 2: Backend & Database (서버 및 데이터베이스)
  const row2 = [
    "NestJS",
    "Nodejs",
    "Express",
    "MySQL",
    "SQLite",
    "Redis",
    "TypeORM",
  ];
  // Row 3: System & Tools (시스템 라이브러리 및 인프라)
  const row3 = [
    "OpenCV",
    "Docker",
    "Nginx",
    "CMake",
    "Win32-API",
    "Github-Actions",
    "Firebase",
  ];
  // Row 4: Monitoring & DevTools (모니터링 및 협업 도구)
  const row4 = ["Prometheus", "Grafana", "k6", "Github", "Git", "Notion"];

  const ScrollingRow = ({
    items,
    direction,
  }: {
    items: string[];
    direction: "left" | "right";
  }) => (
    <div className="flex overflow-hidden py-[8px] select-none">
      <div
        className={`flex gap-[24px] whitespace-nowrap ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-[12px] bg-zinc-50 border border-zinc-200 px-[24px] py-[16px] rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-[28px] h-[28px] flex-shrink-0">
              <Image
                src={`/tech-image/${encodeURIComponent(item.toLowerCase())}.png`}
                alt={item}
                fill
                sizes="50px"
                className="object-contain"
                onError={(e) => {
                  (e.target as any).style.display = "none";
                }}
              />
            </div>
            <span className="text-[18px] font-bold text-zinc-700 tracking-tight">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-[100px] bg-white overflow-hidden" id="tech">
      <div className="max-w-[1280px] mx-auto px-[32px] mb-[64px]">
        <div className="flex items-center gap-[16px]">
          <h2 className="text-[32px] font-bold text-zinc-900">Tech Stack</h2>
          <div className="h-[1px] flex-grow bg-zinc-200"></div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <ScrollingRow items={row1} direction="left" />
        <ScrollingRow items={row2} direction="right" />
        <ScrollingRow items={row3} direction="left" />
        <ScrollingRow items={row4} direction="right" />
      </div>
    </section>
  );
};

export default TechStack;
