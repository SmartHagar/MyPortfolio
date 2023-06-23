/** @format */
"use client";
import Dashboard from "@/components/pages/Dashboard";
import Tentang from "@/components/pages/Tentang";
import Kemampuan from "@/components/pages/Kemampuan";
import Projects from "@/components/pages/Projects";
import MyKontak from "@/components/pages/MyKontak";

import { Element } from "react-scroll";
export default function Home() {
  return (
    <main>
      <div>
        <Element name="dashboard">
          <Dashboard />
        </Element>
        <Element name="tentang" className="pt-20">
          <Tentang />
        </Element>
        <Element name="kemampuan" className="pt-20">
          <Kemampuan />
        </Element>
        <Element name="projects" className="pt-20">
          <Projects />
        </Element>
        <Element name="my-kontak" className="pt-20">
          <MyKontak />
        </Element>
      </div>
    </main>
  );
}
