import React from 'react';
import '../styles/LightboxImg.css';

const LightboxImg = ({ img, title }) => {
  return (
    <div className="lightboxImg">
      <img src={img} alt="" />
      <p> {title} </p>
    </div>
  );
};

export default LightboxImg;
