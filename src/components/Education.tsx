import React from 'react';

const Education = () => {
  const activities = [
    {
      period: "2023.06 — 2023.12",
      title: "Open Source Contributor @ React",
      description: "React 공식 문서 번역 프로젝트에 참여하여 한국어 사용자들을 위한 가이드를 작성했습니다.",
      category: "Open Source"
    },
    {
      period: "2022.03 — 2023.02",
      title: "Google Developer Student Clubs (GDSC) Lead",
      description: "대학 커뮤니티 내 개발 문화를 확산시키고 정기적인 기술 세미나 및 해커톤을 기획했습니다.",
      category: "Community"
    },
    {
      period: "2021.09 — 2021.12",
      title: "Global AI Hackathon 2nd Place",
      description: "AI 기반의 교통 혼잡도 예측 시스템을 구축하여 우수한 성적으로 입상했습니다.",
      category: "Awards"
    }
  ];

  return (
    <section className="py-[100px] bg-zinc-950" id="education">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        
        {/* Section Header */}
        <div className="flex items-center gap-[24px] mb-[60px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[40px] font-bold text-white tracking-tighter whitespace-nowrap">Education</h2>
          </div>
          <div className="h-[1px] flex-grow bg-zinc-900"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {activities.map((item) => (
            <div key={item.title} className="p-[32px] rounded-[32px] bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-all group">
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black text-blue-500 tracking-widest uppercase px-[12px] py-[6px] bg-blue-500/10 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[12px] font-medium text-zinc-600">
                    {item.period}
                  </span>
                </div>
                
                <div className="flex flex-col gap-[12px]">
                  <h4 className="text-[20px] font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-[14px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
