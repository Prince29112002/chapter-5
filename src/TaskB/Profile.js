import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <h1>This Is Profile Page</h1>
      <header style={{ display: "flex", flexDirection: "column" }}>
        <NavLink to="virat">Virat</NavLink>
        <NavLink to="msd">Msd</NavLink>
        <NavLink to="jadeja">Jadeja</NavLink>
        <Outlet />
      </header>
    </>
  );
};

export default Profile;
