import React, { Component } from 'react';
import Landing from './landing/landing';
import About from './about/about';

class App extends Component {
    render() {
        return (
            <div className="App" >
              <Landing />
              <About />
            </div>
          );
    }
}

export default App;
