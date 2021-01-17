import React, { Component } from 'react';
import Landing from './landing/landing';
import About from './about/about';

require("halfmoon/css/halfmoon-variables.min.css");
const halfmoon = require("halfmoon");

class App extends Component {

    componentDidMount() {
      halfmoon.onDOMContentLoaded();
    }

    render() {
        return (
            <div className="App page-wrapper">
              <div className="content-wrapper">
                <nav className="navbar justify-content-center" style={{backgroundColor:"#3C2097", border:0}}>
                  <ul class="navbar-nav d-none d-md-flex pt-10"> 
                      <li class="nav-item">
                        <a href="#about" class="nav-link my-link pl-15" style={{color:"#F2F0F9"}}>About</a>
                      </li>
                      <li class="nav-item">
                        <a href="/#" class="nav-link my-link" style={{color:"#F2F0F9"}}>What I Do</a>
                      </li>
                      <li class="nav-item">
                        <a href="/#" class="nav-link my-link pr-15" style={{color:"#F2F0F9"}}>Say Hello</a>
                      </li>
                  </ul>
                </nav>
                <div>
                  <Landing />
                  <About />
                </div>
              </div>
            </div>
          );
    }
}

export default App;
