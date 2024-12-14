import React from "react";
import Layout from "../Layout/Layout";
import Cards from "../../Components/Cards";

const Movies = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const moviesApiEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  return (
    <Layout>
      <h1>Popular Movies</h1>
      <Cards apiEndpoint={moviesApiEndpoint} />
    </Layout>
  );
};

export default Movies;
