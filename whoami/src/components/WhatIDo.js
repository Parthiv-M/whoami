import React from 'react';
import { ToggleRight } from 'react-feather';
import {Button} from 'reacthalfmoon';
import Extras from './Extras';
import eCell from '../assets/eCellImage.png';
import news from '../assets/newsAPI.png';
import MIST from '../assets/MISTLogo.png';
import startup from '../assets/startupImage.png';
import research from '../assets/researchImage.png';

const WhatIDo = () => {

    const whatIDoData = [
        {
            title: 'Events Portal',
            imgUrl: MIST,
            text: 'An events portal for a club that I am a part of—Manipal Information Security Team',
            tags: ['ReactJS', 'ReactBootstrap'],
            checkUrl: 'https://events.wearemist.in'
        },
        {
            title: 'Research Project',
            imgUrl: research,
            text: 'A research project based on stock prices and their correlation to real world news, thus forming a stock portfolio',
            tags: ['Python', 'BeautifulSoup'],
            checkUrl: ''
        },
        {
            title: 'ChillSpace Hourglass',
            imgUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/a08967100727043.Y3JvcCw0NzA0LDM2ODAsMTY1Myww.png',
            text: 'Frontend development for the Chillspace customer relationship portal',
            tags: ['HTML', 'CSS'],
            checkUrl: 'https://hourglass.chillspacecafe.com/login'
        },
        {
            title: 'News Aggregator',
            imgUrl: news,
            text: 'A simple news aggregator website to display the current headlines from around the world, taking advantage of NewsAPI',
            tags: ['HTML', 'CSS', 'JS'],
            checkUrl: 'http://ourheadlines.herokuapp.com/'
        },
        {
            title: 'The Yozznet Project',
            imgUrl: startup,
            text: 'A student run start-up aimed at easing college life with an app based platform to bring together students in the campus',
            tags: ['Flutter', 'Firebase'],
            checkUrl: ''
        },
        {
            title: 'Entrepreneurship Cell',
            imgUrl: eCell,
            text: 'A website for the E-Cell of MIT, a non-profit organisation for promoting entrepreneurship, run entirely by students',
            tags: ['HTML', 'CSS', 'JS'],
            checkUrl: ''
        },
    ];

    return (
        <div className='dark-love curved-shadow my-shadow back-image-dark' id='whatido'>
            <div className='d-flex justify-content-md-end justify-content-center align-items-center w-full h-100 text-white pr-md-20'>
                <p className='font-size-12 text-right mr-10'>
                    BUT <em>SOMETIMES</em>
                </p>
                <ToggleRight />
            </div>
            <div className='w-three-quarter m-auto'>
                <h5 className='m-auto mb-20 text-center' style={{ fontSize: '3rem', fontFamily: 'Caveat, cursive', width: 'fit-content', color:'#F2F0F9', borderBottom: '2px solid #F2F0F9' }}>
                    PROJECTS
                </h5>
                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    {whatIDoData.map((whatido) => {
                        return (
                            <div className='w-250 h-400 mw-full mx-5'>
                                <div className='p-0 text-white border border-0 pb-5 text-center'>
                                    <img loading='lazy' className='img-fluid rounded-top w-full h-150' alt={whatido.title} src={whatido.imgUrl}/>
                                    <div className='content mt-10'>
                                        <h2 className='font-size-18 text-center content-title m-0 text-left pl-10'>
                                            {whatido.title}
                                        </h2>
                                        <div className='d-flex flex-wrap h-50 justify-content-center tags-div'>
                                            <div className='px-5 pt-5 pt-md-0 m-5' style={{ width: 'fit-content', height: 30, border: '2px solid #3c2097', borderRadius: '10px' }}>
                                                <span className='font-size-12'>{whatido.tags[0]}</span>
                                            </div>
                                            <div className='px-5 pt-5 pt-md-0 m-5' style={{ width: 'fit-content', height: 30, border: '2px solid #3c2097', borderRadius: '10px' }}>
                                                <span className='font-size-12'>{whatido.tags[1]}</span>
                                            </div>
                                            {
                                            whatido.tags[2] 
                                            ? 
                                            <div className='px-5 pt-5 pt-md-0 m-5' style={{ width: 'fit-content', height: 30, border: '2px solid #3c2097', borderRadius: '10px' }}>
                                                <span className='font-size-12'>{whatido.tags[2]}</span>
                                            </div> 
                                            : <> </>
                                            }
                                        </div>
                                        <p className='text-white text-center font-size-12 m-0'>
                                            {whatido.text}
                                        </p>
                                    </div>
                                    {
                                    whatido.checkUrl 
                                    ? 
                                    <Button className='glass-button'>
                                        <span className='font-size-12'><a href={whatido.checkUrl} target='_blank' rel='noreferrer'>TAKE A PEEK</a></span>
                                    </Button> 
                                    : <> </>
                                    }
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Extras />
        </div>
    );
}

export default WhatIDo;