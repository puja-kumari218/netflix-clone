import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { IoChevronDown } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground
            ? "bg-gradient-to-r from-black via-red-950/80 to-black bg-opacity-90 backdrop-blur-md"
            : ""
        }`}
      >
        {/* Custom OTT Platform Logo */}
        <div className="relative w-32 h-10">
          <svg
            viewBox="0 0 200 50"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Play Button Circle */}
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="2"
              className="animate-pulse"
            />
            {/* Play Triangle */}
            <path
              d="M35 25L20 35L20 15L35 25Z"
              fill="url(#logoGradient)"
              className="animate-pulse"
            />
            {/* Text "STREAM" */}
            <text
              x="55"
              y="32"
              className="text-2xl font-bold"
              fill="url(#textGradient)"
            >
              STREAM
            </text>
            {/* Gradients */}
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#990000" />
              </linearGradient>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#cccccc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm hover:text-red-400/80 transition-colors">
            Browse
          </p>
          <IoChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          {/* Animated Search Icon */}
          <div className="relative group">
            <div className="text-gray-200 group-hover:text-red-400/80 cursor-pointer transition-all duration-300 transform group-hover:scale-110">
              <FaSearch className="w-5 h-5" />
            </div>
            <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Animated Bell Icon */}
          <div className="relative group">
            <div className="text-gray-200 group-hover:text-red-400/80 cursor-pointer transition-all duration-300 transform group-hover:scale-110">
              <FaBell className="w-5 h-5" />
            </div>
            <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Profile Section */}
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative group"
          >
            <div className="relative w-10 h-10">
              {/* Dotted Circle Border */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-spin-slow"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,0,0,0.3)" />
                    <stop offset="50%" stopColor="rgba(255,0,0,0.5)" />
                    <stop offset="100%" stopColor="rgba(255,0,0,0.3)" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Profile Icon with 3D Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-950 to-black rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-black/50 rounded-full backdrop-blur-sm">
                      <FaUser className="text-white/80 text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  {/* 3D Highlight */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
            <IoChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;