// filepath: c:\Users\dell\Desktop\md-computers\src\Components\Home\Swiper.jsx
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperComponent = () => {
  // Define the paths to your images in the public/home folder
  // Adjust these paths and add more as needed based on your actual image names
  const images = [
    '/home/swiper_img1.jpg',
    '/home/swiper_img2.jpg',
    '/home/swiper_img3.jpg',
    '/home/swiper_img4.jpg',
    // Add more image paths here...
    // e.g., '/home/swiper_img4.jpeg',
  ];

  return (
    <div className=" mx-auto "> {/* Optional container and margin */}
      <Swiper
        spaceBetween={0} // Set space between slides to 0
        centeredSlides={true}
        autoplay={{
          delay: 3000, // Delay between transitions (in ms)
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true, // Allow clicking on pagination dots
        }}
         // Show navigation arrows
        loop={true} // Enable continuous loop mode
        modules={[Autoplay, Pagination, Navigation]} // Register modules
        className="mySwiper  overflow-hidden cursor-pointer" // Add custom class for potential styling
      >
        {images.map((imagePath, index) => (
          <SwiperSlide key={index}>
            <img
              src={imagePath}
              alt={`Slide ${index + 1}`}
              className="w-full h-ful object-cover" // Full width, responsive height, cover object fit
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Rename the export to match the component name
export default SwiperComponent;