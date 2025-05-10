import React from 'react';

const Headline = ({ 
  title, 
  subtitle, 
  align = "center", 
  titleSize = "text-3xl md:text-4xl",
  className = "" 
}) => {
  // Determine text alignment class
  const alignClass = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  }[align] || 'text-center';
  
  // Determine subtitle alignment for max-width
  const subtitleAlign = {
    'left': '',
    'center': 'mx-auto',
    'right': 'ml-auto'
  }[align] || 'mx-auto';
  
  return (
    <div className={`text-center mb-8 ${alignClass} ${className}`}>
      <h1 className={`${titleSize} font-sans font-stretch-ultra-expanded font-bold mb-4`}>
        {title}
      </h1>
      
      {subtitle && (
        <p className={`text-gray-600 dark:text-gray-400 max-w-2xl ${subtitleAlign}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Headline;
