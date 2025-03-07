import React,{ useEffect,useState } from 'react';
import CourseUploadTips from '../../Components/Core/Dashboard/course/Tips'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../services/operations/authApi';
import CreateCourseForm from '../../Components/Core/Dashboard/course/CreateCourseForm'
import CreateCourse from '../../Components/Core/Dashboard/course/CreateCourse';
function AddCourse() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {      
        const response = await dispatch(getCategories()); // ✅ Await the dispatched function
    };

    fetchCategories();
  }, []);

  return (
    <div className='flex gap-10 justify-between items-start mt-10'>

        {/* <CreateCourse/> */}
        <div className='flex flex-col gap-5 w-full'>

          <Link className='flex items-center gap-2 hover:text-yellow-50 text-md text-[#838894]' to='/dashboard' >
          <MdOutlineKeyboardArrowLeft/>
          <span>Back to Dashboard</span>
          </Link>

        {/* <CreateCourseForm/> */}
        <CreateCourse/>
        </div>
        {/* course details */}
        <CourseUploadTips/>

    </div>
  )
}

export default AddCourse