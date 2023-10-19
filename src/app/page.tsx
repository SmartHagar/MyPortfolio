/** @format */
"use client";
import Dashboard from "@/components/pages/Dashboard";
import Tentang from "@/components/pages/Tentang";
import Kemampuan from "@/components/pages/Kemampuan";
import Projects from "@/components/pages/Projects";
import MyKontak from "@/components/pages/MyKontak";

import { Element } from "react-scroll";
import Profile from "@/components/pages/Profile";
import Nav from "@/components/navbar/Nav";
export default function Home() {
  return (
    <div className="lg:flex bg-black-100 text-body">
      <div className="fixed bottom-0 flex justify-center w-full lg:fixed lg:w-auto lg:bottom-auto z-50">
        <Nav />
      </div>
      <div className="flex-1 px-10 lg:pl-48 lg:mr-80 lg:pr-4">
        <Element name="dashboard">
          <Dashboard />
        </Element>
        <Element name="tentang" className="pb-20 pt-4 lg:pt-20 lg:pb-0">
          <Tentang />
        </Element>
        <Element name="kemampuan" className="pb-20 pt-4 lg:pt-20 lg:pb-0">
          <Kemampuan />
        </Element>
        <Element name="projects" className="pb-20 pt-4 lg:pt-20 lg:pb-0">
          <Projects />
        </Element>
        <Element name="my-kontak" className="pb-20 pt-4 lg:pt-20 lg:pb-0">
          <MyKontak />
        </Element>
      </div>
      <div className="xl:block xl:fixed lg:right-0 lg:w-80 lg:h-screen lg:bg-black-200">
        <Profile />
      </div>
    </div>
  );
}
