import React from 'react';
import ekant from '../photos/ekant.jpeg';

const Header = () => {
  return (
    <div className="header">
      <div className="ui grid header-segment">
        <div className=" six wide column avatar">
          <div className="ui small image photo">
            <img src={ekant} alt="my photo" className="ekant" />
          </div>
        </div>
        <div className="ten wide column basic-intro">
          <p className="name">
            Ekant Chandrakar
            <span className="emoji">[^.^]/`</span>
          </p>
          <p className="intro">
            An Undergraduate Engineering Student Persuing Bachelor of Technology
            in Electronics & Communication Engineering at{" "}
            <span className="highlights">National Institute of Technology Raipur, INDIA.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;