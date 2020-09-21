import React from 'react';
import '../styles/LightboxImg.css';

const LightboxImg = ({ img }) => {
  return (
    <div className="lightboxImg">
      <img src={img} alt="" />
    </div>
  );
};

export default LightboxImg;
