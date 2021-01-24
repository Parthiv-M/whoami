import React, { Component } from 'react';
import { Instagram, AtSign, GitHub, Linkedin } from 'react-feather';
import Fade from 'react-reveal';

class Contact extends Component {

    state = {
        data: [],
        showText: false,
        index: 0,
    };

    getData() {
        fetch('/api/whatido/contact')
            .then(res => res.json())
            .then( data => {
                console.log(data);
                this.setState({
                    data: data
                });
            }).catch((e) => console.log(e));
    }

    componentDidMount() {
        this.getData();
    }

    onHover(index) {
        this.setState({
            showText: true,
            index: index,
        });
    }

    noHover(index) {
        this.setState({
            showText: false,
            index: index,
        });
    }

    getIcon(color, index) {
        const size = 45;
        const iconList = [ 
            <GitHub size={size} color={color}/>, 
            // <AtSign size={size} color={color}/>, 
            <Instagram size={size} color={color}/>, 
            <Linkedin size={size} color={color}/> 
        ];
        return iconList[index];
    }

    getLink(card, index) {
        return card.link;
    }

    render() {
        const { data } = this.state;
        return (
            <div className="content container-fluid m-0" style={{width:"100vw"}} id="contact">
                <div className="d-flex flex-md-row flex-wrap bg-very-dark flex-column justify-content-md-center align-items-center">
                    <React.Fragment>
                        {
                            data.map((card, index) => {
                                return (
                                    <a className="d-block" style={{textDecoration:"none"}} href={this.getLink(card, index)} target="_blank" rel="noreferrer">
                                    <div class="h-150 w-150 card bg-very-dark border-0 overflow-hidden text-center" style={{cursor:"pointer"}} onMouseEnter={() => this.onHover(index)} onMouseLeave={() => this.noHover(index)}>                      
                                        <span className="align-middle logo">
                                        <React.Fragment>
                                            {
                                                this.state.showText && index === this.state.index ? this.getIcon("#3c2097", index) : this.getIcon("white", index)
                                            }
                                            </React.Fragment>
                                        </span>
                                        <React.Fragment>
                                            {
                                                this.state.showText && index === this.state.index 
                                                    ? <Fade bottom opposite><p className="font-weight-bold" style={{borderRadius:"10px", color:"#3c2097"}}>{card.contactType}</p></Fade> 
                                                    : <p className="invisible">{card.contactType}</p>
                                            }
                                        </React.Fragment>
                                    </div>
                                    </a>
                                );
                            })
                        }
                    </React.Fragment>
                </div>
            </div>
        );
    }
}

export default Contact;