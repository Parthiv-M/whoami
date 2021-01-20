import React, { Component } from 'react';
import arrayShuffle from 'array-shuffle';

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
            <div className="white-wrapper container-fluid">
                <div className="content">
                <div className="d-flex flex-md-row flex-wrap flex-column justify-content-md-around">
                    <React.Fragment>
                        {
                        data.map((post, index) => {
                            const {name, domain, link, imageUrl, description, tags} = post;
                            return (
                                <div key={name} className="w-350 h-450 card p-0 border-0 bg-transparent overflow-hidden shadow-sm" id="card">
                                    <img src={imageUrl} alt="my" className="w-350 h-200 img-fluid rounded-top"/>
                                    <div className="px-card">
                                        <h3 className="content-title text-center font-weight-bold text-md-left mt-10" style={{color: "#3c2097", letterSpacing: "2px"}}>
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
                                                        <p className="badge mx-5 p-5 tags bg-transparent" style={{color: "#A197C4"}}>
                                                            {tag}
                                                        </p>
                                                    );
                                                })
                                            }
                                        </React.Fragment>
                                    </div>
                                </div>
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