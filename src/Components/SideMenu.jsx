import React from "react";
import { Link } from "react-router-dom";
import netflixLogo from "../assets/netflix.png";
import primeLogo from "../assets/prime.png";
import youtubeLogo from "../assets/youtube.png";
import tvLogo from "../assets/tv.png";
import "../Styles/SideMenu.css";

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
              <Link to="/">
                <i className="fas fa-home" style={{ color: "red" }}></i> Home
              </Link>
            </li>
            <li>
              <Link to="/discovery">
                <i className="fas fa-search"></i> Discovery
              </Link>
            </li>
            <li>
              <Link to="/community">
                <i className="fas fa-users"></i> Community
              </Link>
            </li>
            <li>
              <Link to="/coming-soon">
                <i className="fas fa-calendar-alt"></i> Coming soon
              </Link>
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
              <Link to="/bookmarked">
                <i className="fas fa-bookmark"></i> Bookmarked
              </Link>
            </li>

            <li>
              <Link to="/downloaded">
                <i className="fas fa-download"></i> Downloaded
              </Link>
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <a>Streaming Services</a>
          <ul>
            <li>
              <a
                href="https://www.netflix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="streaming-service"
              >
                <img
                  src={netflixLogo}
                  alt="Netflix"
                  className="streaming-logo"
                />
                Netflix
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="streaming-service"
              >
                <img
                  src={youtubeLogo}
                  alt="Youtube"
                  className="streaming-logo"
                />
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.primevideo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="streaming-service"
              >
                <img
                  src={primeLogo}
                  alt="Amazon Prime"
                  className="streaming-logo"
                />
                Amazon Prime
              </a>
            </li>
            <li>
              <a
                href="https://tv.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="streaming-service"
              >
                <img src={tvLogo} alt="AppleTv" className="streaming-logo" />
                AppleTv
              </a>
            </li>
          </ul>
        </li>
        <hr />
        <li>
          <Link to="/settings">
            <i className="fas fa-cog"></i> Settings
          </Link>
        </li>
        <li>
          <Link to="/help">
            <i className="fas fa-question-circle"></i> Help
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
