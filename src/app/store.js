import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/authSlice"
import parkReducer from "../features/parks/parkSlice"
import reviewReducer from "../features/reviews/reviewSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        parks: parkReducer,
        reviews: reviewReducer
    }
})