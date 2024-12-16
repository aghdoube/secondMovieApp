import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Cards from "../../Components/Cards";

const Discovery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL_BASE = import.meta.env.VITE_BASE_URL;

  const searchApiEndpoint = query
    ? `${URL_BASE}/search/movie?query=${query}&api_key=${API_KEY}`
    : "";

  console.log("Current query:", query);
  console.log("Search query state:", searchQuery);
  console.log("Search API Endpoint:", searchApiEndpoint);

  const handleSearch = () => {
    console.log("Navigating to:", `/discovery?query=${searchQuery}`);
    navigate(`/discovery?query=${searchQuery}`);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Discovery Page</h1>
        <div className="flex items-center space-x-4">
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              console.log("Updated search query:", e.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
        {query && (
          <div className="mt-4">
            <p className="text-lg">Search results for: {query}</p>
            <Cards apiEndpoint={searchApiEndpoint} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Discovery;
