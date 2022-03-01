import { ArrowUpward } from '@mui/icons-material';
import React from 'react';
import './Profile.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaidIcon from '@mui/icons-material/Paid';
import recentItem from '../recentItem/recentItem';


const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__topLeft'>
                <img src="https://i.ibb.co/W3p7Mrr/Channel-Logo-1.png" alt=""/>

                <div className='profile__topLeftDetails'>
                    <h1>Crystal Badu</h1>
                    <h1>1.2 Million Followers</h1>
                </div>
                <div className='profile__topRight'>
                    <FavoriteIcon />
                    <PaidIcon />
                </div>
                <div className='profile__menu'>
                    <h2 className='active'>Home</h2>
                    <h2>About</h2>
                    <h2>Schedule</h2>
                    <h2>Feed</h2>
                    <h2><ArrowUpward/></h2>
                    <h2>Chat</h2>
                </div>
                <div className='profile__recent'>
                    <h2>Broadcasts</h2>
                    <div className='profile__recentItems'>
                        <recentItem 
                            url={'https://www.youtube.com/embed/rh'}
                            title={'How to Create a Lava-lamp'}
                        />
                    </div>
                    <div className='profile__recentItems'>
                        <recentItem 
                            url={'https://www.youtube.com/embed/rh'}
                            title={'How to Create a Lava-lamp'}
                        />
                    </div>
                    <div className='profile__recentItems'>
                        <recentItem 
                            url={'https://www.youtube.com/embed/rh'}
                            title={'How to Create a Lava-lamp'}
                        />
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Profile
