import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import RocketJPG from "../assets/rocket.jpg"; // Path to the rocket image
import MusashiJPG from "../assets/musashi.jpg"; // Path to the Musashi image
import IMAGEPNG from "../assets/IMAGE.png"; // Path to the second image

const AnimatedHero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Hero section with background image */}
      <div
        className="relative bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${RocketJPG})`, // Set the rocket image as background
          backgroundSize: 'cover', // Make the background cover the entire screen
          backgroundPosition: 'center',
        }}
      >
        {/* Text info section inside the background */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl text-yellow-500">Rizki Aditya Pratama</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-4">SMK Bina Nusantara</h1>
          <p className="text-lg mt-4">
            Dear god, if today I lose my hope, just remind me your plans are better than my dreams.
          </p>

          {/* Additional Musashi Quote */}
          <p className="text-xl mt-6 text-yellow-300">"The way is in training." - Miyamoto Musashi</p>
        </motion.div>

        {/* Musashi Image - Positioned to the left with larger size */}
        <motion.img
          src={MusashiJPG}
          alt="Miyamoto Musashi"
          className="absolute bottom-12 left-12 w-72 h-auto rounded-full shadow-lg bg-transparent" // Increased size to w-72
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
        
        {/* Second Image - Positioned to the top-right with increased size */}
        <motion.img
          src={IMAGEPNG}
          alt="Second Image"
          className="absolute top-12 right-12 w-32 h-auto rounded-full shadow-lg" // Kept the size for this image as is
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </div>
  );
};

export default AnimatedHero;
