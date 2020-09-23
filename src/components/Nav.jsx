import React from 'react';
import '../styles/Nav.css';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
import MobileNav from './MobileNav';

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
            <Link
              to="works"
              spy={true}
              smooth={true}
              offset={0} // -60
              duration={500}
            >
              Works
            </Link>
          </li>

          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0} // -70
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0} // -70
              duration={500}
              // onClick={() => scroll.scrollMore(0)}
            >
              Contact
            </Link>
          </li>
          <li>
            <a href="#!">Blog</a>
          </li>
        </ul>
      </div>
      <MobileNav />
      <div className="blur"></div>
    </nav>
  );
};

export default Nav;
