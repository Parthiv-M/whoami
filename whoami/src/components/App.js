import React, { Component } from 'react';
import Landing from './landing/landing';
import About from './about/about';
import  ParticlesBackground  from './particles';
import WhatIDo from './whatido/whatido';
import Contact from './contact/contact';

require("halfmoon/css/halfmoon-variables.min.css");
const halfmoon = require("halfmoon");

class App extends Component {

    componentDidMount() {
      document.title = "Parthiv Menon"
      halfmoon.onDOMContentLoaded();
    }

    render() {
        return (
            <div className="App page-wrapper">
              <div className="content-wrapper" style={{overflowX: 'hidden'}}>
                <div style={{position:"absolute", top: 0, left: 0, overflowX: "hidden"}}>
                  <nav className="navbar justify-content-center border-0" style={{backgroundColor:"transparent"}}>
                    <ul class="navbar-nav d-none d-md-flex pt-10"> 
                        <li class="nav-item">
                          <a href="#about" class="nav-link my-link pl-15" style={{color:"#F2F0F9"}}>About Me</a>
                        </li>
                        <li class="nav-item">
                          <a href="#whatido" class="nav-link my-link" style={{color:"#F2F0F9"}}>What I Do</a>
                        </li>
                        <li class="nav-item">
                          <a href="#contact" class="nav-link my-link pr-15" style={{color:"#F2F0F9"}}>Say Hello</a>
                        </li>
                    </ul>
                  </nav>                  
                  <div>
                    <Landing />
                    <About />
                    <WhatIDo/>
                    <Contact/>
                  </div>
                </div>
                <ParticlesBackground/>
              </div>
            </div>
          );
    }
}

export default App;
