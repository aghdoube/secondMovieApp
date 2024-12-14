import React from "react";
import "../Styles/Hero.css";
const Badge = () => {
  return (
    <div className="badge-content flex flex-wrap gap-4 items-center justify-center">
      <button className="btn">
        Trending
        <div className="badge badge-accent">+13</div>
      </button>

      <button className="btn">
        New Shows
        <div className="badge badge-primary">+15</div>
      </button>
      <button className="btn">
        New Movies
        <div className="badge badge-secondary">+23</div>
      </button>
    </div>
  );
};

export default Badge;
