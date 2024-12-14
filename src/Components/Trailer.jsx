import React from "react";
import "../Styles/Trailer.css";

const Trailer = () => {
  return (
    <div className="trailer-container">
      <iframe
        width="300"
        height="169"
        src="https://www.youtube.com/embed/DCWcK4c-F8Q?si=iU7V6SsJtt7PrdMC&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <iframe
        width="300"
        height="169"
        src="https://www.youtube.com/embed/KS0XacjMmOc?si=zh0wV6yOugUetWNj&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
