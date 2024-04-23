import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    images: [],
    bgObject: {},
    calendarImage: null,
    bool: false,
    bool2: false,
    bool3: false,
    bool4: false,
    totalPages: 0,
    pageNr: 1,
    hatchType: 'single',
    hatchSide: 'left',
    searchInput: '',
    calendar: null,
    guideH: "Welcome to the calendar editor!",
    guideText: "Start creating your calendar by searching for a theme.",

}

const editorPageSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        setPageNr: (state, action) => {
            state.pageNr = action.payload;
        },
        setHatchType: (state, action) => {
            state.hatchType = action.payload;
        },
        setHatchSide: (state, action) => {
            state.hatchSide = action.payload;
        },
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setCalendar: (state, action) => {
            state.calendar = action.payload;
        },
        setGuideH: (state, action) => {
            state.guideH = action.payload;
        },
        setGuideText: (state, action) => {
            state.guideText = action.payload;
        },

        setImages: (state, action) => {
            state.images = action.payload;//fetchImages
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setBgObject: (state, action) => {
            state.bgObject = action.payload;
        },
        setCalendarImage: (state, action) => {
            state.calendarImage = action.payload;
        }

    }
})

export const { setPageNr, setHatchType, setHatchSide, setSearchInput, setCalendar, setGuideH, setGuideText, setImages, setTotalPages, setBgObject } = editorPageSlice.actions;//actions creators are generated here

export default editorPageSlice


// handleSearch: (state, action) => {
        //     state.handleSearch = action.payload;
        // },
        // handleSelection: (state, action) => {
        //     state.handleSelection = action.payload;
        // },
        // radioHandler: (state, action) => {
        //     state.radioHandler = action.payload;
        // },
        // handleFetch: (state, action) => {
        //     state.handleFetch = action.payload;
        // },