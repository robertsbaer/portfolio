import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height 
}) => {
  // Extract file name and extension
  const fileNameMatch = src.match(/\/([^/]+)\.(\w+)$/);
  if (!fileNameMatch) return <img src={src} alt={alt} className={className} />;
  
  const [, fileName, extension] = fileNameMatch;
  const basePath = src.substring(0, src.lastIndexOf('/') + 1);
  
  // Create srcset with different sizes
  const sizes = [320, 640, 960, 1280];
  const srcSet = sizes
    .map(size => `${basePath}${fileName}-${size}.${extension} ${size}w`)
    .join(', ');
  
  return (
    <picture>
      <source
        srcSet={sizes
          .map(size => `${basePath}${fileName}-${size}.webp ${size}w`)
          .join(', ')}
        type="image/webp"
      />
      <img
        src={src}
        srcSet={srcSet}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        style="content-visibility: auto; max-width: 100%"
      />
    </picture>
  );
};

export default OptimizedImage;