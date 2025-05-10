import React from 'react';
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

// Accept product data as a prop
const ProductCard = ({ product }) => {
  if (!product) {
    return null; // Return null if no product data is provided
  }

  const { name, image, price, discount } = product;
  
  // Calculate discounted price
  const discountedPrice = discount ? price - (price * discount / 100) : price;

  return (
    // Keep original styles for the main card container
    <div className="group relative border border-none rounded-sm overflow-hidden duration-300">
      {/* Image Container - Keep aspect ratio */}
      <div className="relative overflow-hidden aspect-[4/3] rounded-sm bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="object-contain h-[100%] w-[100%] group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />

        {/* Discount badge - only show if discount exists */}
        {discount && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-black font-medium text-xs px-2 py-1 rounded-full flex items-center">
            <MdLocalOffer className="mr-1" />
            -{discount}%
          </div>
        )}

        {/* Overlay with Action Icons - Keep original styles */}
        <div
          className="text-black absolute bottom-0 left-0 right-0 bg-white backdrop-blur-sm p-2
                     opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0
                     transition-all duration-300 ease-in-out m-4"
        >
          {/* Keep original text color */}
          <ul className="flex justify-around items-center text-[#535353]">
            {/* Add to Cart */}
            <li className="relative group/icon">
              <button
                className='p-2 cursor-pointer hover:text-[#fcb424] transition-colors duration-200'
              >
                <LiaCartArrowDownSolid size={22} />
              </button>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-2 py-1 bg-[#464545] text-white text-xs rounded
                           opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0
                           transition-all duration-200 delay-100 ease-in-out whitespace-nowrap"
              >
                Add to Cart
              </span>
            </li>
            {/* Other action buttons remain the same */}
            <li className="relative group/icon">
              <button
                className='p-2 cursor-pointer hover:text-[#fcb424] transition-colors duration-200'
              >
                <CiHeart size={22} />
              </button>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-2 py-1 bg-[#464545] text-white text-xs rounded
                           opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0
                           transition-all duration-200 delay-100 ease-in-out whitespace-nowrap"
              >
                Add to Wishlist
              </span>
            </li>
            <li className="relative group/icon">
              <button
                className='p-2 cursor-pointer hover:text-[#fcb424] transition-colors duration-200'
              >
                <IoIosGitCompare size={22} />
              </button>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-2 py-1 bg-[#464545] text-white text-xs rounded
                           opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0
                           transition-all duration-200 delay-100 ease-in-out whitespace-nowrap"
              >
                Compare
              </span>
            </li>
            <li className="relative group/icon">
              <button
                className='p-2 cursor-pointer hover:text-[#fcb424] transition-colors duration-200'
              >
                <FaRegEye size={20} />
              </button>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-5 px-2 py-1 bg-[#464545] text-white text-xs rounded
                           opacity-0 translate-y-1 group-hover/icon:opacity-100 group-hover/icon:translate-y-0
                           transition-all duration-200 delay-100 ease-in-out whitespace-nowrap"
              >
                Quick View
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Details - Updated to show original and discounted price */}
      <div className="p-5 text-center">
        <h3 className="text-md font-medium cursor-pointer text-[#0D0E10] hover:text-[#fcb424] mb-1 truncate transition-colors duration-200" title={name}>
          {name}
        </h3>
        
        <div className="flex justify-center items-center gap-2">
          {discount ? (
            <>
              {/* Original price - crossed out */}
              <p className="text-sm font-medium text-gray-500 line-through">
                {price.toFixed(2)}
              </p>
              {/* Discounted price - highlighted */}
              <p className="text-lg font-semibold text-[#535353]">
                {discountedPrice.toFixed(2)}
              </p>
            </>
          ) : (
            // Regular price if no discount
            <p className="text-lg font-semibold text-[#535353]">
              {price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;