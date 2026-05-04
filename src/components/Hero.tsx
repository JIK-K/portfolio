import Image from "next/image";
import React from "react";

const CONTACT_ITEMS = [
  {
    href: undefined,
    icon: (
      <svg
        className="w-[13px] h-[13px] opacity-45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "서울특별시 구로구",
  },
  {
    href: "tel:010-6550-5226",
    icon: (
      <svg
        className="w-[13px] h-[13px] opacity-45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
    label: "010-6550-5226",
  },
  {
    href: "mailto:dnswlrsla@gmail.com",
    icon: (
      <svg
        className="w-[13px] h-[13px] opacity-45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "dnswlrsla@gmail.com",
  },
];

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-75px)] flex flex-col items-center justify-center text-center overflow-hidden bg-zinc-950"
      id="intro"
    >
      {/* Background GIF */}
      <div
        className="absolute inset-0 z-0 opacity-80 blur-[4px] scale-[1.05]"
        style={{
          backgroundImage: "url('/cube-background.gif')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-[32px] gap-[24px]">
        {/* Profile Image */}
        <div className="w-[160px] h-[160px] rounded-full overflow-hidden border-[4px] border-zinc-800 shadow-2xl relative">
          <Image
            src="/ID_photo.png"
            alt="정운직 프로필"
            fill
            sizes="160px"
            className="object-cover scale-[1.1]"
            priority
          />
        </div>

        {/* Status Tag */}
        <div className="inline-flex items-center gap-[8px] px-[14px] py-[5px] bg-black/70 backdrop-blur-md rounded-full border border-white/10">
          <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-500 uppercase text-[10px] tracking-widest font-bold">
            Who will work for me if I don't work for myself
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[42px] md:text-[56px] text-white max-w-[800px] leading-[1.2] font-bold tracking-tight">
          개발자 <span className="text-emerald-500">정운직</span>입니다
        </h1>

        {/* Description */}
        <div className="text-[17px] md:text-[18px] text-zinc-400 max-w-[650px] leading-relaxed font-medium whitespace-pre-wrap">
          <p>성능 병목을 발견하면 원인을 파악하고 개선하는 과정을 즐깁니다.</p>
          <p>
            데이터 기반으로 문제를 정의하고, 측정 가능한 방식으로 해결합니다.
          </p>
        </div>

        {/* Contact Pills */}
        <div className="flex flex-wrap justify-center gap-[8px]">
          {CONTACT_ITEMS.map(({ href, icon, label }) => {
            const base =
              "flex items-center gap-[6px] px-[13px] py-[6px] bg-black/65 backdrop-blur-md border border-white/10 rounded-full text-[12px] font-medium text-zinc-400";
            const interactive =
              "hover:border-white/25 hover:text-zinc-200 transition-all";

            return href ? (
              <a key={label} href={href} className={`${base} ${interactive}`}>
                {icon}
                {label}
              </a>
            ) : (
              <div key={label} className={base}>
                {icon}
                {label}
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-[12px] items-center">
          <a
            href="https://github.com/JIK-K"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] px-[22px] py-[11px] bg-black backdrop-blur-md border border-white/15 text-zinc-200 rounded-[14px] font-bold text-[14px] hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all"
          >
            <Image
              src="/github_white.png"
              alt="github"
              width={20}
              height={20}
              className="object-contain"
            />
            Github
          </a>
          <a
            href="https://dnswlrsla.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] px-[22px] py-[11px] bg-black backdrop-blur-md border border-white/15 text-zinc-200 rounded-[14px] font-bold text-[14px] hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all"
          >
            <Image
              src="/WOONIVERSE.ico"
              alt="blog"
              width={20}
              height={20}
              className="object-contain"
            />
            BLOG
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
