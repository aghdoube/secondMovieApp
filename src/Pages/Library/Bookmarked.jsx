import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Modal from "../../Components/Modal";
import "../../Styles/Cards.css";

const Bookmarked = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedMovies(bookmarks);
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleRemoveBookmark = (movieToRemove) => {
    const updatedBookmarks = bookmarkedMovies.filter(
      (movie) => movie.id !== movieToRemove.id
    );

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setBookmarkedMovies(updatedBookmarks);
  };

  const handleDownload = (movie) => {
    const downloads = JSON.parse(localStorage.getItem("downloads")) || [];
    if (!downloads.some((download) => download.id === movie.id)) {
      downloads.push(movie);
      localStorage.setItem("downloads", JSON.stringify(downloads));
    }
  };

  return (
    <Layout>
      <h1>Bookmarked Movies</h1>
      <div className="cards-container">
        {bookmarkedMovies.length > 0 ? (
          bookmarkedMovies.map((item) => (
            <div key={item.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.original_title}
                className="card-image"
                onClick={() => handleMovieClick(item)}
              />
              <div className="card-content">
                <h3
                  className="card-title"
                  onClick={() => handleMovieClick(item)}
                >
                  {item.title}
                </h3>
                <p className="card-rating">
                  <i className="fas fa-star"></i> {item.vote_average}
                </p>
                <div className="card-actions">
                  <button
                    className="card-button"
                    onClick={() => handleDownload(item)}
                  >
                    <i className="fas fa-download"></i> Download
                  </button>
                  <button
                    className="card-button"
                    onClick={() => handleRemoveBookmark(item)}
                  >
                    <i className="fas fa-trash"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No bookmarks found.</div>
        )}
      </div>

      <Modal
        isOpen={!!selectedMovie}
        onClose={() => setSelectedMovie(null)}
        item={selectedMovie}
      />
    </Layout>
  );
};

export default Bookmarked;
