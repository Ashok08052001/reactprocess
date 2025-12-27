import React from "react";
import "../css/Navbar.css";
const Navbar = () => {
  const menu = [{ name: "Home" }, { name: "Movies" }, { name: "About" }];

  return (
    <>
      <div className="navbar">
        <h1 className="navbar-title">Movies</h1>

        <ul className="navbar-menu">
          {menu.map((e, i) => (
            <li key={i} className="navbar-item">
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
