import React from 'react';

const About = () => {
  return (
    <div className="ui grid">
      <div className="one wide column"></div>
      <div className="five wide column">
        <div className="title">ABOUT ME</div>
        <div className="title emoji component-emoji project-title title-emoji">
          [^.^]
        </div>
      </div>
      <div className="ten wide column">
        <div>
          <p className="content">
            I'm a final year Computer Science undergraduate majoring in Software
            Engineering in Universiti Malaya. Born and raised in 🐱, Sarawak, I
            consider myself as a workaholic who likes to explore new
            technologies and develop software solutions. In my free time, I
            pursue blog writing as a hobby.
          </p>
          <p className="content">
            I'm adept at using multiple programming languages with aim to
            produce clean and efficient code. Apart from IT and computer
            science, I'm also passionate in taking up leadership roles.
          </p>
          <p className="content">
            Currently busy with final year project (FYP) titled: Arduino-based
            Smart Watch for Early Warning System for Mental Health.
          </p>
        </div>
        <br />
        <div>
          <a href="https://drive.google.com/file/d/1Qgg31Irj8at148Is-3RdF17Jz_AErF6b/view?usp=drivesdk" target="_blank">
            <button className="resume-button">Get Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;