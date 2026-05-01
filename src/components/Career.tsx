import React from 'react';

const Career = () => {
  const careers = [
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

  return (
    <section className="py-[100px] bg-zinc-950" id="career">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        
        {/* Section Header */}
        <div className="flex items-center gap-[24px] mb-[60px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[40px] font-bold text-white tracking-tighter whitespace-nowrap">Career</h2>
          </div>
          <div className="h-[1px] flex-grow bg-zinc-900"></div>
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="relative border-l border-zinc-800 ml-[8px] flex flex-col gap-[64px]">
            {careers.map((item) => (
              <div key={item.title} className="relative pl-[40px] group">
                {/* Timeline Dot */}
                <div className={`absolute -left-[6px] top-[8px] w-[12px] h-[12px] rounded-full transition-all duration-300 ${
                  item.isCurrent 
                  ? 'bg-blue-500 ring-[6px] ring-blue-500/20 group-hover:ring-[8px]' 
                  : 'bg-zinc-800 group-hover:bg-zinc-600'
                }`}></div>
                
                <div className="flex flex-col gap-[16px]">
                  <span className={`text-[12px] font-black tracking-widest ${item.isCurrent ? 'text-blue-500' : 'text-zinc-600'}`}>
                    {item.period}
                  </span>
                  
                  <div className="flex flex-col gap-[8px]">
                    <h4 className="text-[24px] font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-[16px] leading-relaxed max-w-[800px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-[8px]">
                    {item.tags.map(tag => (
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
      </div>
    </section>
  );
};

export default Career;
