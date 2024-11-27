import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player"; // Import Lottie player
import { ReactTyped } from "react-typed";
import { FaSun, FaMoon, FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons for light/dark mode and social media

import animationData from "./assets/Computer Animation.json"; // Replace with your downloaded JSON file
import logo from "./assets/broscode.png";

const ComingSoonPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Set initial theme based on user preference or default to light
  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(userPrefersDark);
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`flex items-center justify-center min-h-screen px-4 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Main Container */}
      <div className="text-center w-full">
        {/* Toggle Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={handleToggle}
            className="bg-gray-200 dark:bg-[#2596be] text-black dark:text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            {darkMode ? <FaSun className="w-[25px] h-[25px]" /> : <FaMoon className="w-[25px] h-[25px]" />}
          </button>
        </div>

        {/* Logo */}
        <div className="mt-8 w-full">
          <img
            src={logo}
            className="w-1/2 md:w-1/4 mx-auto" // Adjust size only for small screens
            alt="Logo"
          />
        </div>

        {/* Animation */}
        <div className="mt-8 w-full">
          <Player
            autoplay
            loop
            src={animationData}
            className="w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] mx-auto" // Adjust animation size only for small screens
          />
        </div>

        {/* Heading and Description */}
        <div className="relative md:-top-20 mt-4 text-center">
          <h1 className="text-3xl md:text-7xl font-bold mb-4">
            <ReactTyped
              strings={[
                "Pripremamo Nešto Neverovatno",
                "Somethings Cooking...",
                "Stay Tuned for Updates!",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h1>
          <p className="text-xl md:text-3xl font-semibold mb-6 md:mb-0">
            Naš sajt je trenutno u razvoju, ali smo zauzeti kreiranjem izuzetnih
            veb sajtova za naše klijente. Ostanite sa nama!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 text-gray-400 text-2xl sm:text-lg mb-6">
          <a
            href="https://instagram.com/bros_c0de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram className="w-[50px] h-[50px]" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaFacebook className="w-[50px] h-[50px]" />
          </a>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <p className="text-sm text-center">
            Contact us: {" "}
            <a
              href="mailto:info@example.com"
              className="underline hover:text-blue-400 transition duration-300 mb-8"
            >
              info@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
