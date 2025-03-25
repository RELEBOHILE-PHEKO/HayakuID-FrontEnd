import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load your actual Stripe public key
const stripePromise = loadStripe('pk_test_51R2BvYJ8PpmtveDNTab42yFslbfMPPkQJFbFmuffpiaabMz1VTSPm7RnKFqZNcUNMyummKvrabp1KARwNP6cTNFy001Fllgrzl');

const PaymentForm = () => {
    // State to manage error messages and processing state
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Initialize Stripe and Elements hooks
    const stripe = useStripe();
    const elements = useElements();

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Ensure Stripe and Elements are loaded
        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true); // Set processing state
        setError(null); // Clear previous errors

        // Get the CardElement from the Elements provider
        const cardElement = elements.getElement(CardElement);

        // Create a payment method (for credit/debit cards)
        const { error: cardError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        // Handle errors from Stripe
        if (cardError) {
            setError(cardError.message); // Set error message
            setIsProcessing(false); // Reset processing state
        } else {
            // Handle successful payment method creation
            console.log('Payment Method:', paymentMethod);
            // Send paymentMethod.id to your server to process the payment
            setIsProcessing(false); // Reset processing state
            alert('Payment successful!'); // Notify the user of success
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Pay with Card</h4>
            <CardElement /> {/* Renders the card input field */}
            <button type="submit" disabled={!stripe || isProcessing}>
                {isProcessing ? 'Processing...' : 'Pay Now'} {/* Button text based on state */}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message if any */}
        </form>
    );
};

export default PaymentForm;