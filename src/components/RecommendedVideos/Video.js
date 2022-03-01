import React from 'react'
import './Video.css'
import ReactPlayer from 'react-player/lazy';
import { Avatar } from '@material-ui/core';

const Video = ({ title, channel, channelImage, views, timestamp, url, onProgress }) => {
    return (
        <div className='video'>
            <div className='wrapper'>
                <ReactPlayer
                    className='player'
                    url={url}
                    width='100%'
                    height='100%'
                    controls='True'
                    onProgress={onProgress}
                
                />  
            </div>
            <div className='videoCard__info'>
                <Avatar
                    className='videoCard__avatar'
                    alt={channel}
                    src={channelImage}
                />
                <div className='videoCard__text'>
                     <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>
                            {views} * {timestamp}
                        </p>
                </div>
            </div>
        </div>

    );
}
export default Video;
