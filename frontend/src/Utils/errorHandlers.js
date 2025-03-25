// src/store/Utils/errorHandlers.js

export const handleError = (error) => {
    console.error('Error:', error);
    return error.response && error.response.data ? error.response.data.message : 'An unknown error occurred.';
};

export const logError = (error) => {
    // You can extend this function to log errors to an external service
    console.error('Logging Error:', error);
};