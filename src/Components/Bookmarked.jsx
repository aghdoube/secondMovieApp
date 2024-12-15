import React, { useState, useEffect } from "react";
import Layout from "../Pages/Layout/Layout";
import "../Styles/Cards.css";

const Bookmarked = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedMovies(bookmarks);
  }, []);

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
              />
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-rating">
                  <i className="fas fa-star"></i> {item.vote_average}
                </p>
                <div className="card-actions">
                  <button className="card-button">
                    <i className="fas fa-download"></i> Download
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No bookmarks found.</div>
        )}
      </div>
    </Layout>
  );
};

export default Bookmarked;
