import React from 'react';
import '../components/right.css';
import Group from '../assets/bg.png';
import lock from '../assets/lock.png';

function Right(){

    return(
        <div className='right'>
            <img src={Group} alt="background-image" className='right-bcg' />
            <h1 className='right-head'>Pocket Notes</h1>
            <div className='right-para'>
                <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            <div className='right-bottom-box'>
                <img src={lock} alt="lock" className='right-lock'/>
                <p>end-to-end encrypted</p>
            </div>
        </div>
    )
}

export default Right;

