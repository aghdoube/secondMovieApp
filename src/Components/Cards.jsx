import React, { useState, useEffect } from "react";
import "../Styles/Cards.css";

const Cards = ({ apiEndpoint }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!apiEndpoint) {
          throw new Error("API endpoint is not defined");
        }
        console.log(`Fetching data from: ${apiEndpoint}`);
        const response = await fetch(apiEndpoint, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          // Try to get more error details
          const errorText = await response.text();
          console.error(`HTTP error! status: ${response.status}`, errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        setData(result.results || result.items || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const handleBookmark = (movie) => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (!bookmarks.some((bookmark) => bookmark.id === movie.id)) {
      bookmarks.push(movie);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards-container">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => (
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
                <button
                  className="card-button"
                  onClick={() => handleBookmark(item)}
                >
                  <i className="fas fa-bookmark"></i> Bookmark
                </button>
                <button className="card-button">
                  <i className="fas fa-download"></i> Download
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
};

export default Cards;
