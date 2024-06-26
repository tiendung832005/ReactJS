import countReducer from "./reducers/countReducer";
import themeReducer from "./reducers/themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./reducers/displaySlice";
const store = configureStore({
    reducer: {
        countReducer,
        themeReducer,
        displaySlice,
        
    },
});

export default store;