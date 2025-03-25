// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

// Change this to default export
const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;  // Add this line