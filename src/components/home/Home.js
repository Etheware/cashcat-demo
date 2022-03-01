import { ArrowBack, ArrowDownwardOutlined, ArrowForward, ArrowUpwardOutlined } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import ResponsivePlayer from '../responsivePlayer/responsivePlayer';
import './Home.css';

function Home() {
    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ( { played } ) => {
        console.log(played)
    }


    return (
        <div className='home__container'>    
            <div className='home'>
                <div className='streams'>
                    <ArrowUpwardOutlined fontSize="large"/>
                    <ResponsivePlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    onProgress={handleWatchComplete}/>
                    <ResponsivePlayer url='https://youtu.be/_Wr7cr6ldy0'
                    onProgress={handleWatchComplete}/>
                    <ResponsivePlayer url='https://youtu.be/5qap5aO4i9A'
                    onProgress={handleWatchComplete}/>
                    <ResponsivePlayer url='https://youtu.be/3rkJ3L5Ce80'
                    onProgress={handleWatchComplete}/>
                    <ResponsivePlayer url='https://youtu.be/SHZq0spfqjA'
                    onProgress={handleWatchComplete}/>
                    <ArrowDownwardOutlined fontSize="large"/>        
                </div>
                <div className={
                    watchComplete
                        ? "marker marker--is-complete"
                        : "marker marker--not--complete"
                    }
                /> 
            </div>
        </div>
    )
}

export default Home
