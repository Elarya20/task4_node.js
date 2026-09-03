import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  useTheme
} from "../context/ThemeContext.jsx";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav
      className={
        `navbar navbar-expand-lg ${
          theme === "dark"
            ? "navbar-dark bg-dark"
            : "navbar-light bg-light"
        }`
      }
    >

      <div className="container">

        <Link
          to="/"
          className="navbar-brand fw-bold"
        >
          Task Manager
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/tasks" className="nav-link">
                Tasks
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/add-task" className="nav-link">
                Add Task
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart ({cartCount})
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item ms-lg-2">

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={toggleTheme}
              >
                {theme === "light"
                  ? "🌙 Dark"
                  : "☀️ Light"}
              </button>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;