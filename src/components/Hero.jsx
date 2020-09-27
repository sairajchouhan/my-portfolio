import React from 'react';
import Nav from './Nav';
import '../styles/Hero.css';
import myPic from '../images/raj.png';
import { Link } from 'react-scroll';
import { FaPlay } from 'react-icons/fa';
import { FaStop } from 'react-icons/fa';
import useSound from 'use-sound';
import boopSfx from '../utils/djairhorn.mp3';
import { motion } from 'framer-motion';

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
            <motion.p className="hero__contentIntro">
              HELLO, I'M <span>SAIRAJ</span>
            </motion.p>
            <motion.h1>Full stack web developer, and freelancer</motion.h1>
            <motion.div className="hero__contentSubtitle">
              <p>
                I love to work with react and deliver websites that make you
                feel
              </p>
              <p>
                awesome and dance{' '}
                <span
                  role="img"
                  aria-label="owner is saying to click the below play button"
                >
                  👇👇
                </span>{' '}
              </p>
            </motion.div>
            <motion.div className="hero__end">
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
            </motion.div>
          </div>
          <motion.div
            className="hero__img"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            <img src={myPic} alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
