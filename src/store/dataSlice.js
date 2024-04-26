import { createSlice } from '@reduxjs/toolkit';
import { addDataToFirestore, auth } from '../auth/firebase';

export const dataSlice = createSlice({
    name: 'calendar-data',
    initialState: {
        data: {},
        loading: false,
        error: null,
    },
    reducers: {
        saveCalendarFirestore(state, action) {
            const calendarJson = action.payload;
            const calendarObj = JSON.parse(calendarJson);
            state.data = calendarObj;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        startLoading: (state) => {
            state.loading = true;
        },
        hasError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { setData, startLoading, hasError } = dataSlice.actions;


export default dataSlice.reducer;