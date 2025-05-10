import React from "react";
import { motion } from "framer-motion";

const AnimatedUnderlineText = ({ text = "Collection", className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Static yellow text */}
      <span className="text-[#FFB800] relative z-10 font-bold">
        {text}
      </span>

      {/* Curved underline with some spacing from text */}
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-full h-3"
      >
        <motion.path
          d="M0,8 Q25,5 50,8 T100,5"
          fill="transparent"
          stroke="#FFB800"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0.5, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
            pathOffset: [0.5, 0, 0, 0.5],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            times: [0, 0.3, 0.7, 1],
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedUnderlineText;
