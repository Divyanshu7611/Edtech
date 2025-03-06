import React from 'react'
import CourseUploadTips from '../../Components/Core/Dashboard/course/Tips'
import CreateCourse from '../../Components/Core/Dashboard/course/CreateCourse'
import CreateCourseForm from '../../Components/Core/Dashboard/course/CreateCourseForm'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';

function AddCourse() {
  return (
    <div className='flex gap-10 justify-between items-start mt-10'>

        {/* <CreateCourse/> */}
        <div className='flex flex-col gap-5 w-full'>

          <Link className='flex items-center gap-2 hover:text-yellow-50 text-md text-[#838894]' to='/dashboard' >
          <MdOutlineKeyboardArrowLeft/>
          <span>Back to Dashboard</span>
          </Link>

        <CreateCourseForm/>
        </div>
        {/* course details */}
        <CourseUploadTips/>

    </div>
  )
}

export default AddCourse