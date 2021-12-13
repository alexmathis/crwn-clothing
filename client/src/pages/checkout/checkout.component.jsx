import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../compnents/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../compnents/stripe-button/stripe-button.componenet';
import {
        selectCartItems, 
        selectCartTotal
    } from '../../redux/cart/cart.selectors'


import './checkout.styles.scss';

const CheckoutPage = () => {

    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    
    return (
        <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem ket={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
            <div className='test-warning'>
                *Please use the following test credit card fro payments*
                <br />
                4242424242424242
                CSV: Any 3 digit Exp: Any future date
            </div>
            <StripeCheckoutButton price={total} />
        </div>
   </div>
   )
}

export default CheckoutPage;