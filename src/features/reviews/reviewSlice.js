import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const REVIEWS_URL = "/reviews"

const initialState = { reviews: [] }

export const getReviews = createAsyncThunk('reviews/getReviews', async (params) => {
    const response = await axios.get(`${REVIEWS_URL}`, { params })
    // console.log('response', response)
    return response.data
})

export const addNewReview = createAsyncThunk('reviews/addNewReview', async (newReview) => {
    const response = await axios.post(`${REVIEWS_URL}`, newReview)
    // console.log('response', response)
    return response.data
})


export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addNewReview.fulfilled, (state, action) => {
                state.reviews = [action.payload, ...state.reviews]
                //state.reviews.sort((a, b) => a.name > b.name ? 1 : -1)
            })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.reviews = action.payload
            })
           

            
    }
})

export default reviewSlice.reducer