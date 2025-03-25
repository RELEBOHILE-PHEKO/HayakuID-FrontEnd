// src/store/Utils/formatters.js

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const formatPhoneNumber = (phone) => {
    // Example for US phone numbers
    if (!phone) return '';
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};