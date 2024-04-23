import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    calendar: {},
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setCalendar: (state, action) => {
            state.calendar = action.payload;
        },
        fetchCalendarStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCalendarSuccess(state, action) {
            state.calendar = action.payload;
            state.loading = false;
        },
        fetchCalendarFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setCalendar, fetchCalendarStart, fetchCalendarSuccess, fetchCalendarFailure } = calendarSlice.actions;

export const selectCalendar = state => state.calendar.calendar;

export default calendarSlice.reducer;
