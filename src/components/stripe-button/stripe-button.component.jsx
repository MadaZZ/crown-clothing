import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import keys from '../../dataFiles/keyStore';
import AppStrings from '../..//general.strings';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    
    const initiatePayment = (token) => {
        console.log(token);
        alert('Payment Complete');
    }

    return (
        <StripeCheckout
            label={AppStrings.PAY_NOW}
            name={AppStrings.ORG_NAME}
            shippingAddress
            billingAddress
            img='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel={AppStrings.PAY_NOW}
            token={initiatePayment}
            stripeKey={keys.STRIPE_PUBLISHABLE}
        />
    )
}

export default StripeCheckoutButton;