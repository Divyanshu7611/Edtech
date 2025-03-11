import { apiConnector } from "../apiConnector"
import { courseEndpoints } from "../apis"
import {setCourse} from "../../slices/courseSlice"

const {GET_ALL_INSTRUCTOR_COURSE_API} = courseEndpoints

export function fetchInstructorCourse(){
    return async (dispatch) => {
        const response = await apiConnector({method:"GET",url:GET_ALL_INSTRUCTOR_COURSE_API})
        console.log("RESPONSE COMES",response)
        if(response.data){
            dispatch(setCourse(response.data.data))
        }
    }
}