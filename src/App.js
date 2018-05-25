import React, { Component } from 'react';
import Position from './Position';
import Informations from './Informations';
import Experiences from './Experiences';
import Education from './Education';
import Skills from './Skills';
import Hobbies from './Hobbies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Position />
        <Informations />
        <Experiences />
        <Education />
        <Skills />
        <Hobbies />
      </div>
    );
  }
}

export default App;
