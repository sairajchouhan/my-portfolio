import React from 'react';
import '../styles/Works.css';
import amazon from '../images/amazon.png';
import slack from '../images/slack.png';
import spotify from '../images/spotify.png';
import Grid from './Grid';
// import Fade from 'react-reveal/Fade';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Works = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);
  return (
    <div className="works" id="works">
      <div className="works__mockups">
        <div className="works__mockups-heading">
          <div className="works__mockups-heading-div">
            <p>Let's check some of my works</p>
          </div>
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
