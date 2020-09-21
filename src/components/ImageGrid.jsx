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
          <LightboxImg img={reactAmazonClone} title={'This is a slack clone'} />
          {/* <img src={reactAmazonClone} alt="" />
          <p>This is a slack clone</p> */}
        </div>
        <div className="grid__project">
          <LightboxImg img={reactSlackClone} title={'This is a slack clone'} />
          {/* <img src={reactSlackClone} alt="" />
          <p>This is a slack clone</p> */}
        </div>
        <div className="grid__project">
          <LightboxImg img={movieList} title={'This is a slack clone'} />
          {/* <img src={movieList} alt="" />
          <p>This is a slack clone</p> */}
        </div>
        <div className="grid__project">
          <LightboxImg img={FindYourDog} title={'This is a slack clone'} />
          {/* <img src={FindYourDog} alt="" />
          <p>This is a slack clone</p> */}
        </div>
        <div className="grid__project">
          <LightboxImg img={csClub} title={'This is a slack clone'} />
          {/* <img src={csClub} alt="" />
          <p>This is a slack clone</p> */}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
