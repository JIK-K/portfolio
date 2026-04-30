import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: "2022 — PRESENT",
      title: "Lead Developer @ Tech Innovators",
      description: "사내 프레임워크 설계 및 서비스 아키텍처 최적화를 주도하며 기술적 부채를 해결하고 있습니다.",
      isCurrent: true
    },
    {
      period: "2020 — 2022",
      title: "Frontend Engineer @ Startup X",
      description: "사용자 중심의 UI 라이브러리를 구축하고 디자인 시스템 명세화 작업을 진행했습니다.",
      isCurrent: false
    },
    {
      period: "2018 — 2020",
      title: "Junior Software Engineer @ Global Corp",
      description: "Java 기반 백엔드 시스템 개발 및 API 성능 튜닝 경험을 쌓았습니다.",
      isCurrent: false
    }
  ];

  const logs = [
    { date: "2024.03.12", title: "Next.js 14 App Router 마이그레이션 회고" },
    { date: "2024.02.28", title: "실무에서 적용하는 함수형 프로그래밍 패턴" },
    { date: "2024.01.15", title: "PostgreSQL 인덱스 설계를 통한 쿼리 최적화" },
    { date: "2023.12.05", title: "Micro Frontend 도입 시 고려해야 할 요소들" }
  ];

  return (
    <section className="py-[120px] bg-[#1d2021] text-on-surface" id="experience">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[96px]">
          {/* Timeline */}
          <div className="flex flex-col">
            <h2 className="text-[32px] font-bold mb-[48px] text-white">Experience</h2>
            <div className="relative border-l border-zinc-700 ml-[16px] space-y-[48px]">
              {experiences.map((exp) => (
                <div key={exp.title} className="relative pl-[32px]">
                  <div className={`absolute -left-[5px] top-[8px] w-[10px] h-[10px] rounded-full ${exp.isCurrent ? 'bg-blue-500 ring-[4px] ring-blue-500/20' : 'bg-zinc-600'}`}></div>
                  <span className={`text-[12px] font-bold ${exp.isCurrent ? 'text-blue-400' : 'text-zinc-500'}`}>
                    {exp.period}
                  </span>
                  <h4 className="text-[20px] font-bold mt-[4px] text-white">{exp.title}</h4>
                  <p className="text-zinc-400 text-[16px] mt-[8px] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Logs */}
          <div className="flex flex-col">
            <h2 className="text-[32px] font-bold mb-[48px] text-white">Technical Logs</h2>
            <div className="grid grid-cols-1 gap-[16px]">
              {logs.map((log) => (
                <a
                  key={log.title}
                  className="group p-[24px] bg-[#282a2b] rounded-[12px] border border-zinc-800 hover:border-blue-500/50 hover:bg-[#323536] transition-all flex justify-between items-center"
                  href="#"
                >
                  <div>
                    <span className="text-[12px] font-semibold text-zinc-500 uppercase tracking-wider">
                      {log.date}
                    </span>
                    <h4 className="text-[18px] font-bold mt-[4px] text-zinc-200 group-hover:text-blue-400 transition-colors">
                      {log.title}
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-[4px] group-hover:-translate-y-[4px] transition-transform">
                    arrow_outward
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
