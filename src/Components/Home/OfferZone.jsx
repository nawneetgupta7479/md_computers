import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import offerZoneData from '../../data/offerZoneData';
import Headline from '../common/Headline';
import AnimatedText from '../common/AnimatedText';

const OfferZone = () => {
  // State to track which offers are currently visible
  const [visibleOffers, setVisibleOffers] = useState([0, 1, 2]);
  
  // Rotate through offers every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleOffers(current => {
        const newVisible = current.map(index => (index + 1) % offerZoneData.length);
        return newVisible;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="container mx-auto">
        <Headline 
          title={<>Special <AnimatedText text="Offers" /></>}
          subtitle="Limited time deals on the best tech products. Grab them before they're gone!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {visibleOffers.map((offerIndex, gridIndex) => (
            <div 
              key={gridIndex} 
              className="h-[300px] w-full overflow-hidden rounded-sm shadow-md"
              style={{ aspectRatio: '16/9' }}
            >
              <div className="h-full w-full relative">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={offerZoneData[offerIndex].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative h-full w-full group"
                  >
                    {/* Discount tag - SMALLER SIZE */}
                    <div className="absolute top-4 left-4 z-20 bg-yellow-500 text-black font-medium text-xs py-0.5 px-2 rounded-full">
                      -{offerZoneData[offerIndex].discount}
                    </div>
                    
                    {/* Image */}
                    <motion.div 
                      className="absolute inset-0 z-0"
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={offerZoneData[offerIndex].image} 
                        alt={offerZoneData[offerIndex].title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6 z-10"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <h3 className="text-white text-xl font-bold mb-2">
                        {offerZoneData[offerIndex].title}
                      </h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        {offerZoneData[offerIndex].description}
                      </p>
                      
                      {/* Buy now button - SMALLER & RIGHT-ALIGNED */}
                      <div className="flex justify-end">
                        <Link 
                          to={offerZoneData[offerIndex].link}
                          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-xs py-1 px-3 rounded-md transition-colors duration-300"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferZone;