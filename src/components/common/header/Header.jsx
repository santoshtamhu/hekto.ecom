import React, { useState } from "react";
import NavBar from "./NavBar";
import TopNavBar from "./TopNavBar";

const Header = ({ user, setUser }) => {
  return (
    <div>
      <TopNavBar user={user} setUser={setUser} />
      <NavBar />
    </div>
  );
};

export default Header;
