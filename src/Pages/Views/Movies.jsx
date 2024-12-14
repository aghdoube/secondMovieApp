import React from "react";
import Layout from "../Layout/Layout";
import Cards from "../../Components/Cards";

const Movies = () => {
  const moviesApiEndpoint = "https://api.themoviedb.org/3/movie/popular";

  return (
    <Layout>
      <h1>Popular Movies</h1>
      <Cards apiEndpoint={moviesApiEndpoint} />
    </Layout>
  );
};

export default Movies;
