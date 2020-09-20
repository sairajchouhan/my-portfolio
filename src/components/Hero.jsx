import React, { useRef } from 'react';
import '../styles/Hero.css';
import Nav from './Nav';
import '../styles/Hero.css';
import myPic from '../images/raj.png';
import { Link } from 'react-scroll';

const Hero = () => {
  const trianglesRef = useRef();
  const onMouseMove = (e) => {
    const x = (window.innerWidth - e.pageX * 5) / 80;
    const y = (window.innerHeight - e.pageY * 5) / 80;
    const img = trianglesRef.current;
    img.style.transform = `translateX(${x}px) translateY(${y}px)`;
  };

  return (
    <>
      <Nav />
      <div className="hero">
        <div className="hero__main">
          <div className="hero__content">
            <p className="hero__contentIntro">
              HELLO, I'M <span>SAIRAJ</span>
            </p>
            <h1>Full stack web developer, and freelancer</h1>
            <div className="hero__contentSubtitle">
              <p>
                I love to work with react and deliver websites that make you
                feel
              </p>
              <p>awesome and dance</p>
            </div>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="hero__contentBtn"
            >
              Ping me
            </Link>
          </div>
          <div className="hero__img">
            <img src={myPic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
