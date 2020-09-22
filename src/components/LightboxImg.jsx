import React from 'react';
import '../styles/LightboxImg.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const LightboxImg = ({ img, title, projectURL, githubURL }) => {
  return (
    <div className="lightboxImg">
      <img src={img} alt="" />
      <div className="lightboxImg__bottom">
        <a
          href={projectURL}
          className="lightboxImg__botton-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="lightboxImg__bottom-icon" />
        </a>
        <p> {title} </p>
        <a
          href={githubURL}
          className="lightboxImg__botton-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="lightboxImg__bottom-icon"
            style={{ fontSize: '1.4em' }}
          />
        </a>
      </div>
    </div>
  );
};

export default LightboxImg;
