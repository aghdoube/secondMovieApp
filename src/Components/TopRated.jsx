import React from "react";
import "../Styles/Trailer.css";

const TopRated = () => {
  return (
    <div className="trailer-container">
      <iframe
        width="300"
        height="196"
        src="https://www.youtube.com/embed/GOupIB773tI?si=zY8b0G5kS6qOyi9h&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default TopRated;
