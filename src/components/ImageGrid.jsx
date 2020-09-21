import React from 'react';
import '../styles/ImageGrid.css';
import reactSlackClone from '../images/gallery/reactSlackClone.png';
import movieList from '../images/gallery/movieList.png';
import FindYourDog from '../images/gallery/FindYourDog.png';
import csClub from '../images/gallery/csClub.png';
import reactAmazonClone from '../images/gallery/reactAmazonClone.png';
import LightboxImg from './LightboxImg';

const ImageGrid = () => {
  return (
    <div className="imageGrid">
      <div className="grid__container">
        <div className="grid__project">
          <LightboxImg img={reactAmazonClone} title={'React Amazon Clone'} />
        </div>
        <div className="grid__project">
          <LightboxImg img={reactSlackClone} title={'React Slack Clone'} />
        </div>
        <div className="grid__project">
          <LightboxImg img={movieList} title={'Movie List App'} />
        </div>
        <div className="grid__project">
          <LightboxImg img={FindYourDog} title={'Find Your Dog'} />
        </div>
        <div className="grid__project">
          <LightboxImg img={csClub} title={'IIITDM CS-Club Website'} />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
