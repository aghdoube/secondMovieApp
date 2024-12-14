import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Cards from "../../Components/Cards";

const Discovery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [searchApiEndpoint, setSearchApiEndpoint] = useState()
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url_base = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    let load = true
    if (load) {
      query ? setSearchApiEndpoint(`${url_base}/search/movie?query=${query}&api_key=${API_KEY}`) :
        setSearchApiEndpoint(`${url_base}/search/movie?api_key=${API_KEY}`);
      load = false
    }
  }, [])


  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/discovery?query=${searchQuery}`);
    }
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
          {searchQuery && (
            <div className="mt-4">
              <p className="text-lg">Search results for: {searchQuery}</p>
              <Cards apiEndpoint={searchApiEndpoint} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Discovery;
