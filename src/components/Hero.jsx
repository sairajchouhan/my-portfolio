import React, { useRef } from 'react';
import '../styles/Hero.css';
import Nav from './Nav';
import '../styles/Hero.css';
import myPic from '../images/raj.png';
import triangles from '../images/triangles.png';

const Hero = () => {
  const trianglesRef = useRef();
  const onMouseMove = (e) => {
    console.log('mousemoved');
    const x = (window.innerWidth - e.pageX * 10) / 100;
    const y = (window.innerHeight - e.pageY * 10) / 100;
    const img = trianglesRef.current;
    img.style.transform = `translateX(${x}px) translateY(${y}px)`;
  };
  return (
    <div onMouseMove={(e) => onMouseMove(e)} className="hero">
      <img
        ref={trianglesRef}
        className="hero__triangles"
        src={triangles}
        alt="triangles"
      />
      <Nav />
      <div className="hero__main">
        <div className="hero__content">
          <p className="hero__contentIntro">
            HELLO, I'M <span>SAIRAJ</span>
          </p>
          <h1>Full stack web developer, and freelancer</h1>
          <div className="hero__contentSubtitle">
            <p>
              I love to work with react and deliver websites that make you feel
            </p>
            <p>awesome and dance</p>
          </div>

          <a className="hero__contentBtn" href="#!">
            Ping me !
          </a>
        </div>
        <div className="hero__img">
          <img src={myPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
