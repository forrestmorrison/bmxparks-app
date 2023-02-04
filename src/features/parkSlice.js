import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = {
    name: "",
    address: "",
    type: {
        dirt: false,
        race: false,
        street: false
    },
    access: ""
}

export const parkSlice = createSlice({
    name: "park",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        addPark: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addPark } = parkSlice.actions

export default parkSlice.reducer