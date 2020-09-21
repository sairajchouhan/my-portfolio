import React from 'react';
import '../styles/ImageGrid.css';
import reactSlackClone from '../images/gallery/reactSlackClone.png';
import movieList from '../images/gallery/movieList.png';
import FindYourDog from '../images/gallery/FindYourDog.png';
import csClub from '../images/gallery/csClub.png';
import reactAmazonClone from '../images/gallery/reactAmazonClone.png';

const ImageGrid = () => {
  return (
    <div className="imageGrid">
      <div className="grid__container">
        <div className="grid__project">
          <img src={reactAmazonClone} alt="" />
          <p>This is a slack clone</p>
        </div>
        <div className="grid__project">
          <img src={reactSlackClone} alt="" />
          <p>This is a slack clone</p>
        </div>
        <div className="grid__project">
          <img src={movieList} alt="" />
          <p>This is a slack clone</p>
        </div>
        <div className="grid__project">
          <img src={FindYourDog} alt="" />
          <p>This is a slack clone</p>
        </div>
        <div className="grid__project">
          <img src={csClub} alt="" />
          <p>This is a slack clone</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
