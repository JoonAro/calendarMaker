import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import calendarSlice from './calendarSlice';

const store = configureStore({
    reducer: {
        data: dataSlice,
        calendar: calendarSlice,
    }
});

export default store;