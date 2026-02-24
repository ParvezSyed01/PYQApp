import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    const endTimer = setTimeout(() => {
      onFinish();
    }, 3800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
  <div
    className={`fixed inset-0 flex items-center justify-center bg-blue-600 transition-opacity duration-700 ${
      fadeOut ? "opacity-0" : "opacity-100"
    }`}
  >
    <div className="relative flex flex-col items-center px-6">

      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/30 blur-sm scale-105"></div>

      {/* Main Card */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl 
                      px-8 py-6 
                      sm:px-12 sm:py-8 
                      md:px-16 md:py-10 
                      shadow-2xl animate-logo">

        <img
          src={logo}
          alt="Honesty Software"
          className="w-40 sm:w-56 md:w-72 mx-auto"
        />
      </div>

      {/* Initializing Text */}
      <p className="text-center text-white 
                    tracking-[4px] sm:tracking-[6px] md:tracking-[8px] 
                    text-[10px] sm:text-xs 
                    mt-6 sm:mt-8 
                    animate-pulse">
        INITIALIZING
      </p>

    </div>
  </div>
);
};

export default SplashScreen;