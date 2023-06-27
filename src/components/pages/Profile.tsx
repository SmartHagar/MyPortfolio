/** @format */

import colors from "@/constant/colors";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="mx-4 flex flex-col overflow-auto max-h-screen">
      {/* foto */}
      <div className="mx-auto mt-36">
        <Image
          alt="foto"
          src="/img/MySelf.jpg"
          width={150}
          height={150}
          style={{
            objectFit: "fill",
            objectPosition: "center",
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            borderWidth: "5px",
            borderColor: colors.secondary,
          }}
        />
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-bold text-white text-center mb-4">
          Smart Tamalonggehe
        </h1>
        <p className="text-center">
          Membawa ide menjadi kenyataan dan menghadirkan solusi website yang
          efisien dan efektif.
        </p>
        <p className="font-bold mt-3 text-center">
          {"Let's"} build something great together
        </p>
      </div>
      {/* social */}
      <div className="mx-auto mt-10 flex gap-4 mb-24">
        <a
          href="https://www.facebook.com/drackula.blood"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook"
        >
          <BsFacebook className="hover:text-cyan-600" />
        </a>
        <a
          href="https://www.instagram.com/smartspartacus/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          <BsInstagram className="hover:text-red-600" />
        </a>
        <a
          href="https://twitter.com/SmartSparta"
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
          <BsTwitter className="hover:text-blue-600" />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          title="tiktok"
        >
          <BsTiktok className="hover:text-black" />
        </a>
      </div>
    </div>
  );
};

export default Profile;
