import React from "react";
import "../Styles/Trailer.css";

const Download = () => {
  return (
    <div className="trailer-container">
      <iframe
        width="300"
        height="196"
        src="https://www.youtube.com/embed/N2zDRzNN_xg?si=Hy7B30IndN6D20Tr&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="300"
        height="196"
        src="https://www.youtube.com/embed/Hz5IpGYsnPE?si=iTPAKPGv2Wrux9r9"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      ;
    </div>
  );
};
export default Download;
