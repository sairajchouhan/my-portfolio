import React from 'react';
import '../styles/Nav.css';
import logo from '../images/logo.png';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="#!">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="nav__items">
        <ul>
          <li>
            <a href="#!">Works</a>
          </li>
          <li>
            <a href="#!">Blog</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav__hamContainer">
        <div className="nav__ham"></div>
        <div className="nav__ham"></div>
        <div className="nav__ham"></div>
      </div>
    </nav>
  );
};

export default Nav;
