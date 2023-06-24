/** @format */

import Reveal from "@/utils/Reveal";
import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Reveal>
        <h1 className="text-title text-4xl lg:text-6xl font-bold mb-6">
          Projects
        </h1>
      </Reveal>
      <Reveal>
        <div className="lg:mt-28 mt-10 grid grid-cols-3 gap-2">
          <div className="flex flex-col border border-secondary rounded-2xl shadow-md shadow-primary h-60">
            <div>gambar</div>
            <div className="overflow-auto whitespace-nowrap p-4">
              <span>
                Link Github Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Modi, autem tempora mollitia dolor aut quos recusandae
                molestiae reprehenderit, exercitationem, soluta nulla laboriosam
                ad? Vero sit minima incidunt optio. Quisquam, ad.
              </span>
              <span>Link Website</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Projects;
