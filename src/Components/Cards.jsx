import React, { useState, useEffect } from "react";
import Modal from "./Modal"; // Import the new Modal component
import "../Styles/Cards.css";

const Cards = ({ apiEndpoint }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
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

  const handleItemClick = (item) => {
    console.log("Item clicked:", item);
    setSelectedItem(item);

    // Store in recent items
    const recent = JSON.parse(localStorage.getItem("recent")) || [];
    if (!recent.some((recentItem) => recentItem.id === item.id)) {
      recent.push(item);
      localStorage.setItem("recent", JSON.stringify(recent));
    }
  };

  const handleBookmark = (item) => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (!bookmarks.some((bookmark) => bookmark.id === item.id)) {
      bookmarks.push(item);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  };

  const handleDownload = (item) => {
    const downloads = JSON.parse(localStorage.getItem("downloads")) || [];
    if (!downloads.some((download) => download.id === item.id)) {
      downloads.push(item);
      localStorage.setItem("downloads", JSON.stringify(downloads));
    }
  };

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="cards-container">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="card">
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.title || item.name}
              className="card-image"
              onClick={() => handleItemClick(item)}
            />
            <div className="card-content">
              <h3 className="card-title" onClick={() => handleItemClick(item)}>
                {item.title || item.name}
              </h3>
              <p className="card-rating">
                <i className="fas fa-star"></i> {item.vote_average}
              </p>
              <div className="card-actions">
                <button
                  className="card-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmark(item);
                  }}
                >
                  <i className="fas fa-bookmark"></i> Bookmark
                </button>
                <button
                  className="card-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(item);
                  }}
                >
                  <i className="fas fa-download"></i> Download
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No results found.</div>
      )}

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </div>
  );
};

export default Cards;
