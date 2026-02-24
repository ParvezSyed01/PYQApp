import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 animate-fadeIn">
      
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center pt-6">
        <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl rounded-2xl px-8 py-4 flex justify-between items-center transition-all duration-300 hover:shadow-2xl">
          
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-tight text-[#2563eb] hover:scale-105 transition duration-300 cursor-pointer">
            My<span className="text-black">PYQ</span>
          </h1>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm font-semibold">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative px-3 py-2 transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center px-6 py-4 bg-white shadow-md backdrop-blur-lg">
        <h1 className="text-xl font-extrabold text-[#2563eb]">
          My<span className="text-black">PYQ</span>
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="transition-transform duration-300"
        >
          {open ? (
            <X size={26} className="rotate-180 transition-transform duration-300" />
          ) : (
            <Menu size={26} className="transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-500 ${
          open ? "max-h-60 py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 font-semibold">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-blue-600 transition"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;