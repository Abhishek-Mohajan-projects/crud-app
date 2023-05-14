import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-Link">
          Home
        </Link>
        <Link to="/show-movies" className="nav-Link">
          Show Movie
        </Link>
        <Link to="/add-movies" className="nav-Link">
          Add Movie
        </Link>
      </nav>
      <h1>CRUD App</h1>
    </div>
  );
};

export default Navbar;
