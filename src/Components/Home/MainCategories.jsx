import React, { useState, useMemo } from 'react';
import productsData from '../../data/products';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

const MainCategories = () => {
  // Set the default category to "Computers & Laptops"
  const [activeCategory, setActiveCategory] = useState('Computers & Laptops');
  // State to track current page/offset
  const [currentOffset, setCurrentOffset] = useState(0);
  // Products per page (2 rows x 4 columns)
  const productsPerPage = 8;

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => 
      product.category === activeCategory
    );
  }, [activeCategory]);

  // Get current products to display
  const currentProducts = useMemo(() => {
    return filteredProducts.slice(currentOffset, currentOffset + productsPerPage);
  }, [filteredProducts, currentOffset]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentOffset(0); // Reset offset when changing category
  };

  // Navigate to previous/next set of products
  const handlePrevious = () => {
    setCurrentOffset(Math.max(0, currentOffset - productsPerPage));
  };

  const handleNext = () => {
    if (currentOffset + productsPerPage < filteredProducts.length) {
      setCurrentOffset(currentOffset + productsPerPage);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6">
        {/* Category navigation with navigation controls on the right */}
        <div className='category-name pb-4 border-b-2 border-gray-200  flex justify-between items-center'>
          {/* Category list */}
          <ul className='flex flex-wrap gap-6 md:gap-8'>
            {['Computers & Laptops', 'Components', 'Peripherals', 'Accessories'].map((category) => (
              <li 
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer py-2 text-lg font-medium transition-colors duration-200
                  ${activeCategory === category ? 'text-yellow-500' : 'text-gray-600 dark:text-gray-400 hover:text-gray-700 '}`}
              >
                {category}
              </li>
            ))}
          </ul>
          
          {/* Navigation controls - only show if there are more products */}
          {filteredProducts.length > productsPerPage && (
            <div className="flex space-x-2 ml-4">
              <button 
                onClick={handlePrevious}
                disabled={currentOffset === 0}
                className={`p-2 rounded-full ${
                  currentOffset === 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <MdArrowBack className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                disabled={currentOffset + productsPerPage >= filteredProducts.length}
                className={`p-2 rounded-full ${
                  currentOffset + productsPerPage >= filteredProducts.length 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <MdArrowForward className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Products grid - limited to 8 products (2 rows of 4) */}
      <div className='product-of-categories mt-8'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Show message if no products in category */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCategories;