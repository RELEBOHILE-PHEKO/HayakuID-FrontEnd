// src/components/EcoCashPayment.js
import React, { useState } from 'react';

const EcoCashPayment = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handlePayment = () => {
        // Simulate payment processing
        if (phoneNumber && amount) {
            setMessage(`Payment of ${amount} processed successfully via EcoCash!`);
        } else {
            setMessage('Please enter valid details.');
        }
    };

    return (
        <div>
            <h4>EcoCash Payment</h4>
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Pay with EcoCash</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default EcoCashPayment;