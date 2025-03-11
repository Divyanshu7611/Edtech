import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import categoryReducer from "../slices/categorySlice";
import courseReducer from "../slices/courseSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  category: categoryReducer,
  course: courseReducer,
});

export default rootReducer;
