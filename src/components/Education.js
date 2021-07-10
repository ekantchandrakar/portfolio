import React from 'react';

const Education = () => {
  return (
    <div className="ui grid">
      <div className="one wide column"></div>
      <div className="five wide column">
        <div className="title">EDUCATION</div>
        <div className="title emoji component-emoji title-emoji project-title">
          ['o']
        </div>
      </div>
      <div className="ten wide column">
        <a href="http://www.nitrr.ac.in/" target="_blank">
          <h1 className="component-emoji project-title">
            National Institute of Technology Raipur, INDIA
          </h1>
        </a>
        <p className="content">
          <li>
            Bachelor of Technology in Electronics & Comunication Engineering
            (CPI: 9.02/10.00)
          </li>
        </p>
        <a href="https://www.shivom.org/" target="_blank">
          <h1 className="component-emoji project-title">
            Shivom Vidyapeeth Higher Secondary School, Raipur
          </h1>
        </a>
        <p className="content">
          <li>
            Higher Secondary Certification (12th). Passed with aggregate of
            92.20%
          </li>
          <li>
            High School Certification (10th). Passed with aggregate of 96.67%
          </li>
        </p>
      </div>
    </div>
  );
};

export default Education;