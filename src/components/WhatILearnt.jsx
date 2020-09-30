import React from 'react';
import '../styles/WhatILearnt.css';

const WhatILearnt = () => {
  return (
    <div className="whatilearnt">
      <h1>These are some of the many things I learned during the challenge</h1>
      <div className="whatilearnt__uls">
        <ul>
          <h2>Technical skills</h2>
          <li>
            Designing the website in figma and making a wire frame for the
            project
          </li>
          <li>Literally speaking, tonnes of CSS, lot of CSS practice</li>
          <li>Responsive web development, to make it pretty in mobiles</li>
          <li>Logo design, that awesome SR I made it</li>
          <li>
            I actually learned some photo editing, yup that image on landing
            page
          </li>
          <li>
            Form validations, for my contact form, noo...you can't enter what
            ever you like
          </li>
          <li>
            I learned how to send emails using node as a backend by firebase
            cloud functions, that is the awesome stuff here
          </li>
          <li>
            I saw hundreds of portfolios and got a good eye on design, and color
            piking
          </li>
          <li>Last but not the least, REACT my love, huge react experience</li>
        </ul>
        <ul>
          <h2>Soft skills</h2>
          <li>
            Quick googling for queries, this is boss level skill I developed
          </li>
          <li>Searching for packages and using it in my project</li>
          <li>Reading documentation instead of trying random stuff</li>
          <li>Small but continuous progress is the most important thing</li>
          <li>
            Taking regular breaks, which actually increases your performance
          </li>
          <li>
            You need to plan what you do, it sucks if you just try to so
            something random and at last you will be unsatisfied, I used white
            board to plan what to do next{' '}
          </li>
          <li>
            Taking review of what you have done, not only code but also the
            design and UX aspects, I literally asked my parents, friends to say
            me, what would they like to see ? or modify, so that the website
            looked and performed even better
          </li>
        </ul>
      </div>
      <h5 style={{ textAlign: 'center' }}>
        Again I would like to thank{' '}
        <a href="https://cleverprogrammer.com"> Team CP</a> for creating the
        drive in me and pushing towards my goals
      </h5>
    </div>
  );
};

export default WhatILearnt;
