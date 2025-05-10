import React from "react";
import { HiAtSymbol } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-primary text-secondary py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div className="flex items-center gap-2 text-sm">
            <HiAtSymbol className="text-lg" />
            <span className="font-normal">email@business.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FiPhoneCall className="text-lg" />
            <span className="font-normal">123-456-7890</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm mt-2 md:mt-0">
          <IoLocationOutline className="text-lg" />
          <span className="font-normal">Sindri Road, Dhanbad</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
