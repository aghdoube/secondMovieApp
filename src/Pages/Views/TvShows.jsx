import React from "react";
import NavBar from "../../Components/NavBar";
import SideMenu from "../../Components/SideMenu";
import SideMenuRight from "../../Components/SideMenuRight";
import Cards from "../../Components/Cards";

const TVShows = () => {
  const tvShowsApiEndpoint = "https://api.themoviedb.org/3/tv/top_rated";

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideMenu />
        <div className="flex-grow">
          <h1>Top Rated TV Shows</h1>
          <Cards apiEndpoint={tvShowsApiEndpoint} />
        </div>
        <SideMenuRight />
      </div>
    </div>
  );
};

export default TVShows;