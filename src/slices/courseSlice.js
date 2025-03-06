import { createSlice } from "@reduxjs/toolkit";
import { setCourse } from "c:/Users/dshap/AppData/Local/Temp/3da7b0bf-ead6-4de2-a247-58aeda164ef4_studynotion-edtech-project-main.zip.ef4/studynotion-edtech-project-main/src/slices/courseSlice";

const initialState = {
    step: 1,
    course: null,   
}


const courseSlice = createSlice({
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