import React from 'react';

const Extras = () => {
    return (
        <div className='w-full'>
            <div className='bookspeak-hero bg-light h-350'>
                <div className='hero-overlay h-full'>
                    <div className='h-full w-md-half w-three-quarter mx-auto d-flex flex-column justify-content-center'>
                        <h2 className='font-weight-bold m-0 text-white'>
                            Book Speak
                        </h2>
                        <div className='w-md-400 m-0 text-white'>
                            <h6>
                                A platform where anyone can suggest their favourite quotes and have them on the website—self made, designed, developed, and maintained.
                            </h6>
                        </div>
                        <p className='m-0 p-5 w-150 text-center' style={{ color: '#3c2097', border: '1px solid #3c2097', borderRadius: '5px' }}>
                            Launching soon
                        </p>
                    </div>
                </div>
            </div>
            <div className='post-hero bg-dark h-350'>
                <div className='hero-overlay h-full'>
                    <div className='h-full w-md-half w-three-quarter mx-auto d-flex flex-column justify-content-center'>
                        <h2 className='font-weight-bold m-0 text-white'>
                            The MIT Post
                        </h2>
                        <div className='w-md-400 m-0 text-white'>
                            <h6>
                                From covering events, writing reports, and churning out creative content to writing professional articles, I have had a chance to do it all at The Post
                            </h6>
                        </div>
                        <a href='https://themitpost.com/author/parthiv/' target='_blank' rel='noreferrer'>
                            <button className='w-100 p-10 border-0 rounded glass-button' style={{ cursor: 'pointer' }}>
                                Read now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            {/* probably for later */}
            {/* <div className='cyber-hero bg-light h-350'>
                <div className='hero-overlay h-full'>
                    <div className='h-full w-md-half w-three-quarter mx-auto d-flex flex-column justify-content-center'>
                        <h2 className='font-weight-bold m-0 text-white'>
                            CyberManipal
                        </h2>
                        <div className='w-md-400 m-0 text-white'>
                            <h6>
                                Writing about tech happenings or cybersecurity breaches, attacks, and vulnerabilities around the world leant me a fair amount of idea into how things work in the cyber world.
                            </h6>
                        </div>
                        <a href='https://wearemist.in/news/author/@ParthivMenon' target='_blank' rel='noreferrer'>
                            <button className='w-100 p-10 border-0 rounded glass-button' style={{ cursor: 'pointer' }}>
                                Read now
                            </button>
                        </a>
                    </div>
                </div>
            </div> */}
            {/* probably for later */}
        </div>
    );
}

export default Extras;