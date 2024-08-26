import React from "react";
import logo from "../../jio_cinema.png";
import { Link } from "react-router-dom";
import { FaSearch, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="header-items">
          <img src={logo} alt="jio-cinema-logo" />
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/free">Free</Link>
            <Link to="/premium">Premium</Link>
          </div>
          <div className="search-bar">
            <FaSearch />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Movies, Shows and More"
            />
          </div>
          <FaUserAlt />
        </div>
      </nav>
      <nav className="header-2"></nav>
    </>
  );
};

export default Header;
