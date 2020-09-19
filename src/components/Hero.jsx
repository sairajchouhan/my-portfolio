import React, { useRef } from 'react';
import '../styles/Hero.css';
import Nav from './Nav';
import '../styles/Hero.css';
import myPic from '../images/raj.png';
import triangles from '../images/triangles.png';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';

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
      <div onMouseMove={(e) => onMouseMove(e)} className="hero">
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
            <a className="hero__contentBtn" href="#!">
              Ping me
            </a>
          </div>
          <div className="hero__img">
            <img src={myPic} alt="" />
          </div>
        </div>
      </div>

      <img
        ref={trianglesRef}
        className="hero__triangles"
        src={triangles}
        alt="triangles"
      />
    </>
  );
};

export default Hero;
