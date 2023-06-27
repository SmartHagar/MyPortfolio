/** @format */
"use client";
import { BASE_URL, url_storage } from "@/services/baseURL";
import useProjectApi from "@/store/api/Projects";
import Reveal from "@/utils/Reveal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const { setProject, dtProject } = useProjectApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  // memanggil setProject
  const fetchDataProject = () => {
    setProject({
      page,
      limit,
      search,
    });
  };
  useEffect(() => {
    fetchDataProject();

    return () => {
      fetchDataProject();
    };
  }, [page, limit]);

  return (
    <div className="min-h-screen">
      <Reveal>
        <h1 className="text-title text-4xl lg:text-6xl font-bold mb-6">
          Projects
        </h1>
      </Reveal>
      <div className="lg:mt-28 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {dtProject?.data &&
          dtProject.data.map((item: any) => (
            <div key={item.id}>
              <Reveal>
                <div className="flex flex-col border border-secondary rounded-2xl shadow-md shadow-primary h-72 relative">
                  <div className="relative w-full">
                    <Image
                      src={`${BASE_URL}/${item.image}`}
                      alt=""
                      sizes="(100vw, 100vh)"
                      width={100}
                      height={100}
                      className="rounded-2xl w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap p-4">
                    <span>Link Github: </span>
                    <span>{item.link_github}</span>
                  </div>
                  <div className="absolute bottom-2 right-0 left-0 flex justify-center">
                    <Link
                      href={item.link_website}
                      target="_blank"
                      className="bg-primary rounded-lg px-4 py-2 text-white w-fit cursor-pointer hover:shadow-sm hover:shadow-secondary hover:underline"
                    >
                      Lihat
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
