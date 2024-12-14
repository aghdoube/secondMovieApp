import React from "react";
import "../Styles/SideMenuRight.css";
import "../Styles/Hero.css";
import netflixLogo from "../assets/netflix.png";
import primeLogo from "../assets/prime.png";
import youtubeLogo from "../assets/youtube.png";
import tvLogo from "../assets/tv.png";
import Trailer from "./Trailer";
import Genre from "./Genre";
import Bookmarked from "./Bookmarked";
import TopRated from "./TopRated";
import Download from "./Download";

const SideMenuRight = () => {
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
                placeholder="Comedy "
              />
            </div>
            <li>
              <a>
                <i className="fas fa-search"></i> Search
              </a>
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <Genre />
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
                <i className="fas fa-bookmark"></i> BOOKMARKED
              </a>
            </li>
            <li>
              <Bookmarked />
            </li>
            <li>
              <a>
                <i className="fas fa-star"></i> TOP RATED
              </a>
            </li>
            <li>
              <TopRated />
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
        <hr />
        <li>
          <a>Streaming Services</a>
          <ul>
            <li>
              <a href="#" className="streaming-service">
                <img
                  src={netflixLogo}
                  alt="Netflix"
                  className="streaming-logo"
                />
                Netflix
              </a>
            </li>
            <li>
              <a href="#" className="streaming-service">
                <img
                  src={youtubeLogo}
                  alt="Youtube"
                  className="streaming-logo"
                />
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="streaming-service">
                <img
                  src={primeLogo}
                  alt="Amazon Prime"
                  className="streaming-logo"
                />
                Amazon Prime
              </a>
            </li>
            <li>
              <a href="#" className="streaming-service">
                <img src={tvLogo} alt="AppleTv" className="streaming-logo" />
                AppleTv
              </a>
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <ul>
            <li>
              <a>
                <i className="fas fa-cog"></i> Settings
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-question-circle"></i> Help
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenuRight;
