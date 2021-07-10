import React from 'react';

const Skills = () => {
  return (
    <div className="ui grid">
      <div className="one wide column"></div>
      <div className="five wide column">
        <div className="title">SKILLS</div>
        <div className="title emoji component-emoji title-emoji project-title">
          [^o^]
        </div>
      </div>
      <div className="ten wide column">
        <h1 className="component-emoji project-title">Programming Language</h1>
        <p className="content">C++, JavaScript, HTML, CSS</p>
        <h1 className="component-emoji project-title">Computer Fundamentals</h1>
        <p className="content">
          Data Structures & Algorithms, Object Oriented Programming (OOPs),
          Database Management System (DBMS), Computer Networking, Computer
          System Architecture, Operating System (OS)
        </p>
        <h1 className="component-emoji project-title">
          Libraries & Frameworks
        </h1>
        <p className="content">Reactjs, Nodejs, Expressjs, Bootstrap </p>
        <h1 className="component-emoji project-title">Databases</h1>
        <p className="content">MongoDB, SQL</p>
        <h1 className="component-emoji project-title">DevOps Tools</h1>
        <p className="content">Git, Heroku</p>
      </div>
    </div>
  );
};

export default Skills;