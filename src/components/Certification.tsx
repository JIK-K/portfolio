import { certifications } from "../data/certifications";

const Certification = () => {
  return (
    <section
      className="min-h-[calc(100vh-70px)] py-[100px] bg-zinc-950"
      id="certification"
    >
      <div className="max-w-[1280px] mx-auto px-[32px]">
        {/* Section Header */}
        <div className="flex items-center gap-[24px] mb-[60px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[40px] font-bold text-white tracking-tighter whitespace-nowrap">
              Certification
            </h2>
          </div>
          <div className="h-[1px] flex-grow bg-zinc-900"></div>
        </div>

        <div className="grid grid-cols-1 gap-[16px]">
          {certifications.map((item) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row md:items-center justify-between p-[24px] rounded-[24px] border border-zinc-900 hover:bg-zinc-900/30 transition-all group"
            >
              <div className="flex flex-col gap-[4px]">
                <h4 className="text-[18px] font-bold text-zinc-200 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-[12px]">
                  <span className="text-[14px] text-zinc-500">
                    {item.issuer}
                  </span>
                </div>
              </div>
              <div className="mt-[12px] md:mt-0 text-[14px] font-black text-blue-500 font-mono">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
