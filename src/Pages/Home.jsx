import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Menu from "../Components/SideMenu";
import SideMenu from "../Components/SideMenuRight";

import Genre from "../Components/Genre";
import Cards from "../Components/Cards";
import "../Styles/index.css";
import "../Styles/App.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL_BASE = import.meta.env.VITE_BASE_URL;

function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const genreApiEndpoint = selectedGenre
    ? `${URL_BASE}/discover/movie?with_genres=${selectedGenre.id}&api_key=${API_KEY}`
    : `${URL_BASE}/discover/movie?api_key=${API_KEY}`;

  return (
    <>
      <div>
        <NavBar />
        <Menu />
        <SideMenu />
        <Hero />

        <Genre onGenreSelect={handleGenreSelect} />
        <div>
          <h2>
            {selectedGenre ? `${selectedGenre.name} Movies` : "All Movies"}
          </h2>
          <Cards apiEndpoint={genreApiEndpoint} />
        </div>
      </div>
    </>
  );
}

export default Home;
