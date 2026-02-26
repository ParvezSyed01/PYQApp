import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Info, Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-center transition-all duration-300"
      >
        <div
          className={`w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl flex justify-between items-center transition-all duration-300
          ${scrolled ? "px-6 py-3 mt-3" : "px-8 py-4 mt-6"}`}
        >
          {/* Logo */}
          <h1
            className={`font-extrabold text-[#2563eb] transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            My<span className="text-black">PYQ</span>
          </h1>

          {/* Nav Links */}
          <div className="flex gap-4 text-sm font-semibold">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-xl transition-all duration-200 ${
                  scrolled ? "px-4 py-1.5" : "px-5 py-2"
                } ${
                  isActive
                    ? "bg-gray-200 text-blue-600 shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-xl transition-all duration-200 ${
                  scrolled ? "px-4 py-1.5" : "px-5 py-2"
                } ${
                  isActive
                    ? "bg-gray-200 text-blue-600 shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-xl transition-all duration-200 ${
                  scrolled ? "px-4 py-1.5" : "px-5 py-2"
                } ${
                  isActive
                    ? "bg-gray-200 text-blue-600 shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE TOP LOGO ================= */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="px-6 py-2 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl">
          <h1 className="text-xl font-extrabold tracking-tight text-[#2563eb]">
            My<span className="text-black">PYQ</span>
          </h1>
        </div>
      </div>

      {/* ================= MOBILE FLOATING NAV ================= */}
<nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50">
  <div className="flex justify-around items-center h-16 
                  bg-white/90 backdrop-blur-xl 
                  border border-gray-200 
                  shadow-2xl rounded-2xl">

    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `flex flex-col items-center px-4 py-2 rounded-xl transition ${
          isActive
            ? "bg-gray-200 text-blue-600"
            : "text-gray-500"
        }`
      }
    >
      <Home size={22} />
      <span className="mt-1 text-xs">Home</span>
    </NavLink>

    <NavLink
      to="/about"
      className={({ isActive }) =>
        `flex flex-col items-center px-4 py-2 rounded-xl transition ${
          isActive
            ? "bg-gray-200 text-blue-600"
            : "text-gray-500"
        }`
      }
    >
      <Info size={22} />
      <span className="mt-1 text-xs">About</span>
    </NavLink>

    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `flex flex-col items-center px-4 py-2 rounded-xl transition ${
          isActive
            ? "bg-gray-200 text-blue-600"
            : "text-gray-500"
        }`
      }
    >
      <Phone size={22} />
      <span className="mt-1 text-xs">Contact</span>
    </NavLink>

  </div>
</nav>
    </>
  );
};

export default Navbar;