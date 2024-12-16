import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SideMenuRight.css";
import "../Styles/Hero.css";

import Trailer from "./Trailer";

import Bookmarked from "../Pages/Library/Bookmarked";

import Download from "./Download";

const SideMenuRight = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/discovery?query=${searchQuery}`);
  };

  return (
    <nav className="side-menu-right">
      <ul className="menu-right bg-base-200 rounded-box">
        <li>
          <div className="login-card">
            <h3 className="login">Welcome</h3>
            <h3 className="name">John Doerian</h3>
            <p className="email">john@example.com</p>
          </div>
          <ul>
            <div className="form-control w-full max-w-md">
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Comedy"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <li>
              <a onClick={handleSearch}>
                <i className="fas fa-search"></i> Search
              </a>
            </li>
          </ul>
        </li>
        <hr />

        <li>
          <a>
            <i className="fas fa-book"></i> NEW TRAILERS
          </a>
          <ul>
            <li>
              <Trailer />
            </li>

            <li>
              <a>
                <i className="fas fa-download"></i> Downloaded
              </a>
            </li>
            <li>
              <Download />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenuRight;
