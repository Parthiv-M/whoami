import React from 'react';
import { Instagram, GitHub, Linkedin, Dribbble, Mail } from 'react-feather';
import Pulse from 'react-reveal/Pulse';

const Contact = () => {
    return (
        <div className='h-150 w-full d-flex flex-column justify-content-center align-items-center grad-back' id='reach-out'>
            <Pulse>
                <p className='text-muted pt-5 font-weight-lighter'>
                    - REACH OUT TO ME -
                </p>
            </Pulse>
            <div className='d-flex'>
                <a href='mailto:parthivmenon01@gmail.com' target='_blank' rel='noreferrer'><Mail size={30} className='mx-10 social-link'/></a>
                <a href='https://www.instagram.com/_.parthiv_/' target='_blank' rel='noreferrer'><Instagram size={30} className='mx-10 social-link'/></a>
                <a href='https://github.com/Parthiv-M' target='_blank' rel='noreferrer'><GitHub size={30} className='mx-10 social-link'/></a>
                <a href='https://www.linkedin.com/in/parthivmenon/' target='_blank' rel='noreferrer'><Linkedin size={30} className='mx-10 social-link'/></a>
                <a href='https://dribbble.com/theProton' target='_blank' rel='noreferrer'><Dribbble size={30} className='mx-10 social-link'/></a>
            </div>
        </div>
    );
}

export default Contact;