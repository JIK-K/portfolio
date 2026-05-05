"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  const pathname = usePathname();

  const isProjectPage = pathname?.startsWith("/projects");

  return (
    <>
      {!isProjectPage && <Header />}

      <main className="pb-[128px]">{children}</main>

      <Footer />
    </>
  );
}
