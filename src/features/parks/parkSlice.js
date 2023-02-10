import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const PARKS_URL = "/"

const initialState = { park: undefined }

const saveToLocalStorage = (token) => {
    localStorage.setItem('token', token)
}

export const addNewPark = createAsyncThunk('users/addNewUser', async (newPark) => {
    const response = await axios.post(`${PARKS_URL}/signup`, newPark)
    saveToLocalStorage(response.data.token)
    console.log('response', response)
    return response.data
})

export const parkSlice = createSlice({
    name: 'park',
    initialState,
    reducers: {
        addPark: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(addNewPark.fulfilled, (state, action) => {
                state.park = action.payload.park
            })
    }
})

export const { addPark } = parkSlice.actions

export default parkSlice.reducer