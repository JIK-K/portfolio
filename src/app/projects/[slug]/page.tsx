"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projectsData } from "@/src/data/projects";
import { PROJECT_NAV_ITEMS } from "@/src/data/projectNavItems";
import { rixi } from "@/src/lib/fonts";

const ProjectDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const [activeId, setActiveId] = useState("overview");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    PROJECT_NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [project]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white p-[32px]">
        <h1 className="text-[32px] font-bold">Project not found</h1>
        <button
          onClick={() => router.push("/")}
          className="px-[24px] py-[12px] bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-400">
      <div className="flex max-w-[1200px] mx-auto">
        {/* ─── Left Sidebar TOC ─── */}
        <aside className="hidden lg:flex flex-col w-[220px] shrink-0 sticky top-0 h-screen pt-[100px] pb-[40px] pl-[32px] pr-[16px]">
          {/* Back button */}
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-[6px] text-[11px] font-bold text-zinc-600 uppercase tracking-widest hover:text-zinc-400 transition-colors pb-[28px] border-b border-zinc-800/80 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform inline-block">
              ←
            </span>
            Back to Main
          </button>

          {/* Nav items */}
          <nav className="flex flex-col gap-[2px]">
            {PROJECT_NAV_ITEMS.map(({ id, num, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex items-center gap-[10px] px-[10px] py-[7px] rounded-[8px] text-left transition-all group ${
                  activeId === id ? "bg-zinc-800/50" : "hover:bg-zinc-900/50"
                }`}
              >
                <span
                  className={`w-[5px] h-[5px] rounded-full shrink-0 transition-colors ${
                    activeId === id
                      ? "bg-blue-500"
                      : "bg-zinc-700 group-hover:bg-zinc-500"
                  }`}
                />
                <span
                  className={`text-[10px] font-black transition-colors ${
                    activeId === id
                      ? "text-blue-500"
                      : "text-zinc-600 group-hover:text-zinc-500"
                  }`}
                >
                  {num}
                </span>
                <span
                  className={`text-[12px] font-medium transition-colors ${
                    activeId === id
                      ? "text-white"
                      : "text-zinc-600 group-hover:text-zinc-400"
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* ─── Main Content ─── */}
        <main className="flex-1 min-w-0 pb-[80px] lg:pb-[120px] px-[24px] lg:px-0">
          {/* Hero Header */}
          <section className="pt-[60px] lg:pt-[100px] pb-[48px] lg:pb-[72px] border-b border-zinc-800/80 lg:pr-[48px]">
            {/* Mobile back button */}
            <button
              onClick={() => router.push("/")}
              className="lg:hidden pb-[36px] flex items-center gap-[8px] text-zinc-500 hover:text-white transition-colors group text-[12px] font-bold uppercase tracking-widest"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform inline-block">
                ←
              </span>
              Back to Main
            </button>

            <div className="flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-start">
              {project.icon && (
                <Image
                  src={project.icon}
                  alt={project.title}
                  width={72}
                  height={72}
                  className="object-contain w-[72px] h-[72px]"
                />
              )}
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-wrap gap-[6px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-blue-400 font-bold text-[10px] px-[10px] py-[5px] bg-blue-500/8 rounded-full border border-blue-500/15 tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1
                  className={`${rixi.className} text-[36px] md:text-[48px] font-light text-white tracking-wide leading-none`}
                >
                  {project.title}
                </h1>
                <p className="text-[15px] md:text-[16px] text-zinc-500 font-medium leading-relaxed max-w-[680px] break-keep">
                  {project.description}
                </p>
              </div>
            </div>
          </section>

          {/* Sections */}
          <div className="flex flex-col gap-[64px] lg:gap-[96px] lg:pr-[48px] pt-[48px] lg:pt-[80px]">
            {/* 01. Project Overview */}
            <section id="overview" className="scroll-mt-[32px]">
              <SectionHeader num="01" title="Project Overview" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
                <div className="lg:col-span-2 bg-zinc-900/40 rounded-[24px] p-[24px] lg:p-[32px] border border-zinc-800/60 text-[14px] lg:text-[15px] leading-[1.8] text-zinc-400 whitespace-pre-wrap">
                  {details.overview.description}
                </div>
                <div className="flex flex-col gap-[24px] bg-zinc-900/20 p-[24px] lg:p-[28px] rounded-[24px] border border-zinc-800/40">
                  <MetaItem label="Period" value={details.overview.period} />
                  <MetaItem label="Role" value={details.overview.role} />
                  {details.overview.goal && (
                    <div className="flex flex-col gap-[6px]">
                      <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                        Main Goal
                      </p>
                      <p className="text-zinc-400 text-[13px] leading-snug break-keep">
                        {details.overview.goal}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* 02. Technical Stack */}
            <section id="stack" className="scroll-mt-[32px]">
              <SectionHeader num="02" title="Technical Stack" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                  {details.techStack.categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-[24px] py-[18px] rounded-[16px] bg-zinc-900/40 border border-zinc-800/60"
                    >
                      <span className="font-bold text-zinc-600 text-[11px] uppercase tracking-wider">
                        {cat.label}
                      </span>
                      <div className="flex flex-wrap gap-[6px] justify-end">
                        {cat.items.map((item, i) => (
                          <span
                            key={i}
                            className="text-white font-bold text-[13px]"
                          >
                            {item}
                            {i < cat.items.length - 1 && ","}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {details.techStack.mainLibraries && (
                  <div className="flex flex-col gap-[10px] font-bold">
                    {details.techStack.mainLibraries.map((lib, idx) => (
                      <div
                        key={idx}
                        className="p-[20px] rounded-[16px] bg-blue-500/4 border border-blue-500/10"
                      >
                        <h4 className="text-blue-400 font-bold text-[14px] pb-[6px]">
                          {lib.name}
                        </h4>
                        <p className="text-zinc-500 text-[13px] leading-relaxed break-keep">
                          {lib.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* 03. System Architecture */}
            {details.architecture && (
              <section id="architecture" className="scroll-mt-[32px]">
                <SectionHeader num="03" title="System Architecture" />
                <div className="flex flex-col gap-[24px]">
                  <p className="text-[14px] lg:text-[15px] leading-relaxed text-zinc-500 whitespace-pre-wrap">
                    {details.architecture.description}
                  </p>
                  {details.architecture.diagram && (
                    <div className="flex justify-center bg-white p-[8px] rounded-[16px]">
                      <Image
                        src={details.architecture.diagram}
                        alt={project.title}
                        width={600}
                        height={600}
                        className="object-contain w-[800px]"
                      />
                    </div>
                  )}
                  {details.architecture.tree && (
                    <div className="bg-zinc-900/40 p-[20px] lg:p-[28px] rounded-[24px] border border-zinc-800/60 font-mono text-blue-400/60 text-[11px] lg:text-[13px] leading-relaxed overflow-x-auto">
                      <pre>{details.architecture.tree}</pre>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 04. Key Features */}
            <section id="features" className="scroll-mt-[32px]">
              <SectionHeader num="04" title="Key Features" />
              <div className="flex flex-col gap-[20px]">
                {details.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group p-[12px] lg:p-[16px] rounded-[24px] lg:rounded-[28px] bg-zinc-900/40 border border-zinc-800/60 hover:border-blue-500/25 transition-all"
                  >
                    <div className="flex flex-col gap-[16px]">
                      <h3 className="flex gap-[12px] text-[18px] font-bold text-white group-hover:text-blue-400 transition-colors">
                        <p className="text-blue-500"> 0{idx + 1}</p>
                        {feature.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed text-[14px] break-keep">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 05. Technical Challenges */}
            <section id="challenges" className="scroll-mt-[32px]">
              <SectionHeader num="05" title="Technical Challenges" />
              <div className="flex flex-col gap-[20px]">
                {details.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-900/60 rounded-[24px] lg:rounded-[28px] border border-zinc-800/60 overflow-hidden"
                  >
                    <div className="p-[24px] lg:p-[32px] flex flex-col gap-[24px]">
                      <h3 className="text-[18px] font-bold text-white border-l-[3px] border-blue-500 pl-[16px]">
                        {item.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                        <div className="flex flex-col gap-[10px]">
                          <span className="text-[10px] font-black text-red-500/80 uppercase tracking-widest">
                            Problem
                          </span>
                          <p className="text-zinc-500 text-[14px] leading-relaxed break-keep">
                            {item.problem}
                          </p>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                          <span className="text-[10px] font-black text-emerald-500/80 uppercase tracking-widest">
                            Solution
                          </span>
                          <p className="text-zinc-500 text-[14px] leading-relaxed break-keep">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                      <div className="bg-blue-500/4 p-[20px] rounded-[16px] border border-blue-500/10">
                        <span className="text-[10px] font-black text-blue-500/70 uppercase tracking-widest block mb-[6px]">
                          Result
                        </span>
                        <p className="text-zinc-300 font-medium text-[14px]">
                          {item.result}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 06. Core Logic & Optimization */}
            <section id="optimization" className="scroll-mt-[32px]">
              <SectionHeader num="06" title="Core Logic & Optimization" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {details.optimizations.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-[24px] lg:p-[32px] rounded-[24px] lg:rounded-[28px] bg-black border border-zinc-800/60 flex flex-col justify-between gap-[20px]"
                  >
                    <div className="flex flex-col gap-[12px]">
                      <h4 className="text-[17px] font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-zinc-600 text-[14px] font-bold leading-relaxed break-keep">
                        {item.description}
                      </p>
                    </div>
                    {item.metric && (
                      <div className="px-[16px] py-[8px] rounded-full bg-zinc-900 border border-zinc-800 inline-flex items-center gap-[10px] w-fit">
                        <span className="w-[5px] h-[5px] rounded-full bg-blue-500 shrink-0" />
                        <span className="text-blue-400 font-bold text-[12px]">
                          {item.metric}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 07. Retrospective */}
            <section id="retrospective" className="scroll-mt-[32px]">
              <SectionHeader num="07" title="Retrospective" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div className="p-[24px] lg:p-[32px] rounded-[24px] lg:rounded-[28px] bg-zinc-900/40 border border-zinc-800/60">
                  <h4 className="text-zinc-600 font-black text-[10px] uppercase tracking-widest pb-[16px]">
                    What I Learned
                  </h4>
                  <p className="text-zinc-300 text-[15px] leading-relaxed break-keep whitespace-pre-wrap">
                    {details.retrospective.learned}
                  </p>
                </div>
                <div className="p-[24px] lg:p-[32px] rounded-[24px] lg:rounded-[28px] bg-zinc-900/40 border border-zinc-800/60">
                  <h4 className="text-zinc-600 font-black text-[10px] uppercase tracking-widest pb-[16px]">
                    Achievements
                  </h4>
                  <p className="text-zinc-300 text-[15px] leading-relaxed break-keep whitespace-pre-wrap">
                    {details.retrospective.achievement}
                  </p>
                </div>
              </div>
            </section>

            {/* 08. Links */}
            {/* 08. Links */}
            <section id="links" className="scroll-mt-[32px]">
              <SectionHeader num="08" title="Links" />
              <div className="flex flex-col gap-[8px]">
                {details.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-[24px] py-[18px] bg-transparent border border-zinc-800 rounded-[16px] hover:border-zinc-700 hover:bg-white/[0.02] transition-all"
                  >
                    <div className="flex items-center gap-[14px]">
                      <span className="text-[11px] font-black text-zinc-700 min-w-[20px]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13px] font-bold text-zinc-500 tracking-[0.08em] uppercase group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <span className="text-[15px] text-zinc-700 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-white transition-all">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

/* ── Sub-components ── */

const SectionHeader = ({ num, title }: { num: string; title: string }) => (
  <div className="flex flex-col gap-[32px]">
    <div className="flex items-center gap-[14px]">
      <span className="text-blue-500 text-[12px] font-black tracking-wider">
        {num}
      </span>
      <h2 className="text-[22px] font-black text-white">{title}</h2>
    </div>
  </div>
);

const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-[4px]">
    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
      {label}
    </p>
    <p className="text-white font-bold text-[14px]">{value}</p>
  </div>
);

export default ProjectDetailPage;
