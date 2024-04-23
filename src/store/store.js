import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./editorPageSlice";



export default configureStore({
    reducer: {
        editor: editorReducer

    },
});
