import React from "react";
import Layout from "../Layout/Layout";
import Cards from "../../Components/Cards";

const Series = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const seriesApiEndpoint = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;

  return (
    <Layout>
      <h1>Popular Series</h1>
      <Cards apiEndpoint={seriesApiEndpoint} />
    </Layout>
  );
};

export default Series;
