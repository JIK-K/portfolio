import React from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 selection:bg-blue-500/30">
      {children}
    </div>
  );
}
