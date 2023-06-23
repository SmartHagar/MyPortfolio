/** @format */

import Reveal from "@/utils/Reveal";
import {
  BsTelephoneFill,
  BsFillPinMapFill,
  BsEnvelopeAtFill,
} from "react-icons/bs";

const MyKontak = () => {
  return (
    <div className="min-h-screen">
      <Reveal>
        <h1 className="text-title text-6xl font-bold mb-6">Kontak</h1>
      </Reveal>
      <Reveal>
        <p>Ingin membahas website lebih lanjut? Silahkan hubungi saya.</p>
      </Reveal>
      <div className="mt-10 flex flex-col md:flex-row justify-between mr-20">
        <Reveal>
          <div className="w-52 h-28 border border-primary rounded-2xl flex justify-center items-center gap-2">
            <BsTelephoneFill className="text-white" />
            <span className="text-white">+6282248931369</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-72 h-28 border border-primary rounded-2xl flex justify-center items-center gap-2">
            <BsEnvelopeAtFill className="text-white" />
            <span className="text-white">smarttamalonggehe@gmail.com</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="w-60 h-28 border border-primary rounded-2xl flex justify-center items-center gap-2">
            <BsFillPinMapFill className="text-white" />
            <span className="text-white">Abepura, Jayapura, Papua</span>
          </div>
        </Reveal>
      </div>
      {/* Peta */}
      <Reveal>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9114.41722985471!2d140.64736705344504!3d-2.6022774504820854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1687518536353!5m2!1sen!2sid"
            width="90%"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Reveal>
    </div>
  );
};

export default MyKontak;
