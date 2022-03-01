import React from 'react';
import ReactPlayer from 'react-player/lazy';

const ResponsivePlayer = ( { url, onProgress } ) => {
    return (
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={url}
          width='100%'
          height='100%'
          controls='True'
          onProgress={onProgress}
        />
      </div>
    )
}

export default ResponsivePlayer
