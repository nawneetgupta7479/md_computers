import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div
      className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-start justify-end text-white"
      style={{
        backgroundImage: "url('/home/banner1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative rounded-sm bg-[#FFCD05] text-black z-10 flex flex-col text-start
                     max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                     mx-4 my-12 sm:my-16 md:my-20 lg:my-24 
                     px-6 py-8 sm:px-10 sm:py-12 md:px-16 md:py-14 lg:px-20 lg:py-16"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">
          Have Questions?
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
          We're here to help. Feel free to reach out.
        </h2>
        <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-7 md:mb-8">
          Our dedicated team is ready to assist you with product details, order inquiries, or any technical support you might need.
        </p>

        <Link to="/contact" className='self-start'>
          <button
            className="inline-flex items-center cursor-pointer gap-2
                       px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
                       bg-[#0d0e10] text-white font-semibold rounded-md shadow-md
                       hover:bg-white focus:outline-none
                       transition duration-300 ease-in-out transform hover:text-black"
          >
            <span>Contact Info</span>
            <MdArrowOutward className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
