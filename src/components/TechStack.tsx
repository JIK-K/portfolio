"use client";

import Image from "next/image";
import React from "react";
import { TECH_ROWS } from "../data/techStacks";

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
                (e.target as HTMLImageElement).style.display = "none";
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

const TechStack = () => {
  return (
    <section className="py-[100px] bg-white overflow-hidden" id="tech">
      <div className="flex flex-col gap-[64px]">
        <div className="max-w-[1280px] mx-auto px-[32px] w-full">
          <div className="flex items-center gap-[16px]">
            <h2 className="text-[32px] font-bold text-zinc-900">Tech Stack</h2>
            <div className="h-[1px] flex-grow bg-zinc-200"></div>
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          {TECH_ROWS.map((row) => (
            <ScrollingRow
              key={row.label}
              items={row.items}
              direction={row.direction}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
