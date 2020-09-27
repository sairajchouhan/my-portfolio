import React from 'react';
import GridItem from './GridItem';
import '../styles/Grid.css';
import { motion } from 'framer-motion';
// These are thumbnail images
import FindYourDog from '../images/gallery/FindYourDog.jpg';
import movieList from '../images/gallery/movieList.jpg';
import reactAmazonClone from '../images/gallery/reactAmazonClone.jpg';
import reactSlackClone from '../images/gallery/reactSlackClone.jpg';
import csClub from '../images/gallery/csClub.jpg';
//  Light box images
// ! Amazon lightbox images
import cart from '../images/lightbox/reactAmazonClone/cart.jpg';
import checkout from '../images/lightbox/reactAmazonClone/checkout.jpg';
import orders from '../images/lightbox/reactAmazonClone/orders.jpg';
import register from '../images/lightbox/reactAmazonClone/register.jpg';
import signin from '../images/lightbox/reactAmazonClone/signin.jpg';
// ! Slack lightbox images
import auth from '../images/lightbox/reactSlackClone/auth.jpg';
import chat from '../images/lightbox/reactSlackClone/chat.jpg';
// ! Movie list
import movieListL from '../images/lightbox/movieList/movieList.jpg';
// ! Find your Dog
import allBreeds from '../images/lightbox/FindYourDog/allBreeds.jpg';
import dogs from '../images/lightbox/FindYourDog/dogs.jpg';
import landing from '../images/lightbox/FindYourDog/landing.jpg';
// ! csClub
import about from '../images/lightbox/csClub/about.jpg';
import blog from '../images/lightbox/csClub/blog.jpg';
import contact from '../images/lightbox/csClub/contact.jpg';
import events from '../images/lightbox/csClub/events.jpg';
import faq from '../images/lightbox/csClub/faq.jpg';
import gallery from '../images/lightbox/csClub/gallery.jpg';
import home from '../images/lightbox/csClub/home.jpg';
import people from '../images/lightbox/csClub/about.jpg';

const Grid = () => {
  const reactAmazonCloneLightbox = [cart, checkout, orders, register, signin];
  const reactSlackCloneLightbox = [auth, chat];
  const movieListLightbox = [movieListL];
  const FindYourDogLightbox = [allBreeds, dogs, landing];
  const csClubLightbox = [
    about,
    blog,
    contact,
    events,
    faq,
    gallery,
    home,
    people,
  ];
  return (
    <div className="grid">
      <div className="grid__container">
        <motion.div
          className="grid__item"
          whileHover={{ scale: 1.05 }}
          onTap={{ scale: 1 }}
        >
          <GridItem
            img={reactAmazonClone}
            title={'React Amazon Clone'}
            githubRepo={'https://github.com/sairaj2119/react-amazon-clone'}
            projectLink={'https://react--clone-b3bcc.web.app/'}
            lightboxImages={reactAmazonCloneLightbox}
            imageTitle={'The epic amazon clone'}
            imageCaption={
              'The clone is built using react which is the most rending framework now in 2020 and backend is served using firebase using firestore and cloud functions to implement payment gateway integration using stripe'
            }
          />
        </motion.div>
        <motion.div
          className="grid__item"
          whileHover={{ scale: 1.05 }}
          onTap={{ scale: 1 }}
        >
          <GridItem
            img={reactSlackClone}
            title={'React Slack Clone'}
            githubRepo={'https://github.com/sairaj2119/react-slack-clone'}
            projectLink={'https://react-slack-clone-b655c.web.app/'}
            lightboxImages={reactSlackCloneLightbox}
            imageTitle={'Slack Clone'}
            imageCaption={
              'The clone is built using react which is the most rending framework now in 2020 and backend is served using firebase using firestore'
            }
          />
        </motion.div>
        <motion.div
          className="grid__item"
          whileHover={{ scale: 1.05 }}
          onTap={{ scale: 1 }}
        >
          <GridItem
            img={movieList}
            title={'React Context API Usecase'}
            githubRepo={'https://github.com/sairaj2119/react-context-app'}
            projectLink={'https://sairaj2119.github.io/react-context-app/'}
            lightboxImages={movieListLightbox}
            imageTitle={'Movile list'}
            imageCaption={
              'This is a tiny project which uses react context API to make a simple movie list app where you can add and remove movies'
            }
          />
        </motion.div>
        <motion.div
          className="grid__item"
          whileHover={{ scale: 1.05 }}
          onTap={{ scale: 1 }}
        >
          <GridItem
            img={FindYourDog}
            title={'Find Your Dog'}
            githubRepo={'https://github.com/sairaj2119/FingYourDog'}
            projectLink={'https://sairaj2119.github.io/FingYourDog/'}
            lightboxImages={FindYourDogLightbox}
            imageTitle={'Find Your Dog'}
            imageCaption={
              'This is a little site that uses fetch api and gets some images of cute dogiees 🐕🐶🐕‍🦺🐩'
            }
          />
        </motion.div>
        <motion.div
          className="grid__item"
          whileHover={{ scale: 1.05 }}
          onTap={{ scale: 1 }}
        >
          <GridItem
            img={csClub}
            title={'Computer Science Club Website'}
            githubRepo={'https://github.com/YogaVicky/CS-Club-IIITDM-Website'}
            projectLink={'https://yogavicky.github.io/CS-Club-IIITDM-Website/'}
            lightboxImages={csClubLightbox}
            imageTitle={
              'IIITDM Kancheepuram, India, Computer Science club webiste'
            }
            imageCaption={
              'CS club official website build on HTML, CSS, JavaScript and bootstrap'
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Grid;
