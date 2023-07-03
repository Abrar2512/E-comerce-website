import React from "react";
import "../App.css";

const Header = ({ handleShow, count }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shoping-card">
      <div className="container">
        <a className="navbar-brand" onClick={() => handleShow(false)}>
          Shopping Cart App
        </a>
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
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#category">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-nav mx-auto">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" onClick={() => handleShow(true)}>
              Cart <sup className="text-danger">{count}</sup>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
