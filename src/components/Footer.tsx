import React from "react";

const FOOTER_LINKS = [
  {
    label: "Github",
    href: "https://github.com/JIK-K",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Email",
    href: "mailto:dnswlrsla@gmail.com",
    target: undefined,
    rel: undefined,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-[48px] py-[64px] max-w-[1280px] mx-auto gap-[32px] uppercase tracking-widest text-[10px] font-semibold">
        <div className="text-zinc-500">
          © {currentYear} JUNG WOON JIK. BASED IN REPUBLIC OF KOREA.
        </div>
        <div className="flex gap-[32px]">
          {FOOTER_LINKS.map(({ label, href, target, rel }) => (
            <a
              key={label}
              className="text-zinc-500 hover:text-[#2E5BFF] transition-colors duration-200"
              href={href}
              target={target}
              rel={rel}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
