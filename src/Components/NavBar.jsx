import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";

const NavBar = () => {
  return (
    <nav className="nav shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 style={{ color: "red" }}>MovieMaze</h1>
          </div>
          <div className="nav-links ml-6 flex space-x-4">
            <a href="/movies" className="text-white hover:text-gray-300">
              Movies
            </a>
            <a href="/series" className="text-white hover:text-gray-300">
              Series
            </a>
            <a href="/tv-shows" className="text-white hover:text-gray-300">
              TV Shows
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </Link>
              <NavItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="red"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                }
                tooltip="Favorites"
              />
            </div>
            <div className="flex items-center">
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, tooltip }) => (
  <div className="relative group">
    <div className="flex items-center cursor-pointer">{icon}</div>
    <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
      <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md">
        {tooltip}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
    </div>
  </div>
);

export default NavBar;
