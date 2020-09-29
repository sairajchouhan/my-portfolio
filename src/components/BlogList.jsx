import React from 'react';
import '../styles/BlogList.css';
import node from '../images/blog/node.png';
import { useHistory } from 'react-router-dom';

const BlogList = () => {
  const history = useHistory();
  return (
    <div className="blogList">
      <div className="blogList__container">
        <div className="blogList__post">
          <div className="blogList__post--container">
            <img src={node} alt="some pic" />
            <div className="blogList__post--content">
              <div className="blogList__post--title">
                <p
                  onClick={() =>
                    history.push('/blog/why-nonejs-is-called-node')
                  }
                >
                  Why node.js is called node ?
                </p>
                <span>29th September 2020</span>
              </div>
              <div className="blogList__post--subtitles">
                <p>
                  Ever wondered the reason behind the name of node.js, no.. it's
                  not a random word popped inside Sir Ryan Dahl's mind (node is
                  written by him) he was smart to name the runtime as NODE
                  because he knew the philosophy of working
                </p>
              </div>
              <p
                className="blogList__readmore"
                onClick={() => history.push('/blog/why-nonejs-is-called-node')}
              >
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
