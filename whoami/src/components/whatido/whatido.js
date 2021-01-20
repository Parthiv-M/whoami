import React, { Component } from 'react';

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
                    this.setState({
                        data: data,
                        isLoading: false
                    });
                }
            )
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getData();
    }

    Region = () => {

    }

    render() {
        const {data, isLoading} = this.state;  
        return (
            <div className="white-wrapper">
                <div className="content">
                <div className="d-flex flex-md-row flex-wrap flex-column justify-content-md-around">
                    <React.Fragment>
                        {
                        data.map((post, index) => {
                            const {name, domain, link, image} = post;
                            return (
                                <div key={name} className="w-350 h-400 card p-0 border-0 bg-transparent overflow-hidden">
                                    <img src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg" alt="my" className="img-fluid rounded-top"/>
                                    <div className="px-card">
                                        <h3 className="content-title text-center text-md-left mt-5">
                                            {name}
                                        </h3>
                                        <p className=" text-justify text-muted">
                                            {domain} 
                                        </p>
                                    </div>
                                    <div className="text-center bg-light rounded-bottom">
                                        <p className="badge mx-5 p-2">
                                                flutter
                                        </p>
                                        <p className="badge mx-5 p-2">
                                                dart
                                        </p>
                                        <p className="badge mx-5 p-2">
                                                firebase
                                        </p>
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