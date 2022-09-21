import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand text-light">
            <strong>{props.header}</strong>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-primary" to="/Laptop/Addlaptop">Add Laptop Details</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
