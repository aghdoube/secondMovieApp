import React, { useState, useEffect } from "react";
import "../Styles/Cards.css";

const Cards = ({ apiEndpoint }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "7ba540e3fb9bd1f5b64d17ed22e1efdc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!apiEndpoint) {
          throw new Error("API endpoint is not defined");
        }
        const fullApiEndpoint = `${apiEndpoint}`;
        console.log(`Fetching data from: ${fullApiEndpoint}`);
        const response = await fetch(fullApiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Fetched data:", result);
        setData(result.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

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
