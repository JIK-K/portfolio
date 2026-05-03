import { careers } from "../data/careers";

const Career = () => {
  return (
    <section className="py-[100px] bg-zinc-950" id="career">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        {/* Section Header */}
        <div className="flex items-center gap-[24px] mb-[60px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[40px] font-bold text-white tracking-tighter whitespace-nowrap">
              Career
            </h2>
          </div>
          <div className="h-[1px] flex-grow bg-zinc-900"></div>
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="relative border-l border-zinc-800 ml-[8px] flex flex-col gap-[64px]">
            {careers.map((item) => (
              <div
                key={item.title}
                className="relative pl-[40px] group cursor-pointer"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[6px] top-[8px] w-[12px] h-[12px] rounded-full transition-all duration-300 bg-zinc-800 group-hover:bg-blue-500 group-hover:ring-[6px] group-hover:ring-blue-500/20"></div>

                <div className="flex flex-col gap-[16px]">
                  <span className="text-[12px] font-black tracking-widest text-zinc-600 group-hover:text-blue-500 transition-colors duration-300">
                    {item.period}
                  </span>

                  <div className="flex flex-col gap-[8px]">
                    <h4 className="text-[24px] font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-[16px] leading-relaxed max-w-[800px] whitespace-pre-wrap">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-[8px]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-zinc-500 px-[10px] py-[4px] border border-zinc-800 rounded-full group-hover:border-blue-500/30 group-hover:text-zinc-400 transition-colors"
                      >
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
