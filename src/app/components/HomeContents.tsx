import React from 'react';

const HomeContent = ({ heading = "Welcome To Our Autos" }) => {
  return (
    <div>
      <section
        className="hero flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/main.jpg')", // Reference the image from public folder
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the image
          minHeight: "100vh", // Full viewport height
        }}
      >
        <div className="text-white px-4 text-center">
          <h1 className="fade-in text-4xl md:text-6xl font-bold max-w-4xl mx-auto mb-4">
            {heading}
          </h1>
          <p className="fade-in text-lg md:text-2xl mt-4 max-w-2xl mx-auto">
            Explore a curated selection of premium vehicles.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out">
            Visit Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
