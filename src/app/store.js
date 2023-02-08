import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/authSlice"
import parkReducer from "../features/parks/parkSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        park: parkReducer
    }
})