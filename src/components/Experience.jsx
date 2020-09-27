import React from 'react';
import '../styles/Experience.css';
import punch from '../images/punch.jpg';
import css3 from '../images/techIcons/css3.svg';
import firebase from '../images/techIcons/firebase.svg';
import git from '../images/techIcons/git.svg';
import html5 from '../images/techIcons/html5.svg';
import js from '../images/techIcons/js.svg';
import mongodb from '../images/techIcons/mongodb.svg';
import nodejs from '../images/techIcons/nodejs.svg';
import react from '../images/techIcons/react.svg';
import redux from '../images/techIcons/redux.svg';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

const iconVariants = {
  hover: { scale: 1.2 },
  tap: { rotate: 360, scale: 1, transition: { duration: 0.2 } },
};

const Experience = () => {
  return (
    <div className="exp">
      <Fade bottom delay={500} duration={1000} distance="100px">
        <div className="exp__container">
          <img
            src={punch}
            alt="Two people working on a pc"
            className="exp__img"
          />
          <div className="exp__content">
            <div className="exp__content-wrapper">
              <div className="exp__heading" style={{ marginBottom: '20px' }}>
                <h1 style={{ marginBottom: '15px' }}>My Experience</h1>
              </div>
              <div className="exp__qna">
                <div className="exp__q">
                  <p className="exp__q-heading">
                    {' '}
                    <span role="img" aria-label="poning right">
                      👉
                    </span>{' '}
                    What technologies I know ?
                  </p>
                </div>
                <div className="exp__a">
                  <p style={{ marginTop: '7px', marginBottom: '7px' }}>
                    I love to build full stack applications using React as
                    frontend, Node and Firebase as a backend.React it is my
                    super power #ReactRider and make webistes that highly
                    satisfy user needs and make your business grow.
                  </p>
                  <div className="exp__a-icons">
                    <motion.img
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                      src={html5}
                      alt="css3"
                      className="exp__icon"
                    />
                    <motion.img
                      src={css3}
                      alt="css3"
                      className="exp__icon"
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                    />
                    <motion.img
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                      src={js}
                      alt="css3"
                      className="exp__icon"
                    />
                    <motion.img
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                      src={react}
                      alt="css3"
                      className="exp__icon"
                    />
                    <motion.img
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                      src={redux}
                      alt="css3"
                      className="exp__icon"
                    />
                    <motion.img
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                      src={nodejs}
                      alt="css3"
                      className="exp__icon"
                    />
                    <motion.img
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                      src={mongodb}
                      alt="css3"
                      className="exp__icon"
                    />
                    <motion.img
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                      src={firebase}
                      alt="css3"
                      className="exp__icon"
                    />
                    <motion.img
                      variants={iconVariants}
                      whileHover={'hover'}
                      whileTap={'tap'}
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                      }}
                      src={git}
                      alt="css3"
                      className="exp__icon"
                    />
                  </div>
                </div>
              </div>
              <div className="exp__qna">
                <div className="exp__q">
                  <p>
                    {' '}
                    <span role="img" aria-label="poning right">
                      👉
                    </span>{' '}
                    Position of responsibilities ?
                  </p>
                </div>
                <div className="exp__a" style={{ color: '#11354c' }}>
                  <p>
                    # Frontend developer for{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://yogavicky.github.io/CS-Club-IIITDM-Website/"
                    >
                      {' '}
                      CS Club official website
                    </a>{' '}
                    of my collage
                  </p>
                  <p>
                    # Frontend developer at{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://decartem.com/"
                    >
                      Decartem
                    </a>{' '}
                    a digital educational startup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Experience;
