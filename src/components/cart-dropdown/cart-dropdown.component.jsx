import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.style.scss';
import AppStrings from "../../general.strings";

const CartDropdown = ({ cartItems, history }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length 
                    ? (cartItems.map(cartItem => <CartItem id={cartItem.id} item={cartItem} />)) 
                    : (<span className='empty-message'> {AppStrings.CART_EMPTY_MESSAGE} </span>)
                }
            </div>
            <CustomButton onClick={() => history.push('/checkout')}> {AppStrings.GO_TO_CHECKOUT} </CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))