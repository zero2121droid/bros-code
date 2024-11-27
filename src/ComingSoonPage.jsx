import React from "react";
import { Player } from "@lottiefiles/react-lottie-player"; // Import Lottie player

import animationData from "./assets/Computer Animation.json"; // Replace with your downloaded JSON file
import logo from "./assets/broscode.png";

const ComingSoonPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      {/* Main Container */}
      <div className="text-center w-full">
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
            // style={{
            //   height: "1000px", // Default size for md+ screens
            //   width: "1000px",
            // }}
            className="w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] mx-auto" // Adjust animation size only for small screens
          />
        </div>

        {/* Heading and Description */}
        <div className="relative md:-top-20 mt-4 text-center">
          <h1 className="text-3xl md:text-7xl font-bold mb-4">
            Pripremamo Nešto Neverovatno
          </h1>
          <p className="text-xl md:text-3xl font-semibold mb-6">
            Naš sajt je trenutno u razvoju, ali smo zauzeti kreiranjem izuzetnih
            veb sajtova za naše klijente. Ostanite sa nama!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 text-gray-400 text-2xl sm:text-lg mb-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Contact */}
        <p className="text-sm text-center">
          Contact us:{" "}
          <a
            href="mailto:info@example.com"
            className="underline hover:text-blue-400 transition duration-300"
          >
            info@example.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
