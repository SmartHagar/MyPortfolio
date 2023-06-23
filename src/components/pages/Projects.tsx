/** @format */

import Reveal from "@/utils/Reveal";
import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Reveal>
        <h1 className="text-title text-6xl font-bold mb-6">Projects</h1>
      </Reveal>
      <Reveal>
        <div className="mt-28">
          <h3 className="text-title text-4xl font-bold">Kemampuan</h3>
          <Reveal>
            <p className="mt-4">
              Kemampuan di bidang front-end development, seperti HTML, CSS,
              JavaScript. Kemampuan di bidang back-end development, seperti PHP,
              MySQL, dan MongoDB. Pengalaman dalam menggunakan framework seperti
              React JS, Next JS, dan Laravel. Kemampuan dalam mengembangkan
              aplikasi mobile menggunakan React Native.
            </p>
          </Reveal>
        </div>
      </Reveal>
    </div>
  );
};

export default Projects;
