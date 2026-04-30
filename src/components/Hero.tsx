import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-65px)] flex flex-col items-center justify-center text-center overflow-hidden" id="intro">
      
      <div
        className="absolute inset-0 z-0 opacity-80 blur-[10px] scale-[1.1]"
        style={{
          backgroundImage: "url('/background.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-[8px] px-[12px] py-[4px] bg-surface-container-high/60 backdrop-blur-md rounded-full border border-outline-variant mb-[24px]">
          <span className="w-[8px] h-[8px] rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label-caps text-on-surface-variant uppercase text-[10px]">
            Developer
          </span>
        </div>
        
        <h1 className="font-h1 text-[48px] text-on-surface max-w-[896px] mb-[32px] leading-tight font-extrabold">
          개발자 정운직 입니다
        </h1>
        
        <p className="font-body-lg text-[18px] text-on-surface-variant max-w-[672px] mb-[48px] leading-relaxed">
          견고한 아키텍처와 최적화된 사용자 경험을 추구합니다. <br />
          복잡한 기술적 도전을 명료한 솔루션으로 설계하는 것을 즐깁니다.
        </p>
        
        <div className="flex gap-[24px] items-center">
          <a
            className="flex items-center gap-[8px] text-on-surface hover:text-blue-500 transition-all duration-300 font-label-caps font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JIK-K"
          >
            GITHUB
          </a>
          <a
            className="flex items-center gap-[8px] text-on-surface hover:text-blue-500 transition-all duration-300 font-label-caps font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dnswlrsla.tistory.com/"
          >
            BLOG
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
