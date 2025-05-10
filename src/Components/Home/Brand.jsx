import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Brand = () => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);
  
  // Brand data with image paths and product page links
  const brands = [
    { id: 1, name: 'Asus', image: '/home/brands/brand1.png', link: '/products/brand/asus' },
    { id: 2, name: 'MSI', image: '/home/brands/brand2.jpg', link: '/products/brand/msi' },
    { id: 3, name: 'Dell', image: '/home/brands/brand3.png', link: '/products/brand/dell' },
    { id: 4, name: 'HP', image: '/home/brands/brand4.jpg', link: '/products/brand/hp' },
    { id: 5, name: 'Lenovo', image: '/home/brands/brand5.png', link: '/products/brand/lenovo' },
    { id: 6, name: 'Corsair', image: '/home/brands/brand6.jpg', link: '/products/brand/corsair' },
  ];

  // Calculate width based on brand item width + spacing
  const brandItemWidth = 160; // Increased from 112px to 140px
  const spacing = 120; // space-x-12 = 3rem = 48px
  const singleItemWidth = brandItemWidth + spacing;
  
  // Total width of a single set of brands
  const totalWidth = singleItemWidth * brands.length;

  return (
    <section className="py-20 bg-[#FFF4EF]">
      
      {/* Brand slider with 3 visible items */}
      <div className="relative overflow-hidden">
        <div 
          className="max-w-screen-lg mx-auto" 
          style={{ width: singleItemWidth * 3, overflow: 'hidden' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="flex space-x-20"
            animate={{ x: [-totalWidth, 0] }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 30,
              ease: "linear",
              paused: isHovered // Pause animation when hovered
            }}
          >
            {/* Double the brands array to ensure continuous looping */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <Link 
                key={`${brand.id}-${index}`} 
                to={brand.link}
                className="flex items-center justify-center w-48 h-24 hover:scale-110 transition-all duration-300 flex-shrink-0 bg-white shadow-sm p-2 cursor-pointer"
                aria-label={`View ${brand.name} products`}
              >
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain" 
                />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brand;