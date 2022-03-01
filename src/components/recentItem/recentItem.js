import React from 'react'

const recentItem = ({ url, title }) => {
    return (
        <div className='item'>
            <iframe
                width="400"
                height="235"
                src={url}
                frameBorder="0"
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                allowFullScreen
            />
            <div className='item__details'>
                <img src="https://i.ibb.co/6PdxPLT/banner.png" />
                <div className='item__detailsText'>
                    <h4>{title}</h4>
                    <p>Crystal Badu</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    )
}

export default recentItem
