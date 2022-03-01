import React from 'react'
import Profile from '../profile/Profile';
import './Body.css';

const Body = () => {
    return (
        <div className='body'>
            <div className='body__left'>
                <Profile />
            </div>
            <div className='body__rightPlaceHolder'></div>
        </div>
    )
}

export default Body
