import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../[removal.ai]_6f0faaef-663b-4d6f-bfb1-09dade1e2030_preview.png"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Foodie Logo" width="50" /> FOODIE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Menu" activeClassName="active">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search recipes..."
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="button">
            Search
          </button>
          <Link to="/Login" className="btn btn-outline-primary mx-2 d-flex justify-content-center align-items-center " type="button">
            Login
          </Link>
          <Link to="/Signup" className="btn btn-primary d-flex justify-content-center align-items-center" type="button">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
