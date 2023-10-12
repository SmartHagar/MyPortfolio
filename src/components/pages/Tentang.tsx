/** @format */

import Reveal from "@/utils/Reveal";
import React from "react";

const Tentang = () => {
  // get year now
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Reveal>
        <h1 className="text-title text-4xl lg:text-6xl font-bold mb-6">
          Tentang Saya
        </h1>
      </Reveal>
      <Reveal>
        <div>
          Saya senang menjaga diri saya tetap terdepan dalam tren dan teknologi
          terbaru. Saya selalu mencari peluang untuk belajar dan meningkatkan
          keterampilan saya. Saya percaya bahwa kombinasi kreativitas, keahlian
          teknis, dan keuletan adalah kunci untuk memberikan solusi web yang
          handal dan efisien kepada klien.
        </div>
      </Reveal>
      <Reveal>
        <div className="lg:mt-28 mt-10">
          <h3 className="text-title text-3xl lg:text-4xl font-bold">
            Informasi Diri
          </h3>
          <Reveal>
            <div className="mt-8 flex flex-col gap-2">
              <p className="flex gap-2">
                <span className="font-bold text-title">Umur :</span>{" "}
                <span>{year - 1990}</span>
              </p>
              <p className="flex gap-2">
                <span className="font-bold text-title">Kota :</span>{" "}
                <span>Jayapura-Papua</span>
              </p>
              <p className="flex gap-2">
                <span className="font-bold text-title">Alamat :</span>{" "}
                <span>Abepura</span>
              </p>
              <p className="flex gap-2">
                <span className="font-bold text-title">Email :</span>{" "}
                <span>smarttamalonggehe@gmail.com</span>
              </p>
              <p className="flex gap-2">
                <span className="font-bold text-title">No. HP :</span>{" "}
                <span>082248931369</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </div>
  );
};

export default Tentang;
