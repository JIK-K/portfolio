import React from "react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Activity from "../components/Education";
import Certification from "../components/Certification";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <TechStack />
      <Projects />
      <Career />
      <Activity />
      <Certification />
    </div>
  );
}
