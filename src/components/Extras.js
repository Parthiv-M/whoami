import React from 'react';

const Extras = () => {
    return (
        <div className='dark-love px-20'>
            <div className="w-250 mx-auto">
            <h5 className='m-auto mb-20' style={{ fontFamily: 'Caveat, cursive', width: 'fit-content', color:'#F2F0F9', borderBottom: '2px solid #F2F0F9' }}>
                OF PENS, PENCILS, AND MY LAPTOP
            </h5>
            </div>
            <div className='px-20 row h-half justify-content-center m-auto align-items-center py-20' style={{ width: '70%' }}>
                <div className='h-100 col-md-3 col-sm-5 d-flex flex-column align-items-center justify-content-center mx-md-10 my-10 p-10 text-center' id='extra-bottom'>
                    <p><a href='https://themitpost.com/author/parthiv/' target='_blank' rel='noreferrer'>Articles for The Post</a></p>   
                </div>
                <div className='h-100 col-md-3 col-sm-5 d-flex align-items-center justify-content-center mx-md-10 my-10 p-10 text-center' id='extra-bottom'>
                    <p><a href='https://wearemist.in/profile?author=Parthiv%20Menon' target='_blank' rel='noreferrer'>Writeups for MIST</a></p>   
                </div>
            </div>
        </div>
    );
}

export default Extras;