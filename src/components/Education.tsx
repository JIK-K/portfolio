import { activities } from "../data/educations";

const Education = () => {
  return (
    <section className="py-[100px] bg-white" id="education">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        {/* Section Header */}
        <div className="flex items-center gap-[24px] mb-[60px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[40px] font-bold text-zinc-900 tracking-tighter whitespace-nowrap">
              Education
            </h2>
          </div>
          <div className="h-[1px] flex-grow bg-zinc-100"></div>
        </div>

        <div className="flex flex-col gap-[40px]">
          <div className="relative border-l border-zinc-100 ml-[8px] flex flex-col gap-[64px]">
            {activities.map((item) => (
              <div
                key={item.title}
                className="relative pl-[40px] group cursor-pointer"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[6px] top-[8px] w-[12px] h-[12px] rounded-full transition-all duration-300 bg-zinc-200 group-hover:bg-blue-500 group-hover:ring-[6px] group-hover:ring-blue-500/10"></div>

                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <span className="text-[12px] font-black tracking-widest text-zinc-400 group-hover:text-blue-600 transition-colors duration-300">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 border border-zinc-100 px-[8px] py-[2px] rounded-full uppercase tracking-tighter group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <h4 className="text-[24px] font-bold text-zinc-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 text-[16px] leading-relaxed max-w-[800px] whitespace-pre-wrap">
                      {item.description}
                    </p>
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

export default Education;
