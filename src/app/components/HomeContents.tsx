import React from 'react';

const HeroSection = ({ heading = "Welcome to KeM Autos", subheading = "Find Your Dream Car Today" }) => {
  return (
    <section className="hero relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/main.jpg')", // Replace with your image path
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{heading}</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6">{subheading}</p>
        <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out">
          Visit Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
