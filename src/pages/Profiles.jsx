import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Profiles = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-red-950/30 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-7xl text-white text-center font-bold mb-12 tracking-tight">
          Who's Watching?
        </h1>
        <div className="flex items-center justify-center mt-10">
          <div 
            onClick={() => { navigate("/")}}
            className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            <div className="relative w-48 h-48">
              {/* 3D Profile Container with Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-black/30 backdrop-blur-xl rounded-2xl border border-white/5 shadow-2xl">
                <div className="w-full h-full flex flex-col items-center justify-center p-6">
                  {/* Dotted Circle Border */}
                  <div className="relative w-28 h-28 mb-4">
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
                          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                          <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Profile Icon with 3D Effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-20 h-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-black/50 rounded-full backdrop-blur-sm">
                            <FaUser className="text-white/80 text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                        {/* 3D Highlight */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Username with Glassmorphism */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-black/30 blur-sm rounded-lg"></div>
                    <p className="relative text-white/90 text-xl font-medium px-4 py-1">
                      {user?.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-900/20 to-black/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Click to Continue Text */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Click to continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;