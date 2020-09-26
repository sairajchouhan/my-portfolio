import React, { useState } from 'react';
import '../styles/Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import useSound from 'use-sound';
import pop from '../utils/pop.mp3';

const Footer = () => {
  const [play, { stop }] = useSound(pop, { volume: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__icons">
          <ul>
            <li>
              <a
                style={{ padding: '0px', margin: '20px' }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  play();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                href="https://github.com/sairaj2119"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                style={{ padding: '0px', margin: '20px' }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  play();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                href="https://www.linkedin.com/in/chouhan-sairaj-412b911a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                style={{ padding: '0px', margin: '20px' }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  play();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                href="https://www.facebook.com/sairaj2119"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                style={{ padding: '0px', margin: '20px' }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  play();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  stop();
                }}
                href="https://www.instagram.com/sairaj.dev/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
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
