import React from 'react';
import { colors } from '../assets/constants/colors';

// Hero Image Section
const HeroSection = () => {
  return (
    <section className="bg-lightPeach relative lg:h-[70vh] md:h-[80vh] h-[85vh] flex items-center">
      {/* Left Text Section with Background Color */}
      <div className="flex-1 p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl mb-3 lg:mb-4">
          <span className="font-bold">Welcome to </span>
          <span className="text-brandSecondary">The Daily Scholar</span>
        </h1>
        <h3 className="text-xl lg:text-3xl font-bold mb-4">STUDENT INNOVATION NETWORK</h3>
        <p className="text-md lg:text-xl mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>
        <button className="bg-brandSecondary hover:bg-brandPrimary px-4 py-2 rounded-sm text-white mb-2">Learn More</button>
      </div>

      {/* Right Image Section */}
      <div className="flex-1">
        <img
          src="/images/hero_image.png"
          className="w-full h-100 md:h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
