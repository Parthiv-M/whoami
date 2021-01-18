import React, { Component } from 'react';
import './../App.css';
import './about.css';

const halfmoon = require("halfmoon");

class About extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        halfmoon.onDOMContentLoaded();
    }

    render() {
        return (
            <div className="content">
                <div className="content-title font-weight-bold" style={{color:"#3c2097"}}>
                    About Me
                </div>
                <div className="card p-20 shadow border-0" id="about-card">
                    <h2 className="card-title" style={{color:"#3c2097f1"}}>
                      Who am I ?
                    </h2>
                    <p className="text-justify text-muted">
                      The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the 
                      weatherman. It was going to rain, so he better get outside and prepare. Sleeping in his car was never the plan but sometimes things 
                      don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't 
                      actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the 
                      key into the ignition, turned it and the engine didn't make a sound.
                    </p>
                </div>
                <div className="card p-20 shadow border-0" id="about-card">
                    <h2 className="card-title" style={{color:"#3c2097f1"}}>
                      Academics
                    </h2>
                    <p className="text-justify text-muted">
                      The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the 
                      weatherman. It was going to rain, so he better get outside and prepare. Sleeping in his car was never the plan but sometimes things 
                      don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't 
                      actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the 
                      key into the ignition, turned it and the engine didn't make a sound.
                    </p>
                </div>
                <div className="card p-20 shadow border-0" id="about-card">
                    <h2 className="card-title" style={{color:"#3c2097f1"}}>
                      What else?
                    </h2>
                    <p className="text-justify text-muted">
                      The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the 
                      weatherman. It was going to rain, so he better get outside and prepare. Sleeping in his car was never the plan but sometimes things 
                      don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't 
                      actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the 
                      key into the ignition, turned it and the engine didn't make a sound.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;