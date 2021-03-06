import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JwXF9DBOkR7O6YgI20IMQNQp8BGSzox2gmhqa62wAYGrvAXcBkNkyKJPvrTrXvAFGqADz5qtB6Ni4iSIu6c5Ji7004FhWICEl';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            console.log('payment successful. ')
        }).catch(error => {
            console.log('payment error:  ', JSON.parse(error));
            alert('There was an issue with your payment. Please make sure you use the provided credit card.')
        })
    }
    return (
        <StripeCheckout
        label= 'Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;