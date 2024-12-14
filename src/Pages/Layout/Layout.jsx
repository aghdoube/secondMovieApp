import React from "react";
import NavBar from "../../Components/NavBar";
import SideMenu from "../../Components/SideMenu";
import SideMenuRight from "../../Components/SideMenuRight";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideMenu />
        <div className="flex-grow p-4">{children}</div>
        <SideMenuRight />
      </div>
    </div>
  );
};

export default Layout;
