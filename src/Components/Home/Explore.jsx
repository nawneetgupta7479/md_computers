import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Explore = () => {
  // Define the swiper images
  const swiperImages = [
    '/home/explore/explore_swiper1.jpg',
    '/home/explore/explore_swiper2.jpg',
    '/home/explore/explore_swiper3.webp',
    '/home/explore/explore_swiper4.webp',
    
    // Add more images as needed
  ];

  return (
    <div className="px-6 py-16">
      {/* First row - 1 big image left, column of images right - always 2 columns */}
      <div className="grid grid-cols-2 mb-4">
        {/* Left image - large */}
        <div className="overflow-hidden mr-[1.5px] shadow-md hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/home/explore/explore1.jpg"
            alt="Gaming setup with RGB lighting" 
            className="w-full cursor-pointer h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right column */}
        <div className="grid grid-rows-2 h-full">
          {/* Top image */}
          <div className="overflow-hidden mb-[1.5px] shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/home/explore/explore2.jpg" 
              alt="Professional workstation" 
              className="w-full h-full cursor-pointer object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bottom row of 2 images - always 2 columns */}
          <div className="grid grid-cols-2">
            <div className="overflow-hidden mr-[1.5px] shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/home/explore/explore3.jpg" 
                alt="Laptop display" 
                className="w-full h-full cursor-pointer object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/home/explore/explore4.jpg" 
                alt="Computer accessories" 
                className="w-full h-full cursor-pointer object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second row - 2 images side by side - adapt to image height */}
      <div className="grid grid-cols-2 mb-4">
        <div className="overflow-hidden mr-[1.5px] shadow-md hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/home/explore/explore5.jpg" 
            alt="Modern desktop setup" 
            className="w-full object-contain cursor-pointer transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <img 
            src="/home/explore/explore6.jpg" 
            alt="Gaming accessories" 
            className="w-full object-contain cursor-pointer transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Third row - Swiper to match Swiper.jsx */}
      <div className="mx-auto">
      <Swiper
  spaceBetween={0}
  centeredSlides={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{
    clickable: true,
  }}
  loop={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper overflow-hidden cursor-pointer h-[350px]" // fixed height here
>
  {swiperImages.map((image, index) => (
    <SwiperSlide key={index} className="h-full">
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
};

export default Explore;