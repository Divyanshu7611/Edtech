import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    course: null,   
}


export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
            setStep: (state, action) => {
                state.step = action.payload
            },

            setCourse: (state, action) => {
                state.course = action.payload
            },
    }
})