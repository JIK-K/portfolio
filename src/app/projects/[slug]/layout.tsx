import React from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-400 selection:bg-[#2E5BFF]/30">
      {children}
    </div>
  );
}
