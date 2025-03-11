import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    courses: null,   
}


export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
            setStep: (state, action) => {
                state.step = action.payload
            },

            setCourse: (state, action) => {
                state.courses = action.payload
            },
    }
})


export const { setCourse } = courseSlice.actions;

export default courseSlice.reducer;
