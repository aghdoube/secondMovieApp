import React from "react";
import "../Styles/Trailer.css";
const Bookmarked = () => {
  return (
    <div className="trailer-container">
      <iframe
        width="300"
        height="196"
        src="https://www.youtube.com/embed/3_y2j72Cfe4?si=Fbi_eVuO5NZr5kBh&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Bookmarked;
