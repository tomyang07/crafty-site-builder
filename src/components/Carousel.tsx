
import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: Array<{
    url: string;
    alt: string;
    title?: string;
    subtitle?: string;
  }>;
  autoplaySpeed?: number;
}

const Carousel = ({ images, autoplaySpeed = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [images.length, autoplaySpeed]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item absolute inset-0 ${index === currentIndex ? 'active' : ''}`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {(image.title || image.subtitle) && (
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white px-4 text-center">
              {image.title && (
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{image.title}</h2>
              )}
              {image.subtitle && (
                <p className="text-lg md:text-xl max-w-3xl">{image.subtitle}</p>
              )}
            </div>
          )}
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
