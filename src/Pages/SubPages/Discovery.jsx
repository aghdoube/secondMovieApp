import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Cards from "../../Components/Cards";

const Discovery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const API_KEY = "7ba540e3fb9bd1f5b64d17ed22e1efdc";

  const searchApiEndpoint = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
    : "";

  const handleSearch = () => {
    navigate(`/discovery?query=${searchQuery}`);
  };

  return (
    <Layout>
      <div className="flex-grow p-4">
        <div className="discovery-container">
          <h1 className="text-2xl font-bold mb-4">Discovery Page</h1>
          <div className="form-control w-full max-w-md flex space-x-2">
            <input
              className="input input-bordered flex-grow"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
      </div>
    </Layout>
  );
};

export default Discovery;
