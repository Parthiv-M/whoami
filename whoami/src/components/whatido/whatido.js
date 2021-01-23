import React, { Component } from 'react';
import arrayShuffle from 'array-shuffle';
import { ExternalLink } from 'react-feather';
import Pulse from 'react-reveal/Pulse';

class WhatIDo extends Component {

    state = {
        isLoading: true,
        data: []
    };

    getData() {
        fetch('http://localhost:3001/api/whatido/posts')
            .then(res => res.json())
            .then( data => {
                    console.log(data);
                    const shuffled = arrayShuffle(data); 
                    this.setState({
                        data: shuffled,
                        isLoading: false
                    });
                }
            )
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const {data} = this.state;  
        return (
            <div className="white-wrapper" id="whatido">
                <div className="ml-0 content ">
                <div className="d-flex flex-md-row flex-wrap flex-column justify-content-md-around align-items-center">
                    <React.Fragment>
                        {
                        data.map((post) => {
                            const {name, domain, link, imageUrl, description, tags} = post;
                            return (
                                <Pulse>
                                <div key={name} className="card w-350 h-450 p-0 border-0 bg-transparent overflow-hidden" id="card">
                                    <img src={imageUrl} alt="my" className="w-350 h-200 img-fluid rounded-top"/>
                                    <div className="px-card">
                                        <h3 className="content-title text-center font-weight-bold text-md-left mt-10" id="title" style={{color: "#3c2097", letterSpacing: "2px"}}>
                                            {name}
                                        </h3>
                                        <p className="h-100 text-justify text-muted">
                                            {description} 
                                        </p>
                                    </div>
                                    <div className="text-center rounded-bottom d-flex flex-wrap justify-content-center">
                                        <React.Fragment>
                                            {
                                                tags.map(tag => {
                                                    return (
                                                        <p className="badge mx-5 p-5 tags bg-transparent tags" style={{color: "#A197C4"}}>
                                                            {tag}
                                                        </p>
                                                    );
                                                })
                                            }
                                        </React.Fragment>
                                        {
                                            link === "" 
                                                ? <ExternalLink color="grey" size={32} className="d-inline-block mt-md-15 mt-10 px-5 border-0 rounded-circle"/> 
                                                : <a href={link} target="_blank" rel="noreferrer">
                                                    <ExternalLink color="#F2F0F9" size={32} className="d-inline-block mt-md-15 mt-10 px-5 border-0 rounded-circle" style={{backgroundColor: "#3c2097"}}/>
                                                  </a> 
                                        }
                                    </div>
                                </div>
                                </Pulse>
                            );
                        })
                    }
                    </React.Fragment>
                </div>
                </div>
            </div>
        );
    }
}

export default WhatIDo;