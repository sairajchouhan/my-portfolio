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
          <LightboxImg
            img={reactAmazonClone}
            title={'React Amazon Clone'}
            githubURL={'https://github.com/sairaj2119/react-amazon-clone'}
            projectURL={'https://react--clone-b3bcc.web.app/'}
          />
        </div>
        <div className="grid__project">
          <LightboxImg
            img={reactSlackClone}
            title={'React Slack Clone'}
            githubURL={'https://github.com/sairaj2119/react-slack-clone'}
            projectURL={'https://react-slack-clone-b655c.web.app/'}
          />
        </div>
        <div className="grid__project">
          <LightboxImg
            img={movieList}
            title={'Movie List App'}
            githubURL={'https://github.com/sairaj2119/react-context-app'}
            projectURL={'https://sairaj2119.github.io/react-context-app/'}
          />
        </div>
        <div className="grid__project">
          <LightboxImg
            img={FindYourDog}
            title={'Find Your Dog'}
            githubURL={'https://github.com/sairaj2119/FingYourDog'}
            projectURL={'https://sairaj2119.github.io/FingYourDog/'}
          />
        </div>
        <div className="grid__project">
          <LightboxImg
            img={csClub}
            title={'IIITDM CS-Club Website'}
            githubURL={'https://github.com/YogaVicky/CS-Club-IIITDM-Website'}
            projectURL={'https://yogavicky.github.io/CS-Club-IIITDM-Website/'}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
