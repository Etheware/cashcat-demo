import React from 'react'
import './Header.css';
import { Avatar } from '@material-ui/core';
import BoltIcon from '@mui/icons-material/Bolt';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DiamondIcon from '@mui/icons-material/Diamond';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Header( {src} ) {
    return (
        <div className='header'>
            <div className='header__left'>
                {/* Logo */}
                <img 
                    className='header__leftLogo'
                    src="https://i.ibb.co/HnSpSCw/Web-Logo.png"
                    alt='CashCat Logo'/>
                <h2 className='active'>Livestreams</h2>
                <h2>Explore</h2>
                <div className='header__verticalLine'></div>
                <h2>Wallet</h2>
                <MoreVertIcon />        
            </div>
            

            <div className='header__center'>
                {/* Search */}
                <input type="text" placeholder='Search' />
                <div className='header__centerLogoContainer'>
                    <SearchIcon />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__rightContainer'>
                    {/* Icons */}
                    <VideocamIcon />
                    
                    <div className='header__rightBits'>
                        <DiamondIcon />
                        <h4>Log In</h4>
                    </div>
                    <div className='header__rightButton'>
                        <VpnLockIcon />
                        <h4>Sign Up</h4>
                    </div>
                    <Avatar 
                        alt=''
                        src={src='https://yt3.ggpht.com/0P0lCcGXEU_lbl91j2R8n5POp_rO1JusSYEQ-cVWAC7hDBjttIpqqlLd5QQagKKAw7-F8GL7830=s88-c-k-c0x00ffffff-no-rj-mo'}/>

                </div> 
                
            </div>
        </div>
    )
}

export default Header
