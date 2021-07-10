import React from 'react';
import Header from './Header';
import Logos from './Logos';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Coding from './Coding';
import End from './End';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="one wide column"></div>
          <div className="thirteen wide column">
            <div>
              <Header />
            </div>
            <div>
              <Logos />
            </div>
            <br />
            <br />
            <br />
            <div>
              <About />
            </div>
            <br />
            <br />
            <div>
              <Education />
            </div>
            <br />
            <br />
            <div>
              <Projects />
            </div>
            <br />
            <br />
            <div>
              <Skills />
            </div>
            <br />
            <br />
            <div>
              <Coding />
            </div>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <End />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;