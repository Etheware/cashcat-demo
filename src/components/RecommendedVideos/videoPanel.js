import React, {useState} from 'react';
import ResponsivePlayer from '../responsivePlayer/responsivePlayer';
import Video from './Video';
import './videoPanel.css';

function VideoPanel() {
    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ( { played } ) => {
        console.log(played)
    }
    return (
        <div className='video__panel'>
            <h2>Suggested</h2>
            <div className='video__panelVideos'>
                <Video
                    url="https://www.youtube.com/watch?v=yxw50C5Ua5c&ab_channel=InYourChill"
                    alt='Lofi Girl'
                    channel='Lofi Girl'
                    title='lofi hip hop radio - beats to relax/study to'
                    channelImage='https://yt3.ggpht.com/ytc/AKedOLRBxyT5Y9xKYWPmnShA_utGUvcJnxWaFmc0CtWTkg=s176-c-k-c0x00ffffff-no-rj'
                    views='24K watching'
                    timestamp='🔴 LIVE'
                />
                <Video
                    url='https://youtu.be/jipQpjUA_o8'
                    alt='Starboy TV'
                    channel='Starboy TV'
                    title='WizKid - Essence (Official Video) ft. Tems'
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLT3N424g7p5_clqgGDIEEYeczBEQAnAN0GX7Zrl=s176-c-k-c0x00ffffff-no-rj"
                    views='61M views'
                    timestamp='3 months ago'
                    
                />
                <Video
                    url='https://youtu.be/f31WPE2B8Cc'
                    alt='Made From Scratch'
                    channel='Made From Scratch'
                    title='Kwame Badu - Pull Up (Official)'
                    channelImage='https://yt3.ggpht.com/ytc/AKedOLQGIx9Zq8SXDIS7ihHyWaiDxQ_B82swXwDNtSkYHw=s176-c-k-c0x00ffffff-no-rj'
                    views='8.3K views'
                    timestamp='3 years ago'
                    
                />
                
                <Video
                    url='https://youtu.be/KErqMcZR0KA'
                    alt='Tekno'
                    channel='Tekno'
                    title='Tekno - Skeletun (Official Video)'
                    channelImage='https://yt3.ggpht.com/ytc/AKedOLT_ysA4wBDGTpahllCiEwDvroOjAhPruHTlYtTosQ=s176-c-k-c0x00ffffff-no-rj'
                    views='40M views'
                    timestamp='5 months ago'
                />
                
                <Video
                    url='https://youtu.be/jqI2L1g-Kck'
                    alt='Ideal Cars'
                    channel='Ideal Cars'
                    title='8 CHEAP CARS THAT MAKE YOU LOOK RICH!'
                    channelImage='https://yt3.ggpht.com/ytc/AKedOLQmhKBBwOBWeqwcJKazualSy9FcUJrYmAQbOkz-qw=s176-c-k-c0x00ffffff-no-rj'
                    views='5.7M views'
                    timestamp='8 hours ago'
                />
                <Video
                    url='https://youtu.be/YSy2lBZ1QrA'
                    alt='Starboy Tv'
                    channel='Starboy Tv'
                    title='WizKid - Ginger (Official Video) ft. Burna Boy'
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLT3N424g7p5_clqgGDIEEYeczBEQAnAN0GX7Zrl=s176-c-k-c0x00ffffff-no-rj"
                    views='29M views'
                    timestamp='1 year ago'
                />
                <Video
                    url='https://youtu.be/mhDJNfV7hjk'
                    alt='Gordon Ramsay'
                    channel='Gordon Ramsay'
                    title="Gordon's Quick and Simple Recipes | Gordon Ramsay"
                    channelImage='https://yt3.ggpht.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s176-c-k-c0x00ffffff-no-rj'
                    views='13.5M views'
                    timestamp='2 weeks ago'
                />
                <Video
                    url='https://youtu.be/-pbPR669A8M'
                    alt='Mr Benz'
                    channel='Mr Benz'
                    title='2022 MAYBACH S-CLASS FIRST DRIVE! S580 Luxurious Chaffeured Exterior Drive'
                    channelImage="https://www.youtube.com/channel/UCMtcfSnNybg3uhiljDCYQrA"
                    views='1.8M views'
                    timestamp='7 months ago'
                />
                <Video
                    url='https://youtu.be/JxS5E-kZc2s'
                    alt='NoCat NoLife2'
                    channel='NoCat NoLife2'
                    title='Funny Cats Compilation (Most Popular) Part 1'
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQ5jakrCH-_-_ONt1schyCpkZIjzqIYetuR2USESg=s176-c-k-c0x00ffffff-no-rj"
                    views='37.4M views'
                    timestamp='6 years ago'
                />
                {/* FRAME
                 <Video
                    url=
                    alt='L'
                    title='l'
                    channelImage=
                    views=''
                    timestamp=''
                /> */}
                <Video
                    url='https://youtu.be/gSeGmc39QBo'
                    alt='Primitive Tool'
                    channel='Primitive Tool'
                    title='15 Days Building Underground House with Decoration Underground Living Room'
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLSozxSMgdtn6536fJStB6TOz-d2v4GwmrLFP89NfA=s176-c-k-c0x00ffffff-no-rj"
                    views='8.5M views'
                    timestamp='4 days ago'
                />
                <Video
                    url='https://youtu.be/2O-9RmuiXog'
                    alt='Mr.Beast Gaming'
                    channel='Mr.Beast Gaming'
                    title='Would You Risk $5,000 for $100,000?'
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLS6xVo_f9RHSZnTZQbq5HvPm5OQhVYZCNz6RSTHjw=s176-c-k-c0x00ffffff-no-rj"
                    views='50M views'
                    timestamp='1 week ago'
                />
                <Video
                    url='https://youtu.be/aVAMeAyWfHo'
                    alt='Wifies'
                    channel='Wifies'
                    title="Can You Beat Minecraft's Hardest Escape Room?"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQsoQmy7lvWf4-3T79f6DvdLbqCFBguaJW7QhXrsw=s176-c-k-c0x00ffffff-no-rj"
                    views='468K'
                    timestamp='1 month ago'
                />
                <Video
                    url='https://youtu.be/JXmyDJpZhAw'
                    alt='Coldplay'
                    channel='Coldplay'
                    title='High Speed'
                    channelImage="https://yt3.ggpht.com/nCMHKdzJCDlE5uX_9HplknQdYgrKEs3yZMSQNx2yYs8gRA05NJAZQAe8TMNpna_EEIaKx6FR=s176-c-k-c0x00ffffff-no-rj"
                    views='2M views'
                    timestamp='6 years ago'
                />
                
                <Video
                    url='https://youtu.be/oEnbhSTwxxQ'
                    alt='Jhay Cortez'
                    channel='Jhay Cortez'
                    title='Jhay Cortez, Skrillex - En Mi Cuarto (Official Video)'
                    channelImage=""
                    views='20M'
                    timestamp='3 months ago'
                />
                <Video
                    url='https://youtu.be/kFz9afj8lu0'
                    alt='Marques Brownlee'
                    channel='Marques Brownlee'
                    title='Can You Actually Game in 8K? (RTX 3090 Gameplay!)'
                    channelImage="https://yt3.ggpht.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK0qOST7fiA=s176-c-k-c0x00ffffff-no-rj"
                    views='9.4M views'
                    timestamp='1 day ago'
                    
                />
            </div> 
        </div>
    )
}

export default VideoPanel;
