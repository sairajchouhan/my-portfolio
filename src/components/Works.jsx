import React from 'react';
import '../styles/Works.css';
import amazon from '../images/amazon.png';
import slack from '../images/slack.png';
import spotify from '../images/spotify.png';
import Grid from './Grid';

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="works__mockups">
        <div className="works__mockups-heading">
          <p>Let's check some of my works</p>
        </div>
        <div className="works__mockups-images">
          <img src={spotify} alt="" />
          <img src={amazon} alt="" />
          <img src={slack} alt="" />
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default Works;
