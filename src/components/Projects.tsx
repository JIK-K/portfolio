"use client";

import { ProjectData } from "../types/project";
import { projectsData } from "../data/projects/index";
import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

const rixi = localFont({
  src: "../assets/fonts/RixInooAriDuriRegular.ttf",
  display: "swap",
  variable: "--font-rixi",
});

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  icon,
  problems,
  link,
  imagePosition,
}: ProjectData) => {
  const isImageLeft = imagePosition === "left";
  const router = useRouter();

  return (
    <section className="flex flex-col lg:flex-row gap-[48px] items-stretch bg-[#1E1E1E] rounded-[32px] overflow-hidden border border-white/[0.08] p-[40px] lg:h-[640px] relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Image Section */}
      {image && (
        <div
          className={`flex-[1.2] rounded-[24px] overflow-hidden border border-zinc-800 bg-black relative min-h-[300px] lg:min-h-full ${!isImageLeft ? "lg:order-2" : ""}`}
        >
          <Image
            className="object-contain p-[32px]"
            alt={title}
            src={image}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      )}

      {/* Content Section */}
      <div
        className={`${image ? "flex-[1]" : "flex-1"} flex flex-col justify-between gap-[24px] ${!isImageLeft && image ? "lg:order-1" : ""} overflow-hidden`}
      >
        {/* Top Info */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-wrap gap-[8px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-white font-bold text-[10px] px-[10px] py-[5px] bg-blue-900/30 rounded-[6px] border border-blue-500/10 tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-[12px]">
            {icon && (
              <div className="w-[48px] h-[48px] bg-black rounded-[14px] border border-zinc-800 p-[8px] flex items-center justify-center shrink-0">
                <Image
                  src={icon}
                  alt={title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            )}
            <h3
              className={`${rixi.className} text-[26px] text-white tracking-wide leading-tight `}
            >
              {title}
            </h3>
          </div>

          <p className="text-zinc-400 text-[16px] leading-relaxed font-bold break-keep">
            {description}
          </p>
        </div>

        <div className="relative flex flex-col bg-black border border-gray-800 rounded-[28px] flex-grow overflow-hidden">
          <div className="flex items-center justify-between px-[28px] py-[16px] border-b border-zinc-800/50 bg-zinc-900/20">
            <div className="flex items-center gap-[10px]">
              <span className="w-[6px] h-[6px] rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[11px] font-black tracking-[0.2em] text-blue-500 uppercase">
                Problems & Solutions
              </span>
            </div>
            <div className="flex items-center gap-[6px] text-zinc-600">
              <span className="text-[10px] font-extrabold text-gray-850">
                SCROLL
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[28px] p-[28px] overflow-y-auto no-scrollbar relative">
            {problems.map((item, index) => (
              <div key={index} className="flex flex-col gap-[12px]">
                <p className="text-[16px] font-bold text-zinc-100 leading-snug">
                  <span className="text-blue-500 mr-[8px] font-black italic">
                    Q.
                  </span>
                  {item.title}
                </p>

                <div className="flex gap-[14px] pl-[20px] border-l border-zinc-800/80 ml-[6px]">
                  <p className="text-[14px] text-zinc-400 leading-relaxed break-keep font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="sticky bottom-[-28px] left-0 w-full h-[60px] bg-gradient-to-t from-[#111111] to-transparent pointer-events-none"></div>
          </div>
        </div>

        <button
          onClick={() => router.push(link)}
          className="relative inline-flex items-center justify-center px-[20px] py-[10px] overflow-hidden font-black text-[13px] tracking-widest text-white transition-all duration-300 bg-zinc-900 rounded-[12px] border border-zinc-700 hover:border-blue-500 group"
        >
          {/* 배경 글로우 효과 */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>

          <span className="relative flex items-center gap-2">
            VIEW DETAIL
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
          </span>
        </button>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="py-[140px]" id="projects">
      <div className="flex flex-col max-w-[1280px] mx-auto px-[32px]">
        {/* Header */}
        <div className="flex items-center gap-[32px] pb-[64px]">
          <h2 className="text-[40px] font-bold text-white">
            Featured Projects
          </h2>
          <div className="h-[1px] flex-grow bg-gray-800"></div>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-[140px]">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
