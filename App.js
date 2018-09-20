import React, {Component} from 'react';
import './App.css';
import DrumPad from './DrumPad/DrumPad';

class App extends Component {

  render() {
    return (<div className="App">
      <div id="drum-machine">
        <div id="drum-pad-area" className="container">
          <DrumPad/>
        </div>
        <div id="display">
          <img id="display-img" className="img-fluid" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/drum-machine-display.jpg" alt="display for drum machine"/>
        </div>
      </div>
    </div>);
  }
}

export default App;
