// src/AboutMe.jsx
import React from "react";
/*I am a passionate software developer with a strong background in
        Computer Science and Statistics. Currently pursuing my studies at the
        University of Illinois at Urbana-Champaign (UIUC), I am dedicated to
        learning and applying new technologies to solve real-world problems
        through my role as a Software Developer at Project: Code in UIUC! 
        */

import myImage from "./assets/image.png";
function AboutMe() {
  return (
    <div className="about">
      <h2>Welcome!</h2>
      <div className="about">
        <div className="about">
          <p className="about">
            I am a passionate software developer with a strong background in
            Computer Science and Statistics. Currently pursuing my studies at
            the University of Illinois at Urbana-Champaign (UIUC), I am
            dedicated to learning and applying new technologies to solve
            real-world problems through my role as a Software Developer at
            Project: Code in UIUC!
          </p>
          <div className="social-buttons">
            <a
              href="mailto:textfathcs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i> Email
            </a>
            <a
              href="https://www.linkedin.com/in/fatheenillinois"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/Fatheen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
          {/* Add more text content as needed */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
