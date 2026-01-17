import React from 'react';

/**
 * Smart Image component that handles both local and remote URLs
 */
const Image = ({ 
  src, 
  alt = '', 
  className = '',
  caption,
  ...props 
}) => {
  // Determine if the image is a local path or remote URL
  const isRemoteUrl = src?.startsWith('http://') || src?.startsWith('https://');
  const imageSrc = isRemoteUrl ? src : src;
  
  return (
    <figure className={className}>
      <img 
        src={imageSrc}
        alt={alt}
        className="w-full h-auto rounded"
        loading="lazy"
        {...props}
      />
      {caption && (
        <figcaption className="text-sm text-foreground-secondary italic mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
