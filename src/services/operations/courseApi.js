import { apiConnector } from "../apiConnector"
import { courseEndpoints } from "../apis"
import {setCourse,setCurrentCourse} from "../../slices/courseSlice"
import {toast} from "react-hot-toast"

const {GET_ALL_INSTRUCTOR_COURSE_API,CREATE_COURSE_API,CREATE_SECTION_API} = courseEndpoints


// create course


export function createCourse(formData,token){
    return async (dispatch) => {
      try{
        const response = await apiConnector({method:"POST",url:CREATE_COURSE_API,bodyData:formData,header:{"Content-Type":"multipart/form-data" , Authorization: `Bearer ${token}`}})
        if(response?.data?.success){
          toast.success(response.data.message);
          dispatch(setCurrentCourse(response.data.data))
          // localStorage.setItem("currentCourse",response.data.data)
        }
        console.log("CREATE COURSE RESPONSE....")
        if(!response.data.success){
          throw new Error(response.data.message);
        }
  
      }catch(error){
        console.log("CREATE COURSE ERROR....",error)
        toast.error("Course Creation Failed")
  
      }
    }
  }

export function fetchInstructorCourse(){
    return async (dispatch) => {
        const response = await apiConnector({method:"GET",url:GET_ALL_INSTRUCTOR_COURSE_API})
        console.log("RESPONSE COMES",response)
        if(response.data){
            dispatch(setCourse(response.data.data))
        }
    }
}



export function createSection(data,token){
    return async (dispatch) => {
      try{
        const response = await apiConnector({method:"POST",url:CREATE_SECTION_API,bodyData:data,header:{Authorization:`Bearer ${token}`}})
        console.log("RESPONSE COMES",response)
        if(response.data){
            // dispatch(setCurrentCourse(response.data.data))
            toast.success("Section Added Successfully")
        }
      }catch(error){
        toast.error("Something Went Wrong, Try Again Later");
        console.log("there might be error",error)
      }
    }
}