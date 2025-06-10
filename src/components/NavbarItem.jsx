import React from 'react'

const NavbarItem = ({
  label
}) => {
  return (
    <div className="relative group">
      <div className="text-white cursor-pointer hover:text-red-400 transition-colors duration-300">
        {label}
      </div>
      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-300"></div>
    </div>
  )
}

export default NavbarItem