import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    images: [],
    bgImage: null,
    calendar: null,
    showContent: false,
    totalPages: 0,
    pageNr: 1,
    hatchSide: 'left',
    guideH: "Welcome to the calendar editor!",
    guideText: "Start creating your calendar by searching for a theme.",
    favorites: [],
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload;
        },
        setBgImage: (state, action) => {
            state.bgImage = action.payload;
        },
        setCalendar: (state, action) => {
            state.calendar = action.payload;
        },
        setShowContent: (state, action) => {
            state.showContent = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setPageNr: (state, action) => {
            state.pageNr = action.payload;
        },
        setHatchSide: (state, action) => {
            state.hatchSide = action.payload;
        },
        setGuideH: (state, action) => {
            state.guideH = action.payload;
        },
        setGuideText: (state, action) => {
            state.guideText = action.payload;
        },
        addToFavorites: (state, action) => {
            state.favorites = state.favorites.concat(action.payload);
        },
    },
    // Add the immer option
    immer: true,
});

export const {
    setImages,
    setBgImage,
    setCalendar,
    setShowContent,
    setTotalPages,
    setPageNr,
    setHatchSide,
    setGuideH,
    setGuideText,
    addToFavorites,
} = calendarSlice.actions;

export default calendarSlice.reducer;