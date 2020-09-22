import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/GridItem.css';

const GridItem = ({ img, title, githubRepo, projectLink }) => {
  return (
    <>
      <img src={img} alt={title} />
      <div className="des">
        <a
          href={githubRepo}
          style={{ fontSize: '1.5em' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <p>{title}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
        </a>
      </div>
    </>
  );
};

export default GridItem;
