/** @format */
"use client";
import {
  BsHouseFill,
  BsPersonHeart,
  BsFillMortarboardFill,
  BsFillWalletFill,
  BsTelephoneFill,
} from "react-icons/bs";

import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav className="lg:mt-[60px] lg:ml-[60px] flex lg:flex-col gap-10 rounded-full items-center px-6 lg:py-8 py-4 shadow-md ld:shadow-lg shadow-primary bg-black-200">
      <Link
        to="dashboard"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="text-primary"
      >
        <div className="cursor-pointer" title="Home">
          <BsHouseFill size={30} />
        </div>
      </Link>
      <Link
        to="tentang"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="text-primary"
      >
        <div className="cursor-pointer" title="Tentang">
          <BsPersonHeart size={30} />
        </div>
      </Link>
      <Link
        to="kemampuan"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="text-primary"
      >
        <div className="cursor-pointer" title="Resume">
          <BsFillMortarboardFill size={30} />
        </div>
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="text-primary"
      >
        <div className="cursor-pointer" title="Projects">
          <BsFillWalletFill size={30} />
        </div>
      </Link>
      <Link
        to="my-kontak"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="text-primary"
      >
        <div className="cursor-pointer" title="Kontak">
          <BsTelephoneFill size={30} />
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
