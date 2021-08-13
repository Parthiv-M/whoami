import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import { ToggleLeft } from 'react-feather';
import { Instagram, GitHub, Linkedin } from 'react-feather';
import ConfettiGenerator from 'confetti-js';

const Landing = () => {

    useEffect(() => {
        const confettiSettings = {
            "target": "canvas",
            "max": "80",
            "size": "1",
            "animate": true,
            "props": [ "circle", "square", "triangle", "line"], 
            "colors": [ [60,32,151],[169,150,233],[25,13,63],[8,4,21] ], 
            "clock": "25",
            "rotate": true,
            "width":"", "height":"", 
            "start_from_edge": true, 
            "respawn":false
        };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        return () => confetti.clear();
    }, []);

    return (
        <div className='h-full d-flex flex-column justify-content-center align-items-center back-image'>
            <Helmet>
                <title>Parthiv Menon</title>
                <meta name='description' content='Parthiv Menon—impossible is just an opinion' />
                <meta name='theme-color' content='#3c2097' />
                <meta
                  name='keywords'
                  content='parthiv, parthiv menon, manipal institute of technology, webdev, student, kerala, kunnamkulam, menon'
                />
                <meta name='url' content='https://parthivmenon.com' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="https://parthivmenon.com" />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content="Parthiv Menon"
                />
                <meta
                  property="og:description"
                  content="Parthiv Menon—impossible is just an opinion"
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='https://parthivmenon.com' />
                <meta
                  property="og:site_name"
                  content="Parthiv Menon"
                />
                <meta
                  name='twitter:title'
                  content='Parthiv Menon—impossible is just an opinion'
                />
                <meta
                  name="twitter:description"
                  content="Parthiv Menon—impossible is just an opinion"
                />
            </Helmet>
            <div className='h-full w-md-half w-full d-flex flex-column justify-content-center align-items-md-start align-items-center'>
                <div className='d-flex flex-md-row align-items-center flex-column-reverse'>
                    <h1 className='font-weight-bold' style={{ borderBottom: '2px solid #3c2097' }}>
                        Parthiv Menon
                    </h1>
                    <p className='text-muted d-none' id='flying'>Flying a bit higher</p>
                </div>
                <div className='d-flex align-items-center justify-content-md-start justify-content-center' style={{ marginTop: '-20px' }}>
                    <h6 className='text-muted font-weight-lighter'>I LOVE LIGHT MODE</h6>
                    <span data-toggle='tooltip' data-title='Oops, no dark mode toggle!' data-placement='bottom'><ToggleLeft size={40} className='pb-5 mx-10' color='#3c2097'/></span>
                </div>
            </div>
            <div className='h-100 w-full d-flex align-items-center pr-md-20 justify-content-md-end justify-content-center' id='social-bar' style={{ zIndex: '100' }}>
                <a href='https://www.instagram.com/_.parthiv_/' target='_blank' rel='noreferrer'><Instagram size={30} className='mx-15 social-link'/></a>
                <a href='https://github.com/Parthiv-M' target='_blank' rel='noreferrer'><GitHub size={30} className='mx-15 social-link'/></a>
                <a href='https://www.linkedin.com/in/parthivmenon/' target='_blank' rel='noreferrer'><Linkedin size={30} className='mx-15 social-link'/></a>
            </div>
            <canvas className='position-absolute w-full h-full' id='canvas' style={{ top: 0 }}></canvas>
        </div>
    );
}

export default Landing;