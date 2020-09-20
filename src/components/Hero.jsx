import React from 'react';
import '../styles/Hero.css';
import Nav from './Nav';
import '../styles/Hero.css';
import myPic from '../images/raj.png';
import { Link } from 'react-scroll';
import { FaPlay } from 'react-icons/fa';
import { FaStop } from 'react-icons/fa';
import useSound from 'use-sound';
import boopSfx from '../utils/djairhorn.mp3';

const Hero = () => {
  // const trianglesRef = useRef();
  // const onMouseMove = (e) => {
  //   const x = (window.innerWidth - e.pageX * 5) / 80;
  //   const y = (window.innerHeight - e.pageY * 5) / 80;
  //   const img = trianglesRef.current;
  //   img.style.transform = `translateX(${x}px) translateY(${y}px)`;
  // };
  const [play, { isPlaying, stop }] = useSound(boopSfx, { volume: 1 });

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
              <p>awesome and dance 👇👇</p>
            </div>
            <div className="hero__end">
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
              <div
                className="hero__contentPlayContainer"
                onClick={isPlaying ? () => stop() : () => play()}
              >
                {isPlaying ? (
                  <FaStop className="hero__contentPlayBtn-pause" />
                ) : (
                  <FaPlay className="hero__contentPlayBtn" />
                )}
              </div>
            </div>
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
