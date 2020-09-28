import React from 'react'
import './menu-items.styles.scss'

const MenuItem = ({ title, imgUrl, size }) => {
    console.log(imgUrl);
    return (
        <div className={`${size} menu-item`}>
            <div className='bgImage' style={{
                backgroundImage: `url(${imgUrl})`
            }}></div>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem