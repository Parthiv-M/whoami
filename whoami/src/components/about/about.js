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
            <div className="white-wrapper">
                About
            </div>
        );
    }
}

export default About;