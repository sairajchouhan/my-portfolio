import React, { useState } from 'react';
import '../styles/MobileNav.css';
import { Link } from 'react-scroll';
import LightSpeed from 'react-reveal/LightSpeed';

const MobileNav = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="mobileNav">
      <div className={!show ? 'mobileNav__light' : ''}>
        <LightSpeed
          ssrFadeout
          right
          opposite
          cascade
          when={show}
          duration={600}
        >
          <div className="mobileNav__links">
            <div
              className={
                !show
                  ? 'mobileNav__linksContainer'
                  : 'mobileNav__linksContainer'
              }
            >
              <Link
                activeClass="activeMob"
                to="works"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="mobileNav__link"
                onClick={handleClick}
              >
                Works
              </Link>
              <Link
                activeClass="activeMob"
                to=""
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="mobileNav__link"
              >
                About
              </Link>
              <Link
                activeClass="activeMob"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="mobileNav__link"
                onClick={handleClick}
              >
                Contact
              </Link>
              <Link
                activeClass="activeMob"
                to=""
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="mobileNav__link"
              >
                Blog
              </Link>
            </div>
          </div>
        </LightSpeed>
      </div>

      <div className="mobileNav" onClick={handleClick}>
        {show ? (
          <div className="mobileNav__timesContainer">
            <div className="mobileNav__times"></div>
            <div className="mobileNav__times"></div>
          </div>
        ) : (
          <div className="mobileNav__hamContainer">
            <div className="mobileNav__ham"></div>
            <div className="mobileNav__ham"></div>
            <div className="mobileNav__ham"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
