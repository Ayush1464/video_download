import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const baseClasses = "cursor-pointer transition duration-150";
  const activeClasses = "text-yellow-400 font-semibold";
  const inactiveClasses = "text-gray-200 hover:text-white";

  return (
    <nav className="w-full bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* App Name */}
          <div className="text-2xl font-semibold text-white">
            VideoDownloader
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-base">
            <NavLink
              to="/instagram"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Instagram
            </NavLink>
            <NavLink
              to="/facebook"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Facebook
            </NavLink>
            <NavLink
              to="/youtube"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              YouTube
            </NavLink>
            {/* <NavLink
              to="/twitter"
              className={({ isActive }) =>
                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
              }
            >
              Twitter
            </NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
