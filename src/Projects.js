import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/sainsburys-project"
        image="https://lh3.googleusercontent.com/pw/ACtC-3cl886XR8R1ZRuNX_h1epMI9G5aDdq7U10boH0d9lHpFLoz_qfPj3G35bfzfbv6KDOdXhg6eSGHmluFW2YojbnvACL-QedA1GHuyserED5LWpixZ-pEtZD0sUXJnmAp9tGoKl_08AQm9GJKocm1Xku6Ig=w611-h321-no?authuser=0"
        title="Sainsburys Buzzwall"
        category="Web App"
      />
    </div>
  )
}

export default Projects;