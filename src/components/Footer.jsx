import React from 'react';
import '../styles/Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { Link as scrollLink, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__icons">
          <ul>
            <li>
              <a href="!#">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="!#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="!#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="!#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyrights">&copy; 2020 Chouhan Sairaj</div>
        <div className="footer__goToTop" onClick={() => scroll.scrollToTop()}>
          <FaArrowUp className="footer__goToTopIcon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
