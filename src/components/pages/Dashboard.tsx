/** @format */

import Reveal from "@/utils/Reveal";
import React from "react";
import { Link } from "react-scroll";

const Dashboard = () => {
  return (
    <div className="min-h-screen h-screen">
      <div className="flex h-full lg:w-[80%] justify-center items-center flex-col gap-4">
        <Reveal>
          <h1 className="text-title text-6xl">
            Hai, saya Smart<span className="text-primary">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h5 className="text-lg">
            Saya seorang{" "}
            <span className="text-primary font-bold">Full Stack Developer</span>
          </h5>
        </Reveal>
        <Reveal>
          <p className="text-center">
            Saya memiliki pengalaman lebih dari lima tahun dalam pengembangan
            web end-to-end. Keahlian saya meliputi pemrograman frontend dan
            backend, serta pengembangan aplikasi web responsif dan interaktif.
            Saya memiliki pemahaman yang kuat tentang HTML, CSS, JavaScript, PHP
            dan juga berpengalaman dalam menggunakan framework seperti ReactJS,
            Node.js dan Laravel.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-4">
            <Link
              to="my-kontak"
              smooth={true}
              className="bg-primary text-black px-4 py-2 rounded-md cursor-pointer"
            >
              Kontak Saya
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Dashboard;
