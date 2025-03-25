// src/store/Utils/validation.js

export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const isRequired = (value) => {
    return value && value.trim().length > 0;
};

export const isValidPhoneNumber = (phone) => {
    // Simple check for a 10-digit phone number
    return /^\d{10}$/.test(phone);
};