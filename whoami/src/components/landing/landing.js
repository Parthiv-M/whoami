import React, { Component } from 'react';
import './../App.css';
import './landing.css';
class Landing extends Component {
    render() {
        return (
                <div className="container-fluid mt-20 pb-20">
                    <div className="row name mt-20">
                        <div className="center">
                            <div className="row justify-content-start" id="iam">
                                <p className="p-15 border-text">I am</p>
                            </div>
                            <h2 className="pl-15 pr-15">
                                Parthiv Menon,
                            </h2>
                            <div className="row human justify-content-end">
                                <p className="p-15 border-text">professionally human</p>
                            </div>
                        </div> 
                    </div>
                    <div className="row more-down justify-content-center">
                        <span></span>
                    </div>
                </div>
        );
    }
}

export default Landing;