import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
    courses: null,  
    currentCourse: localStorage.getItem("currentCourse") 
        ? JSON.parse(localStorage.getItem("currentCourse")) 
        : null,
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
            setCurrentCourse: (state,action) => {
                state.currentCourse = action.payload
                localStorage.setItem("currentCourse", JSON.stringify(action.payload));
            }
    }
})


export const { setCourse,setCurrentCourse,setStep } = courseSlice.actions;

export default courseSlice.reducer;
