/** @format */

import Reveal from "@/utils/Reveal";
import React from "react";

const Kemampuan = () => {
  return (
    <div className="min-h-screen">
      <Reveal>
        <h1 className="text-title text-4xl lg:text-6xl font-bold mb-6">
          Resume
        </h1>
      </Reveal>
      <Reveal>
        <div className="lg:mt-28 mt-10">
          <h3 className="text-title text-3xl lg:text-4xl font-bold">
            Kemampuan
          </h3>
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
      <Reveal>
        <div className="mt-12">
          <h3 className="text-title text-3xl lg:text-4xl font-bold">
            Pengalaman
          </h3>
          <Reveal>
            <p className="mt-4">
              Pengalaman kerja sebagai full stack developer di beberapa
              perusahaan, termasuk mengembangkan aplikasi web dan mobile dari
              awal hingga akhir. Memiliki pengalaman dalam menggunakan berbagai
              bahasa pemrograman dan framework, serta bekerja dengan tim
              pengembang yang terdiri dari front-end dan back-end developer.
            </p>
          </Reveal>
        </div>
      </Reveal>
    </div>
  );
};

export default Kemampuan;
