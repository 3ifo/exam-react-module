import React from "react";
import { NavLink } from "react-router-dom";
import "../Index.scss";

const Navbar = () => {
  return (
    <>
      <nav id="navb">
        <ul>
          <li>
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/about">Aboutpage</NavLink>
          </li>
          <li>
            <NavLink to="/search">Searchpage</NavLink>
          </li>
          <select name="" id="">
            <option value="it">EN</option>
            <option value="en">IT</option>
          </select>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
