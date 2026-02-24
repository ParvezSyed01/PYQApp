import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Info, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 justify-center pt-6">
        <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-[#2563eb]">
            My<span className="text-black">PYQ</span>
          </h1>

          <div className="flex gap-8 text-sm font-semibold">
            <NavLink to="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </NavLink>
            <NavLink to="/about" className="text-gray-600 hover:text-blue-600 transition">
              About
            </NavLink>
            <NavLink to="/contact" className="text-gray-600 hover:text-blue-600 transition">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

{/* ================= MOBILE TOP LOGO ================= */}
<div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50">
  <div className="px-6 py-2 
                  bg-white/90 backdrop-blur-md
                  border border-gray-200
                  shadow-lg
                  rounded-xl">
    <h1 className="text-xl font-extrabold tracking-tight text-[#2563eb]">
      My<span className="text-black">PYQ</span>
    </h1>
  </div>
</div>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center h-16">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`
            }
          >
            <Home size={22} />
            <span className="mt-1">Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`
            }
          >
            <Info size={22} />
            <span className="mt-1">About</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`
            }
          >
            <Phone size={22} />
            <span className="mt-1">Contact</span>
          </NavLink>

        </div>
      </nav>
    </>
  );
};

export default Navbar;