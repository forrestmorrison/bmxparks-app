import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const WEATHER_URL = "/weather"

const initialState = { weather: [] }

export const getWeather = createAsyncThunk('weather/getWeather', async (weather) => {
    const response = await axios.get(`${WEATHER_URL}`, weather)
    // console.log('response', response)
    return response.data
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getWeather.fulfilled, (state, action) => {
                state.weather = action.payload
            })
            
    }
})

export default weatherSlice.reducer