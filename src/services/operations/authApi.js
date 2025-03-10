import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../../slices/authSlice";
import {setCategories} from "../../slices/categorySlice"
import { resetCart } from "../../slices/cartSlice";
import { setUser,setProfileLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { categories, courseEndpoints, endpoints,profileEndpoints } from "../apis";

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints;
const {CHANGE_PROFILE_IMAGE} = profileEndpoints
const{CATEGORIES_API} = categories
const {CREATE_COURSE_API} = courseEndpoints

export function sendOtp(email, navigate) {
  console.log('we here',email)
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      // const response = await apiConnector("POST",SENDOTP_API, {
      //   email,
      //   checkUserPresent: true,
      // });
      const response = await apiConnector({method:"POST",url:SENDOTP_API,bodyData:{email,checkUserPresent:true}})
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("OTP Sent Successfully");
      navigate("/otp-verification");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector({method:"POST", url:SIGNUP_API, bodyData:{
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      }});

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector({method:"POST", url:LOGIN_API, bodyData:{
        email,
        password,
      }});

      console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(response.data.token));
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
      dispatch(setUser({ ...response.data.user, image: userImage }));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // navigate("/dashboard/my-profile");
      navigate("/dashboard");

    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}



export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(resetCart());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });

      console.log("RESET PASSWORD TOKEN RESPONSE....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Failed to send email for resetting password");
    }
    dispatch(setLoading(false));
  };
}

export function resetPassword(password, confirmPassword, token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });

      console.log("RESET Password RESPONSE ... ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password has been reset successfully");
    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Unable to reset password");
    }
    dispatch(setLoading(false));
  };
}

// update image

// TODO: Error in it

export function updateImage(formData){
  // console.log(typeof localStorage);?
  // console.log("data",formData.entries())
  
 

  return async (dispatch) => {
    dispatch(setProfileLoading(true))
    try {
      const token = JSON.parse(localStorage.getItem("token")); // Unstringify

      const response = await apiConnector({method:"PUT",url:CHANGE_PROFILE_IMAGE,bodyData:{formData},header:{"Content-Type":"multipart/form-data" , Authorization: `Bearer ${token}`}}) 
      console.log("check")

      console.log("UPLOAD IMAGE RESPONSE ... ", response);

   
        if (!response.data.success) {
          throw new Error(response.data.message || "Image Upload Failure");
        }

      toast.success("Profile Changed Successfully")

      
    } catch (error) {
      console.log("PROFILE PICTURE UPDATE FAILURE....",error)
      toast.error("Profile Change Failure")
    }
  }

}




// get categories

export function getCategories(){
  return async (dispatch) => {
  try{
    const response = await apiConnector({method:"GET",url:CATEGORIES_API})
    dispatch(setCategories(response.data.allCategory))
    console.log("GET CATEGORIES RESPONSE....",response)
    if(!response.data.success){
      throw new Error(response.data.message);
    }
  }catch(error){
    console.log("GET CATEGORIES ERROR....",error)
  }
  }
}



// create course


export function createCourse(formData,token){
  return async (dispatch) => {
    try{
      const response = await apiConnector({method:"POST",url:CREATE_COURSE_API,bodyData:formData,header:{"Content-Type":"multipart/form-data" , Authorization: `Bearer ${token}`}})
      if(response?.data.success){
        toast.success(response.data.message);
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