import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-65px)] flex flex-col items-center justify-center text-center overflow-hidden bg-zinc-950"
      id="intro"
    >
      {/* Background GIF Layer */}
      <div
        className="absolute inset-0 z-0 opacity-80 blur-[4px] scale-[1.05]"
        style={{
          backgroundImage: "url('/cube-background.gif')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center px-[32px]">
        <div className="relative w-[160px] h-[160px] mb-[32px] group">
          <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-zinc-800 shadow-2xl">
            <Image
              src="/photo.png"
              alt="정운직 프로필"
              fill
              sizes="30"
              className="object-contain scale-[1.1]"
              priority
            />
          </div>
        </div>

        {/* Status Tag */}
        <div className="inline-flex items-center gap-[8px] px-[12px] py-[4px] bg-zinc-900/50 backdrop-blur-md rounded-full border border-zinc-800 mb-[24px]">
          <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-label-caps text-zinc-400 uppercase text-[10px] tracking-widest font-bold">
            Who will work for me if I don't work for myself
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[42px] md:text-[56px] text-white max-w-[800px] mb-[24px] leading-[1.2] font-bold tracking-tight">
          개발자 정운직입니다
        </h1>

        {/* Description */}
        <p className="text-[17px] md:text-[18px] text-zinc-400 max-w-[650px] mb-[48px] leading-relaxed font-medium">
          누구도 대신 해결해주지 않는 기술적 난관들을 집요하게 파고들어 해답을
          찾아냅니다. <br className="hidden md:block" />
          타협 없는 태도로 견고한 시스템을 구축하며 코드의 가치를 책임집니다.
        </p>

        {/* Decorated Buttons */}
        <div className="flex flex-col sm:flex-row gap-[16px] items-center">
          <a
            href="https://github.com/JIK-K"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] px-[24px] py-[12px] bg-zinc-100 text-zinc-950 rounded-[14px] font-bold text-[15px] transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5"
          >
            <div className="flex items-center justify-center gap-[16px]">
              <Image
                src="/github.png"
                alt="github_icon"
                width={25}
                height={25}
                className="object-contain"
              />
              Github
            </div>
          </a>
          <a
            href="https://dnswlrsla.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] px-[24px] py-[12px] bg-blue-600 text-white rounded-[14px] font-bold text-[15px] transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/20"
          >
            <div className="flex items-center justify-center gap-[16px]">
              <Image
                src="/WOONIVERSE.ico"
                alt="blog_icon"
                width={25}
                height={25}
                className="object-contain"
              />
              BLOG
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
