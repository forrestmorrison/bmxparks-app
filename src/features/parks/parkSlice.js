import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const PARKS_URL = "/parks"

const initialState = { parks: [] }

export const getParks = createAsyncThunk('parks/getParks', async (parks) => {
    const response = await axios.get(`${PARKS_URL}`, parks)
    // console.log('response', response)
    return response.data
})

export const showPark = createAsyncThunk('parks/showPark', async (parkId) => {
    const response = await axios.get(`${PARKS_URL}/${parkId}`)
    return response.data
})

export const addNewPark = createAsyncThunk('parks/addNewPark', async (newPark) => {
    const response = await axios.post(`${PARKS_URL}`, newPark)
    // console.log('response', response)
    return response.data
})

export const deletePark = createAsyncThunk('parks/deletePark', async (parkId) => {
    await axios.delete(`${PARKS_URL}/${parkId}`)
    return parkId
})

export const parkSlice = createSlice({
    name: 'parks',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addNewPark.fulfilled, (state, action) => {
                state.parks.push(action.payload)
                state.parks.sort((a, b) => a.name > b.name ? 1 : -1)
            })
            .addCase(getParks.fulfilled, (state, action) => {
                state.parks = action.payload
            })
            .addCase(deletePark.fulfilled, (state, action) => {
                state.parks = state.parks.filter(park => park.id !== action.payload)
            })

            
    }
})

export default parkSlice.reducer