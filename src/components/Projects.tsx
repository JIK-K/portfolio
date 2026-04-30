import React from 'react';

const Projects = () => {
  return (
    <section className="py-[120px] bg-[#0A0A0B]" id="projects">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="flex items-center justify-between mb-[64px]">
          <h2 className="font-h2 text-[32px] text-on-surface font-bold">Featured Projects</h2>
          <span className="font-label-caps text-on-surface-variant text-[14px] font-semibold tracking-wider">02 — SELECTED WORKS</span>
        </div>
        <div className="space-y-[48px]">
          {/* Project 1 */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-start bg-surface-container rounded-[16px] overflow-hidden border border-outline-variant/30 p-[32px] lg:p-[48px] hover:border-blue-500/30 transition-all duration-300">
            <div className="lg:col-span-7 rounded-[12px] overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Architectural Blueprint Tool"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3WqzK8DizoLRyaevEE1X43BobTeVh-AKMdriWdgHeOTTyYH8-vTKK3WMakiQzLDMCSMtM-smdFxy8Ag4hlQAnmoliy5lrDp1cQJhZsO4u7Tpxd2CIpAMF_o8siF2cjrhi4gqNBjoCeto6ckle9nKEylrVpAIO5B2oDPD2q-Du5WyTBTUD7fd1OU0cEYyFNmi1T0JxviuJM9OlRcRk8ReDwr60E-LovI00h5INbiNsG3Mc_8drEh7_WsZuSuGumlmGCmstIOux-xY"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-[24px]">
              <div className="flex flex-wrap gap-[8px]">
                <span className="text-blue-400 font-label-caps text-[12px] px-[8px] py-[4px] bg-blue-500/10 rounded-[4px] font-bold">
                  NEXT.JS
                </span>
                <span className="text-blue-400 font-label-caps text-[12px] px-[8px] py-[4px] bg-blue-500/10 rounded-[4px] font-bold">
                  WEBRTC
                </span>
              </div>
              <h3 className="text-[32px] font-bold leading-tight text-white">Architectural Blueprint Tool</h3>
              <p className="text-on-surface-variant text-[16px] leading-relaxed">
                건축가와 엔지니어를 위한 실시간 협업 도구입니다. 복잡한 2D/3D 도면 데이터를
                브라우저에서 지연 없이 렌더링하고 동기화하는 문제를 해결했습니다.
              </p>
              {/* Troubleshooting Box */}
              <div className="bg-surface-container-high border-l-[4px] border-blue-500 p-[20px] rounded-r-[8px]">
                <div className="flex items-center gap-[8px] mb-[8px] text-blue-400">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span className="font-label-caps text-[12px] font-bold">Troubleshooting</span>
                </div>
                <p className="text-[16px] font-semibold text-on-surface">
                  성능 이슈 해결: 병목 구간 최적화로 30% 개선
                </p>
                <p className="text-[13px] text-on-surface-variant mt-[4px] italic">
                  Canvas 렌더링 엔진의 레이어링 시스템을 재설계하여 수천 개의 객체가 포함된
                  도면에서도 60FPS를 유지하도록 개선했습니다.
                </p>
              </div>
              <a
                className="mt-[16px] flex items-center gap-[8px] text-white hover:text-blue-400 transition-colors font-bold group"
                href="#"
              >
                VIEW CASE STUDY
                <span className="material-symbols-outlined group-hover:translate-x-[4px] transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </article>

          {/* Project 2 */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-start bg-surface-container rounded-[16px] overflow-hidden border border-outline-variant/30 p-[32px] lg:p-[48px] hover:border-blue-500/30 transition-all duration-300">
            <div className="lg:col-span-5 flex flex-col gap-[24px] order-2 lg:order-1">
              <div className="flex flex-wrap gap-[8px]">
                <span className="text-blue-400 font-label-caps text-[12px] px-[8px] py-[4px] bg-blue-500/10 rounded-[4px] font-bold">
                  TYPESCRIPT
                </span>
                <span className="text-blue-400 font-label-caps text-[12px] px-[8px] py-[4px] bg-blue-500/10 rounded-[4px] font-bold">
                  REDIS
                </span>
              </div>
              <h3 className="text-[32px] font-bold leading-tight text-white">Core Analytics Engine</h3>
              <p className="text-on-surface-variant text-[16px] leading-relaxed">
                대규모 트래픽 환경에서의 데이터 수집 및 분석 엔진입니다. 분산 처리 시스템을 구축하여
                매일 수억 건의 이벤트를 무손실로 처리합니다.
              </p>
              <div className="bg-surface-container-high border-l-[4px] border-blue-500 p-[20px] rounded-r-[8px]">
                <div className="flex items-center gap-[8px] mb-[8px] text-blue-400">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span className="font-label-caps text-[12px] font-bold">Troubleshooting</span>
                </div>
                <p className="text-[16px] font-semibold text-on-surface">
                  데이터 정합성 최적화: 유실률 0% 달성
                </p>
                <p className="text-[13px] text-on-surface-variant mt-[4px] italic">
                  메시지 큐 재시도 전략과 멱등성 설계를 통해 네트워크 불안정 상황에서도 데이터 중복
                  및 유실을 완벽하게 방지했습니다.
                </p>
              </div>
              <a
                className="mt-[16px] flex items-center gap-[8px] text-white hover:text-blue-400 transition-colors font-bold group"
                href="#"
              >
                VIEW GITHUB
                <span className="material-symbols-outlined group-hover:translate-x-[4px] transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="lg:col-span-7 rounded-[12px] overflow-hidden border border-zinc-800 shadow-2xl order-1 lg:order-2">
              <img
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Core Analytics Engine"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChCEFVTtAIiWpmE1AnLuLtdnqVRwJ6-TciGqRxCDpkNn-DdONF0nw-5_J0-uBpKQm09f8Y8EgnP1Ng355YJ5ucEMxCYVMLV77YvXOdZMGMusBXGdLJL4aYfSmjQwsP6aXUraaAG4Cw6McnXL1Ur9WBWk995_3F3P8ZYVNpLsYsnfxbcxGkK9p4Kz8z7tRRkPMT03cPokySwRBmNmNAggAA5QD0SJm1o7-JAaryZgc1H_JMTD8mKicoFDjQRzmA1HvAuKHxZ6jGGjU"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
