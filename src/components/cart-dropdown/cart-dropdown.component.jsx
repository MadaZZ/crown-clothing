import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';
import { AppStrings } from "../../general.strings";

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton> {AppStrings.GO_TO_CHECKOUT} </CustomButton>
        </div>
    )
}

export default CartDropdown