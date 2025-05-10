import React, { useState, useEffect } from 'react';
import testimonials from '../../data/whatYouSayAboutUs';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Headline from '../common/Headline';
import AnimatedText from '../common/AnimatedText';

const WhatYouSayAboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-gray-300" />
        )
      );
    }
    return stars;
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-yellow-50 to-white">
      <div className="container mx-auto">
        {/* Section title using Headline component */}
        <Headline
          title={<>Customer <AnimatedText text="Testimonials" /></>}
          subtitle="Read what our customers have to say about their experience with MD Computers."
        />

        {/* Testimonials carousel */}
        <div className="max-w-4xl mx-auto" 
             onMouseEnter={() => setAutoplay(false)}
             onMouseLeave={() => setAutoplay(true)}>
          
          {/* Updated background color for inner container */}
          <div className="bg-gradient-to-br from-yellow-50/50 to-white rounded-lg shadow-md overflow-hidden border border-yellow-100/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 flex flex-col md:flex-row items-center"
              >
                {/* Customer photo */}
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-yellow-100 shadow-md">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/testimonials/default-avatar.jpg';
                        }}
                      />
                    </div>
                    {testimonials[activeIndex].verified && (
                      <div className="absolute bottom-0 right-0 bg-yellow-500 p-1 rounded-full shadow-sm">
                        <MdVerified className="text-white text-sm" />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                  
                  <p className="text-gray-700 mb-4 relative">
                    <span className="absolute -left-2 -top-2 text-yellow-200 text-3xl">"</span>
                    {testimonials[activeIndex].comment}
                    <span className="absolute -right-2 bottom-0 text-yellow-200 text-3xl">"</span>
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-lg text-gray-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-yellow-600 text-sm">{testimonials[activeIndex].profession}</p>
                    <p className="text-xs text-gray-400 mt-1">{testimonials[activeIndex].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-yellow-500 scale-125 shadow-md' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouSayAboutUs;