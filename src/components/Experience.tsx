import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: "2024 — PRESENT",
      title: "Lead Developer @ Tech Innovators",
      description: "사내 프레임워크 설계 및 서비스 아키텍처 최적화를 주도하며 기술적 부채를 해결하고 있습니다.",
      tags: ["System Architecture", "Next.js", "Team Lead"],
      isCurrent: true
    },
    {
      period: "2022 — 2024",
      title: "Frontend Engineer @ Startup X",
      description: "사용자 중심의 UI 라이브러리를 구축하고 디자인 시스템 명세화 작업을 진행했습니다.",
      tags: ["Design System", "React", "TypeScript"],
      isCurrent: false
    },
    {
      period: "2020 — 2022",
      title: "Junior Software Engineer @ Global Corp",
      description: "Java 기반 백엔드 시스템 개발 및 API 성능 튜닝 경험을 쌓았습니다.",
      tags: ["Spring Boot", "MySQL", "Optimization"],
      isCurrent: false
    }
  ];

  const logs = [
    { date: "2024.03.12", title: "Next.js 14 App Router 마이그레이션 회고", category: "Framework" },
    { date: "2024.02.28", title: "실무에서 적용하는 함수형 프로그래밍 패턴", category: "CS" },
    { date: "2024.01.15", title: "PostgreSQL 인덱스 설계를 통한 쿼리 최적화", category: "Database" },
    { date: "2023.12.05", title: "Micro Frontend 도입 시 고려해야 할 요소들", category: "Architecture" }
  ];

  return (
    <section className="py-[140px] bg-zinc-950" id="experience">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        
        {/* Section Header */}
        <div className="flex items-center gap-[24px] mb-[80px]">
          <div className="flex flex-col gap-[8px]">
            <span className="text-blue-500 font-black text-[12px] tracking-[0.3em] uppercase">Journey & Thoughts</span>
            <h2 className="text-[40px] font-bold text-white tracking-tighter whitespace-nowrap">Experience</h2>
          </div>
          <div className="h-[1px] flex-grow bg-zinc-900"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-start">
          
          {/* Timeline Section */}
          <div className="lg:col-span-7 flex flex-col gap-[40px]">
            <div className="relative border-l border-zinc-800 ml-[8px] flex flex-col gap-[64px]">
              {experiences.map((exp) => (
                <div key={exp.title} className="relative pl-[40px] group">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[6px] top-[8px] w-[12px] h-[12px] rounded-full transition-all duration-300 ${
                    exp.isCurrent 
                    ? 'bg-blue-500 ring-[6px] ring-blue-500/20 group-hover:ring-[8px]' 
                    : 'bg-zinc-800 group-hover:bg-zinc-600'
                  }`}></div>
                  
                  <div className="flex flex-col gap-[16px]">
                    <span className={`text-[12px] font-black tracking-widest ${exp.isCurrent ? 'text-blue-500' : 'text-zinc-600'}`}>
                      {exp.period}
                    </span>
                    
                    <div className="flex flex-col gap-[8px]">
                      <h4 className="text-[24px] font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-zinc-400 text-[16px] leading-relaxed max-w-[500px]">
                        {exp.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-[8px]">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-zinc-500 px-[10px] py-[4px] border border-zinc-800 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Logs Section */}
          <div className="lg:col-span-5 flex flex-col gap-[32px]">
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-[32px] p-[32px] lg:p-[40px] flex flex-col gap-[32px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-bold text-white">Latest Logs</h3>
                <span className="text-blue-500 material-symbols-outlined">menu_book</span>
              </div>
              
              <div className="flex flex-col gap-[16px]">
                {logs.map((log) => (
                  <a
                    key={log.title}
                    href="#"
                    className="group flex flex-col gap-[8px] p-[20px] rounded-[16px] border border-transparent hover:border-zinc-800 hover:bg-zinc-800/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">
                        {log.category}
                      </span>
                      <span className="text-[11px] font-medium text-zinc-600 uppercase">
                        {log.date}
                      </span>
                    </div>
                    <h4 className="text-[16px] font-bold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                      {log.title}
                    </h4>
                  </a>
                ))}
              </div>

              <a href="#" className="flex items-center justify-center gap-[8px] py-[16px] border border-zinc-800 rounded-[16px] text-zinc-400 font-bold text-[14px] hover:bg-white hover:text-zinc-950 transition-all">
                VIEW ALL LOGS
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
