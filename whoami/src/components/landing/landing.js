import React, { Component } from 'react';
import './../App.css';
import './landing.css';

const halfmoon = require("halfmoon");

class Landing extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Parthiv Menon";
        halfmoon.onDOMContentLoaded();
    }

    render() {
        return (
            <div className="color-wrapper">
                <div className="container-fluid">
                    <div className="row name mt-20">
                        <div className="center">
                            <div className="row justify-content-start" id="iam">
                                <p>I am</p>
                            </div>
                            <h2>
                                Parthiv Menon,
                            </h2>
                            <div className="row human justify-content-end">
                                <p>professionally human</p>
                            </div>
                        </div> 
                    </div>
                    <div className="row more-down justify-content-center">
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;