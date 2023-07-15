import React from "react";
import logo from "../../jio_cinema.png";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="jio-cinema-logo" />
      <div>
        <Link to="/movies">Movies</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/free">Free</Link>
        <Link to="/premium">Premium</Link>
      </div>
      <FaUserAlt />
    </nav>
  );
};

export default Header;
