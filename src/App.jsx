import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import "./Styles/index.css";
import "./Styles/App.css";
import Hero from "./Components/Hero";
import Badge from "./Components/Badge";
import Carousel from "./Components/Carousel";
import Menu from "./Components/SideMenu";
import MenuRight from "./Components/SideMenuRight";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Menu />
        <MenuRight />
        <Hero />
        <Carousel />
        <Badge />
        <Cards />
      </div>
    </>
  );
}

export default App;
