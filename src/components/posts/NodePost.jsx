import React from 'react';
import node from '../../images/blog/node.png';
import linkedlist from '../../images/blog/linkedlist.png';
import reqres from '../../images/blog/reqres.png';

import '../../styles/BlogPost.css';

const BlogPost = () => {
  return (
    <div className="blogPost">
      <div className="blogPost__container">
        <div className="blogPost__title">
          <p>Why node.js is called node ?</p>
        </div>
        <div className="blogPost__block--img">
          <img src={node} alt="node" />
        </div>
        <div className="blogPost__chunk">
          <p>
            To know the reason behind the naming of node.js let me introduce a
            Data Structure called Linked List Don’t panic{' '}
            <span role="img" aria-label="freking">
              😱😱
            </span>{' '}
            we don’t need to know how exactly it works, but the point to be
            noted is the two rectangular boxes that are combined together to
            make a unit and that is called as a NODE(refer the image below).
            Basically a node consists of two variables, those two boxes there
            :point_down: (bottom of the message) represent 2 variables ^_^
          </p>
        </div>
        <div className="blogPost__block--img">
          <img src={linkedlist} alt="node" style={{ width: '80%' }} />
        </div>
        <div className="blogPost__chunk">
          <p>
            First box that is first variable is a normal one to store some kind
            of data, but the second variable is special it is a pointer it
            points to the next node that is next set of boxes, the second
            variable stores the address of next node. So to work with linked
            list all nodes should be connected it means the second box of a node
            must contain the address of the next node or else code will break.
            Remember this one thing in order to work with linked list we have to
            have the second box pointing to the next node that is a must and
            should condition.
          </p>
        </div>
        <div className="blogPost__chunk">
          <p>
            So talking about node.js when ever we make a request to the server
            all the work is done between request and response cycle (code is
            below and take a look at visual representation){' '}
            <span role="img" aria-label="freking">
              👇👇
            </span>{' '}
            . The code below shows the basic routing using express involving the
            request, response arguments in the callback function.
          </p>
        </div>
        <div className="blogPost__block--img">
          <img
            src={reqres}
            alt="node req res cycle"
            style={{ width: '100%' }}
          />
        </div>
        <div className="blogPost__code">
          <pre>
            {`
            app.get('/', (request, response) => {
                  response.send('hello PWJ community')
              })      
            `}
          </pre>
        </div>
        <div className="blogPost__chunk">
          <p>
            As everything in node.js is a middleware function, so when ever we
            write a middleware function, say for example hashing the passwords
            before saving to database, we get access to the third argument as a
            function usually called as next like this{' '}
            <span role="img" aria-label="freking">
              👇👇
            </span>{' '}
          </p>
        </div>
        <div className="blogPost__code">
          <pre>
            {`
            const middlewareFunction = (request, response, next) => {	
                console.log('this is a middleware function')
                next()	
            })
            `}
          </pre>
        </div>
        <div className="blogPost__chunk">
          <p>
            As you can notice I called the next function inside of middleware,
            guess what happens if you don’t call it.{' '}
            <span role="img" aria-label="freking">
              🔥🔥
            </span>
            whole request response cycle gets halted only because you did not
            call next function and the request response cycle doesn't end and
            you will not receive kind of response from server. woahh…that’s it
            doesn’t it look similar to linked list yeah…it is the same theory.
            In linked list the second box of the node must point to next node or
            everything will break, similar logic here in node.js, each
            middleware function must call next function….That’s it the name
            node.js is not a random word popped inside Sir Ryan Dahl's mind
            (node is written by him) h e was smart to name the runtime as NODE
            because he knew the philosophy of working was similar to linked
            list, and linked lists have nodes. Yeah…that’s it
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
