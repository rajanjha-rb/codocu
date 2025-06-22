import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blurEnabled, setBlurEnabled] = useState(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      // Menu opened — disable blur immediately
      setBlurEnabled(false);
    } else {
      // Menu closed — delay re-enabling blur until animation ends (~300ms)
      const timeout = setTimeout(() => {
        setBlurEnabled(true);
      }, 320); // slightly more than animation duration (300ms)
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black ${
        blurEnabled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-tight">
          Codocu<span className="text-red-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-white font-medium transition duration-300 hover:text-red-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-500 hover:after:w-full after:transition-all ${
                  isActive ? "text-red-500 after:w-full" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/get-started"
            className="ml-6 bg-red-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-red-700 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 max-w-xs bg-black text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <span className="text-xl font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium hover:text-red-500 transition ${
                  isActive ? "text-red-500" : "text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/get-started"
            className="bg-red-600 text-white px-4 py-2 text-center rounded-full shadow hover:bg-red-700"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
