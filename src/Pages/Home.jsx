import React from "react";

import NavBar from "../Components/NavBar";
import Cards from "../Components/Cards";
import Hero from "../Components/Hero";
import Badge from "../Components/Badge";
import Carousel from "../Components/Carousel";
import Menu from "../Components/SideMenu";
import MenuRight from "../Components/SideMenuRight";

import "../Styles/index.css";
import "../Styles/App.css";

function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Menu />
        <MenuRight />
        <Hero />
        <Carousel />
        <Badge />
        <Cards apiEndpoint='https://api.themoviedb.org/3/search/movie' />
      </div>
    </>
  );
}

export default Home;
