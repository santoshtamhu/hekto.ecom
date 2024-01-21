import React from "react";
import NavBar from "./NavBar";
import TopNavBar from "./TopNavBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <TopNavBar />
      <NavBar />
    </header>
  );
};

export default Header;
