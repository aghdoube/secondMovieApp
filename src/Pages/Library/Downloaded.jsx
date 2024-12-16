import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Modal from "../../Components/Modal"; // Adjust the import path as needed
import "../../Styles/Cards.css";

const Downloaded = () => {
  const [downloadedMovies, setDownloadedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const downloads = JSON.parse(localStorage.getItem("downloads")) || [];
    setDownloadedMovies(downloads);
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleRemoveDownload = (movieToRemove) => {
    const updatedDownloads = downloadedMovies.filter(
      (movie) => movie.id !== movieToRemove.id
    );

    localStorage.setItem("downloads", JSON.stringify(updatedDownloads));
    setDownloadedMovies(updatedDownloads);
  };

  return (
    <Layout>
      <h1>Downloaded Movies</h1>
      <div className="cards-container">
        {downloadedMovies.length > 0 ? (
          downloadedMovies.map((item) => (
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
                    onClick={() => handleRemoveDownload(item)}
                  >
                    <i className="fas fa-trash"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Downloads found.</div>
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

export default Downloaded;
