import React from 'react';
import '../App.css';
import { ToggleLeft } from 'react-feather';
import { Instagram, GitHub, Linkedin } from 'react-feather';

const Landing = () => {

        return (
            <div className='h-full d-flex flex-column justify-content-center align-items-center back-image'>
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
                <div className='h-100 w-full align-items-center pr-md-20 d-flex justify-content-md-end justify-content-center '>
                    <a href='https://www.instagram.com/_.parthiv_/' target='_blank' rel='noreferrer'><Instagram size={30} className='mx-15 social-link'/></a>
                    <a href='https://github.com/Parthiv-M' target='_blank' rel='noreferrer'><GitHub size={30} className='mx-15 social-link'/></a>
                    <a href='https://www.linkedin.com/in/parthivmenon/' target='_blank' rel='noreferrer'><Linkedin size={30} className='mx-15 social-link'/></a>
                </div>
            </div>
        );
}

export default Landing;