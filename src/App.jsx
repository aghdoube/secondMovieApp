import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Discovery from "./Pages/SubPages/Discovery";
import Movies from "./Pages/Views/Movies";
import Series from "./Pages/Views/Series";
import Bookmarked from "./Components/Bookmarked";
import TVShows from "./Pages/Views/TvShows";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
          <Route path="/tv-shows" element={<TVShows />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
