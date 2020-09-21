import React from 'react';
import '../styles/LightboxImg.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const LightboxImg = ({ img, title }) => {
  return (
    <div className="lightboxImg">
      <img src={img} alt="" />
      <div className="lightboxImg__bottom">
        <FaExternalLinkAlt className="lightboxImg__bottom-icon" />
        <p> {title} </p>
        <FaGithub
          className="lightboxImg__bottom-icon"
          style={{ fontSize: '1.4em' }}
        />
      </div>
    </div>
  );
};

export default LightboxImg;
