import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    calendar: undefined,
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setCalendar: (state, action) => {
            state.calendar = action.payload;
        },

    },
});

export const { setCalendar } = calendarSlice.actions;

export const selectCalendar = state => state.calendar.calendar;

export default calendarSlice.reducer;
