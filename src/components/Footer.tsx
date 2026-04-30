import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-900 mt-[128px] bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-[48px] py-[64px] max-w-[1280px] mx-auto gap-[32px] uppercase tracking-widest text-[10px] font-semibold">
        <div className="text-zinc-500">© 2024 JUNG WOON JIK. BUILT IN SEOUL.</div>
        <div className="flex gap-[32px]">
          <a className="text-zinc-500 hover:text-[#2E5BFF] transition-colors duration-200" href="#">Github</a>
          <a className="text-zinc-500 hover:text-[#2E5BFF] transition-colors duration-200" href="#">LinkedIn</a>
          <a className="text-zinc-500 hover:text-[#2E5BFF] transition-colors duration-200" href="#">Resume</a>
          <a className="text-zinc-500 hover:text-[#2E5BFF] transition-colors duration-200" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
