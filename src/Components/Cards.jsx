import React, { useState, useEffect } from "react";
import "../Styles/Cards.css";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "7ba540e3fb9bd1f5b64d17ed22e1efdc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const result = await response.json();
        setData(result.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards-container">
      {Array.isArray(data) &&
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
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
