import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div id="here" className="flex items-center justify-center">
      <IoIosArrowBack
        size={30}
        className="mr-20 xs:hidden md:block px-1 hover:bg-gray-500"
      />
      <div className="flex-1 p-4 rounded-lg shadow-xl max-w-3xl sm:p-8">
        <div className="aspect-w-16 aspect-h-7">
          <iframe
            src="https://www.youtube.com/embed/LHlITSMJC4U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <IoIosArrowForward
        size={30}
        className="ml-20 xs:hidden md:block px-1 hover:bg-gray-500"
      />
    </div>
  );
};

export default Hero;