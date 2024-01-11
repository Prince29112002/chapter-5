import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Profile">Profile</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
