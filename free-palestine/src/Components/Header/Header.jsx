import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategory = () => {
    setDropdown(!isDropdown);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
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

          {user && (
            <li className="menu__item">
              <Link to="profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </li>
          )}

          <li className="menu__item">
            {user ? (
              <>
                <button onClick={handleLogOut} className="headerLogOutBtn">
                  Log Out
                </button>
              </>
            ) : (
              <Link to="login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
