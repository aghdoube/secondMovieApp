import React from "react";
import "../Styles/Genre.css";

const Genre = () => {
  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Thriller",
    "Sci-Fi",
    "Fantasy",
    "Documentary",
    "Animation",
  ];

  return (
    <div className="genre-container">
      {genres.map((genre, index) => (
        <button key={index} className="genre-button">
          {genre}
        </button>
      ))}
    </div>
  );
};

export default Genre;
