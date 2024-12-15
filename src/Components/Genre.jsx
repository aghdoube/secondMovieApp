import React, { useState, useEffect } from "react";
import "../Styles/genre.css";

const Genre = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=" +
            import.meta.env.VITE_API_KEY
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch genres. Status: ${response.status}`);
        }

        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre);
  };

  return (
    <div className="genre-container">
      <button
        key="all"
        className={`genre-button ${!selectedGenre ? "selected" : ""}`}
        onClick={() => handleGenreClick(null)}
      >
        All Genres
      </button>
      {genres.map((genre) => (
        <button
          key={genre.id}
          className={`genre-button ${
            selectedGenre?.id === genre.id ? "selected" : ""
          }`}
          onClick={() => handleGenreClick(genre)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default Genre;
