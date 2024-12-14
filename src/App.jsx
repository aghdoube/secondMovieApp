import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/views/Movies";
import Series from "./Pages/views/Series";
import TVShows from "./Pages/views/TVShows";
import Discovery from "./Pages/SubPages/Discovery";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/discovery" element={<Discovery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
