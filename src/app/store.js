import { configureStore } from "@reduxjs/toolkit";
import parkReducer from "../features/parkSlice"

export const store = configureStore({
    reducer: {
        park: parkReducer
    }
})