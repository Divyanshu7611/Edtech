import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories: [],
    loading: false,
    error: null,
}


export const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        setCategories: (state, action) => {
            state.categories = action.payload
        },
    }
})

export const {setCategories}  = categorySlice.actions
export default categorySlice.reducer