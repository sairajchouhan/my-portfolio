import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/GridItem.css';
// react-lightbox
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GridItem = ({
  img,
  title,
  githubRepo,
  projectLink,
  lightboxImages,
  imageTitle,
  imageCaption,
}) => {
  const images = lightboxImages;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <img src={img} alt={title} onClick={() => setIsOpen(true)} />
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
      </div>
      {isOpen && (
        <Lightbox
          imageCaption={imageCaption}
          imageTitle={imageTitle}
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default GridItem;
