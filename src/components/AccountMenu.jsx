import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { FaUser } from "react-icons/fa";

const AccountMenu = ({ visible }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logout());
    window.location.reload();
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-b from-black/80 to-gray-900/80 w-56 absolute top-14 right-0 py-5 flex-col border border-white/5 rounded-lg shadow-xl backdrop-blur-xl">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/items flex flex-row gap-3 items-center w-full">
          <div className="relative w-8 h-8">
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
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-lg transform group-hover/items:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-black/50 rounded-full backdrop-blur-sm">
                    <FaUser className="text-white/80 text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-sm opacity-0 group-hover/items:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          <p className="text-white/90 text-sm group-hover/items:text-gray-300 transition-colors duration-300">
            {user?.name}
          </p>
        </div>
        <hr className="bg-gradient-to-r from-transparent via-gray-700/30 to-transparent border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white/90 text-sm hover:text-gray-300 transition-colors duration-300 cursor-pointer"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;