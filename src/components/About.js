import React from 'react';
import '../App.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import bookIcon from '../assets/BookIcon.png';
import HoopIcon from '../assets/HoopIcon.png';
import PaletteIcon from '../assets/PaletteIcon.png';
import ChessIcon from '../assets/ChessIcon.png';
import Fade from 'react-reveal/Fade';

const About = () =>  {

    const skillsAndMore = [ 
        {
            name: 'Java',
            percent: 72,
            info: 'Having a background in C++ from my school days helped me get the hang of Java better when I first learnt it in college. It is what I now prefer to write code in, whenever required.'
        },
        {
            name: 'HTML',
            percent: 75,
            info: 'HTML became a constant companion as I delved into web-development and I believe it still keeps throwing newer surprises every time I begin on a new project.'
        },
        {
            name: 'CSS',
            percent: 77,
            info: 'Along with HTML, as my grasp over CSS grew, it helped me create better looking websites over time. It is fun discovering newer styles and layouts every time.'
        },
        {
            name: 'JS',
            percent: 74,
            info: 'JavaScript is quite a necessity as a web developer and helps in making websites interactive. It has helped me work with newer frameworks, libraries, and, of course, NodeJS.'
        },
        {
            name: 'NodeJS',
            percent: 75,
            info: 'NodeJS is what I prefer to set up backends for the websites I build. Not to mention that NodeJS is not a framework.'
        },
        {
            name: 'UI/UX',
            percent: 75,
            info: 'There is nothing I like more than clean, elegant interfaces that feel the same way it looks. I would choose Figma, over any software that I have worked with, to create my designs.'
        },
        {
            name: 'Python',
            percent: 65,
            info: 'My forays into Data Science and Machine Learning meant I learnt Python. I use Python only when explicitly required to do so, but have worked with various libraries and datasets.'
        },
        {
            name: 'Flutter',
            percent: 68,
            info: 'Starting out from native Android, I migrated to Flutter when the opportunity arose. Starting from just UIs to a fully functional app, I have had a bit of experience working with Flutter.'
        }
    ];

    return (
        <div id='about'>
            <div className='image-of-me position-absolute'></div>
            <div className='w-full m-auto about-padding' style={{ zIndex: 1000 }}>
                <div className="w-100 mr-md-auto">
                    <h2 className='card-title m-auto m-md-0 text-center mt-md-15 text-dark' style={{ width: 'fit-content', borderBottom: '2px solid black' }}>
                      <span style={{ fontFamily: 'Caveat, cursive' }}>WHO AM I</span> ?
                    </h2>
                </div>
                <div className='d-flex'>
                <p className='text-justify text-dark'>
                  I am Parthiv, a 19 year old living in Kerala. I had a childhood filled with a generous mix of at least four languages. Consequently, when I am not 
                  immersed in some book or the other, I queitly muse about the plethora of reasons that make people tick. I absolutely love traveling—the journey being more 
                  important than the destination. I'm passionate about anything that involves creativity and am enthusiastic about working on any project or idea that can get 
                  me thinking. A big fan of Sherlock Holmes, I am a keen observer and a fast learner, willing to pick up anything that interests me, which, more often than not, 
                  happens to be everything.  
                </p>
                </div>
                <div className="w-200 mr-md-auto">
                    <h2 className='card-title m-auto m-md-0 mt-md-10 text-dark text-center' style={{ width: 'fit-content', borderBottom: '2px solid black' }}>
                      <span style={{ fontFamily: 'Caveat, cursive' }}>CODE, SKILLS, AND MORE</span> 
                    </h2>
                </div>
                <div className='d-flex h-full flex-column flex-md-row flex-wrap m-0 mt-md-20 align-items-center justify-content-start'>
                    {
                        skillsAndMore.map((more, index) => {
                            return (
                                <div key={index} className='h-md-full col-md-3 d-flex align-items-center justify-content-center'>
                                    <Fade>
                                    <div style={{ height: '6rem', width: '6rem' }}>
                                            <CircularProgressbar className='skill-coin' value={more.percent} text={more.name} styles={buildStyles({
                                                  textColor: 'black',
                                                  pathColor: 'black',
                                                  trailColor: 'transparent'
                                                })}
                                            />
                                    </div>
                                    <p className='w-three-quarter font-size-12 mx-10'>
                                        {more.info} 
                                    </p>
                                    </Fade>
                                </div>
                            );
                        })
                    }    
                </div>
                <div className='d-flex flex-md-row flex-column justify-content-center align-items-center mt-20'>
                    <div className='col-md-2 col-sm-6 m-15 h-md-150 h-150 border border-5 rounded d-flex flex-column justify-content-center align-items-center and-others'>
                        <img className='h-50 mt-5 m-0' src={bookIcon} alt='Book Icon'/>
                        <p className='text-center text-dark'>
                            <span>Books</span>
                            <div className='progress w-100'>
                                <div className='progress-bar progress-bar-animated' style={{ width: '90%', backgroundColor: 'black' }} role='progressbar' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </p>
                    </div>
                    <div className='col-md-2 col-sm-6 m-15 h-md-150 h-150 border border-5 rounded d-flex flex-column justify-content-center align-items-center and-others'>
                        <img className='h-50 mt-5 m-0' src={PaletteIcon} alt='Palette Icon'/>
                        <p className='text-center text-dark'>
                            <span>Art</span>
                            <div className='progress w-100'>
                                <div className='progress-bar progress-bar-animated' style={{ width: '90%', backgroundColor: 'black' }} role='progressbar' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </p>
                    </div>
                    <div className='col-md-2 col-sm-6 m-15 h-md-150 h-150 border border-5 rounded d-flex flex-column justify-content-center align-items-center and-others'>
                        <img className='h-50 mt-5 m-0' src={HoopIcon} alt='Basketball Icon'/>
                        <p className='text-center text-dark'>
                            <span>Basketball</span>
                            <div className='progress w-100'>
                                <div className='progress-bar progress-bar-animated' style={{ width: '85%', backgroundColor: 'black' }} role='progressbar' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </p>
                    </div>
                    <div className='col-md-2 col-sm-6 m-15 h-md-150 h-150 border border-5 rounded d-flex flex-column justify-content-center align-items-center and-others'>
                        <img className='h-50 mt-5 m-0' src={ChessIcon} alt='Chess Icon'/>
                        <p className='text-center text-dark'>
                            <span>Chess</span>
                            <div className='progress w-100'>
                                <div className='progress-bar progress-bar-animated' style={{ width: '80%', backgroundColor: 'black' }} role='progressbar' aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;