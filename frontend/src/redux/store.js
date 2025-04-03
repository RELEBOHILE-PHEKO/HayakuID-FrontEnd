// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';

// Create the Redux store
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Export the store as the default export
export default store;
