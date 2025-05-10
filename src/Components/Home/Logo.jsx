import React from 'react';
import { Link } from 'react-router-dom'; 
import { HiOutlineDesktopComputer } from 'react-icons/hi'; 

const Logo = () => {
  return (
    
    <Link to="/" className="inline-block font-sans"> 
      <div className="flex items-center cursor-pointer gap-2">
        <HiOutlineDesktopComputer className="text-yellow-500 h-8 w-8" /> 

        <div className="flex items-baseline"> 
         
          <span className="text-3xl font-semibold text-yellow-500 tracking-tight">City</span>
         
          <span className="text-3xl font-light text-gray-800 dark:text-white ml-1 tracking-tight">Computers</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
