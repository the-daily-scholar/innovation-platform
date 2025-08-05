import React from 'react';
import { colors } from '../assets/constants/colors';


const HeroSection = () => {
  return (
    <section className="relative h-[70vh] flex items-center bg-gray-300"
      style={{ backgroundColor: colors.lightCool }}>
      {/* Left Text Section with Background Color */}
      <div className="flex-1 p-6 md:p-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to The Daily Scholar</h1>
        <p className="text-lg md:text-xl mb-4">We provide the best services to help you grow your business.We provide the best services to help you grow your business.</p>
        <button className="px-4 py-2 bg-blue-600 rounded-sm text-white">Learn More</button>
      </div>

      {/* Right Image Section */}
      <div className="flex-1">
        <img
          src="/images/hero_image.png"
          className="w-full h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
