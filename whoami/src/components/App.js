import React, { Component } from 'react';
import Landing from './landing/landing';
import About from './about/about';

require("halfmoon/css/halfmoon-variables.min.css");

class App extends Component {
    render() {
        return (
            <div className="App">
              <Landing />
              <About />
            </div>
          );
    }
}

export default App;
