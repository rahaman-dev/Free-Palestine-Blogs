import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategory = () => {
    setDropdown(!isDropdown);
  };

  return (
    <div>
      <nav className="menu">
        <div className="menu__logo">
          <Link to="/">
            <h2>Free Palestine Blogs</h2>
          </Link>
        </div>

        <button className="menu__toggle" onClick={toggleMenu}>
          {isOpen ? "X" : "menu"}
        </button>

        <ul className={`menu__list ${isOpen ? "menu__list--open" : ""}`}>
          <li className="menu__item">
            <Link to="/">Home</Link>
          </li>

          <li className="menu__item">
            <Link to="blogs">blogs</Link>
          </li>

          <li className="menu__item">
            <Link to="category">Category</Link>
            <span onClick={handleCategory} style={{ position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{
                  width: "20px",
                  position: "absolute",
                  right: "-5",
                  cursor: "pointer",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <DropdownMenu
              className={`DropdownMenu ${isDropdown ? "DropdownMenuOpen" : ""}`}
            ></DropdownMenu>
          </li>

          <li className="menu__item">
            <Link to="profile">profile</Link>
          </li>

          <li className="menu__item">
            <Link to="signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
