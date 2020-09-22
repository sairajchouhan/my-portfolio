import React from 'react';
import GridItem from './GridItem';

import '../styles/Grid.css';
// These are images
import FindYourDog from '../images/gallery/FindYourDog.jpg';
import movieList from '../images/gallery/movieList.jpg';
import reactAmazonClone from '../images/gallery/reactAmazonClone.jpg';
import reactSlackClone from '../images/gallery/reactSlackClone.jpg';
import csClub from '../images/gallery/csClub.jpg';

const Grid = () => {
  return (
    <div className="grid">
      <div className="grid__container">
        <div className="grid__item">
          <GridItem
            img={reactAmazonClone}
            title={'React Amazon Clone'}
            githubRepo={'https://github.com/sairaj2119/react-amazon-clone'}
            projectLink={'https://react--clone-b3bcc.web.app/'}
          />
        </div>
        <div className="grid__item">
          <GridItem
            img={reactSlackClone}
            title={'React Slack Clone'}
            githubRepo={'https://github.com/sairaj2119/react-slack-clone'}
            projectLink={'https://react-slack-clone-b655c.web.app/'}
          />
        </div>
        <div className="grid__item">
          <GridItem
            img={movieList}
            title={'React Context API Usecase'}
            githubRepo={'https://github.com/sairaj2119/react-context-app'}
            projectLink={'https://sairaj2119.github.io/react-context-app/'}
          />
        </div>
        <div className="grid__item">
          <GridItem
            img={FindYourDog}
            title={'Find Your Dog'}
            githubRepo={'https://github.com/sairaj2119/FingYourDog'}
            projectLink={'https://sairaj2119.github.io/FingYourDog/'}
          />
        </div>
        <div className="grid__item">
          <GridItem
            img={csClub}
            title={'Computer Science Club Website'}
            githubRepo={'https://github.com/YogaVicky/CS-Club-IIITDM-Website'}
            projectLink={'https://yogavicky.github.io/CS-Club-IIITDM-Website/'}
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
