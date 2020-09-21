import React from 'react';
import '../styles/ImageGrid.css';
import slack from '../images/slack.png';

const ImageGrid = () => {
  return (
    <div className="imageGrid">
      <div className="grid__container">
        <div className="grid__project">
          <div>
            <img src={slack} alt="" />
            <p>This is a slack clone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
