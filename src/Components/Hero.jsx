import React from "react";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero rounded-2xl">
      <img src="/mp.png" alt="Hero" />
      <div className="hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome </h1>
          <h2 className="">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
