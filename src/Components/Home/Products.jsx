import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import productsData from '../../data/products';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { RiHashtag } from "react-icons/ri";
import { MdFiberNew } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { RiStarHalfFill } from "react-icons/ri";
import Headline from '../common/Headline';
import AnimatedText from '../common/AnimatedText';

const Products = () => {
  // State to manage active filter
  const [activeFilter, setActiveFilter] = useState('Trending');
  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  // Filter products based on active tag
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => 
      product.tags && product.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  // Function to handle filter selection
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowDropdown(false);
  };

  return (
    <div className='container mx-auto px-4 py-16'>
      {/* Header section with title and description */}
      <Headline
        title={<>Feel the <AnimatedText text="Charge" /> of Change</>}
        subtitle="Discover our latest collection of high-performance computers and accessories."
      />

      {/* Desktop View */}
      <div className='hidden md:flex justify-between items-center mb-8 bg-gray-50 rounded-lg p-3'>
        {/* Left side: Tag filter buttons */}
        <div className='flex items-center space-x-3 overflow-x-auto pb-1'>
          <button 
            onClick={() => setActiveFilter('Trending')}
            className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200
              ${activeFilter === 'Trending' ? 'bg-yellow-500 text-black' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
          >
            <RiHashtag className="w-4 h-4" />
            <span>Trending</span>
          </button>
          
          <button 
            onClick={() => setActiveFilter('Latest')}
            className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200
              ${activeFilter === 'Latest' ? 'bg-yellow-500 text-black' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
          >
            <MdFiberNew className="w-4 h-4" />
            <span>Latest</span>
          </button>
          
          <button 
            onClick={() => setActiveFilter('Bestsellers')}
            className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200
              ${activeFilter === 'Bestsellers' ? 'bg-yellow-500 text-black' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
          >
            <FaRegThumbsUp className="w-4 h-4" />
            <span>Bestsellers</span>
          </button>
          
          <button 
            onClick={() => setActiveFilter('Rated')}
            className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200
              ${activeFilter === 'Rated' ? 'bg-yellow-500 text-black' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
          >
            <RiStarHalfFill className="w-4 h-4" />
            <span>Rated</span>
          </button>
        </div>
        
        {/* Right side: View All link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200 whitespace-nowrap"
        >
          <span>View All</span>
          <MdArrowForward className="w-5 h-5" />
        </Link>
      </div>

      {/* Mobile View with Dropdown */}
      <div className='md:hidden flex justify-between items-center mb-8 bg-gray-50 rounded-lg p-3 relative'>
        {/* Dropdown button */}
        <div className='relative'>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200 bg-yellow-500 text-black`}
          >
            {activeFilter === 'Trending' && <RiHashtag className="w-4 h-4" />}
            {activeFilter === 'Latest' && <MdFiberNew className="w-4 h-4" />}
            {activeFilter === 'Bestsellers' && <FaRegThumbsUp className="w-4 h-4" />}
            {activeFilter === 'Rated' && <RiStarHalfFill className="w-4 h-4" />}
            <span>{activeFilter}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown menu */}
          {showDropdown && (
            <div className='absolute top-full left-0 mt-1 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10 min-w-[150px]'>
              <button 
                onClick={() => handleFilterChange('Trending')}
                className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200 w-full text-left
                  ${activeFilter === 'Trending' ? 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}
              >
                <RiHashtag className="w-4 h-4" />
                <span>Trending</span>
              </button>
              
              <button 
                onClick={() => handleFilterChange('Latest')}
                className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200 w-full text-left
                  ${activeFilter === 'Latest' ? 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}
              >
                <MdFiberNew className="w-4 h-4" />
                <span>Latest</span>
              </button>
              
              <button 
                onClick={() => handleFilterChange('Bestsellers')}
                className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200 w-full text-left
                  ${activeFilter === 'Bestsellers' ? 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}
              >
                <FaRegThumbsUp className="w-4 h-4" />
                <span>Bestsellers</span>
              </button>
              
              <button 
                onClick={() => handleFilterChange('Rated')}
                className={`flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors duration-200 w-full text-left
                  ${activeFilter === 'Rated' ? 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'}`}
              >
                <RiStarHalfFill className="w-4 h-4" />
                <span>Rated</span>
              </button>
            </div>
          )}
        </div>
        
        {/* Right side: View All link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200 whitespace-nowrap"
        >
          <span>View All</span>
          <MdArrowForward className="w-5 h-5" />
        </Link>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;