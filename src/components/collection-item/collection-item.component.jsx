import React from 'react'

import './collection-item.style.scss'
import AppStrings from '../../general.strings';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ name, price, imageUrl }) => {
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            ></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted> {AppStrings.ADD_TO_CART} </CustomButton>
        </div>
    )
}

export default CollectionItem