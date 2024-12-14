import React from "react";
import "../Styles/SideMenu.css";
import netflixLogo from "../assets/netflix.png";
import primeLogo from "../assets/prime.png";
import youtubeLogo from "../assets/youtube.png";
import tvLogo from "../assets/tv.png";

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <ul className="menu bg-base-200 rounded-box">
        <li>
          <a>
            <i className="fas fa-bars"></i> MENU
          </a>
          <ul>
            <li>
              <a>
                <i className="fas fa-home" style={{ color: "red" }}></i> Home
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-search"></i> Discovery
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-users"></i> Community
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-calendar-alt"></i> Coming soon
              </a>
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <a>
            <i className="fas fa-book"></i> LIBRARY
          </a>
          <ul>
            <li>
              <a>
                <i className="fas fa-clock"></i> Recent
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-bookmark"></i> Bookmarked
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-star"></i> Top rated
              </a>
            </li>
            <li>
              <a>
                <i className="fas fa-download"></i> Downloaded
              </a>
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

export default SideMenu;
