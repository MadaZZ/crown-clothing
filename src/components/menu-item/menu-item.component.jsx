import React from 'react'
import './menu-items.styles.scss'

const MenuItem = ({ title, imgUrl }) => {
    console.log(imgUrl);
    return (
        <div
            style={{
                backgroundImage: `url(${imgUrl})`
            }}
            className='menu-item'>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem