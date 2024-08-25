'use client';

import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    '/assets/banner1.jpg',
    '/assets/banner2.jpg',
    '/assets/banner3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="relative overflow-hidden">
    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {slides.map((slide, index) => (
        <img key={index} src={slide} className="w-full flex-shrink-0 object-cover" alt={`Slide ${index + 1}`} />
      ))}
    </div>

    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
        />
      ))}
    </div>
  </div>
  );
};

export default Carousel;