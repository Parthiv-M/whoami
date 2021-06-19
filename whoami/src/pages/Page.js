import React from 'react';
import About from './../components/About';
import Contact from './../components/Contact';
import Landing from './../components/Landing';
import WhatIDo from './../components/WhatIDo';

const Page = () => {
    return (
        <div className='page-wrapper'>
            <div className='content-wrapper'>
                <Landing />
                <About />
                <WhatIDo />
                <Contact />
            </div>
        </div>
    );
}

export default Page;