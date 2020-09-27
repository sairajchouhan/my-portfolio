import React from 'react';
import '../styles/Works.css';
import amazon from '../images/amazon.png';
import slack from '../images/slack.png';
import spotify from '../images/spotify.png';
import Grid from './Grid';
import Fade from 'react-reveal/Fade';

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="works__mockups">
        <div className="works__mockups-heading">
          <div className="works__mockups-heading-div">
            <p>Let's check some of my works</p>
          </div>
        </div>
        <div className="works__mockups-images">
          <Fade bottom delay={500} duration={1000} distance="100px">
            <img src={spotify} alt="" />
          </Fade>
          <Fade bottom delay={500} duration={1200}>
            <img src={amazon} alt="" />
          </Fade>
          <Fade bottom delay={500} duration={1000} distance="100px">
            <img src={slack} alt="" />
          </Fade>
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default Works;
