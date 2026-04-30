import React from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
    </div>
  );
}
