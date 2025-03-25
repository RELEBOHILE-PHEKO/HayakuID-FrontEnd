// src/store/Utils/dateUtils.js

export const formatDate = (date) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

export const isPastDate = (date) => {
    return new Date(date) < new Date();
};

export const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0]; // Returns YYYY-MM-DD format
};