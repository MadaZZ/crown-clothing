import React from 'react'
import './menu-items.styles.scss'
import { withRouter } from 'react-router-dom'


const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='bgImage' style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
