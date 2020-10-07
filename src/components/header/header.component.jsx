import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.style.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options-container'>
                <Link className='logo-container' to='/shop'>
                    SHOP
                </Link>
                <Link className='logo-container' to='/contact'>
                    CONTACT
                </Link>
                <Link className='logo-container' to='/signin'>
                    SIGN IN
                </Link>
            </div>
        </div>
    )
}


export default Header