import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for the button
import { MdArrowOutward } from 'react-icons/md'; // Import the arrow icon

const MackbookPlus = () => {
  return (
    // Relative container for positioning overlay content
    <div className='relative w-full h-screen overflow-hidden my-8'> {/* Use h-screen for full viewport height */}

      {/* Video Background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0' // Position absolutely, cover area, behind content
        src='./videos/mackbookplus.mp4'
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in-down"> {/* Added animation class */}
          Experience the Power
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up"> {/* Added animation class */}
          Discover the new MacBook Plus. Unmatched performance meets stunning design.
        </p>
        <Link to="/products/macbook-plus"> {/* Link to a specific product or category */}
          <button
            className="inline-flex items-center gap-2 px-8 py-3 cursor-pointer bg-yellow-500 text-black font-semibold rounded-md shadow-lg
                       hover:bg-yellow-600 focus:outline-none
                       transition duration-300 ease-in-out transform hover:scale-105 animate-pulse" // Added inline-flex, items-center, gap-2
          >
            <span>Order Now</span>
            <MdArrowOutward className="w-5 h-5" /> {/* Changed icon to MdArrowOutward */}
          </button>
        </Link>
      </div>

      {/* Optional: Add simple CSS for animations in your index.css or App.css if needed */}
      {/* ... (animation keyframes) ... */}
    </div>
  );
};

export default MackbookPlus;