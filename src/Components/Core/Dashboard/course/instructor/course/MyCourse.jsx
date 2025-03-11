// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import {fetchInstructorCourse} from "../../../../../../services/operations/courseApi"
// // import CourseCardDashboard from './courseCardDashboard'

// function MyCourse() {
//     const dispatch = useDispatch()
//     const {courses}  = useSelector((state)=>state.course)
//     const [loading, setLoading] = useState(true);
//     useEffect(()=>{
//         dispatch(fetchInstructorCourse())
//         setLoading(false)
//         console.log("Redux Data ",courses)
//     },[])
//     if(loading){
//         return <div className='min-w-screen min-h-screen flex justify-center items-center'>
//             <div className='loader'></div>
//         </div>
//     }
//   return (
//     <div className='mt-8'>
//         <p className='text-[#838894] text-sm'>Home / Dashboard / <span className='text-[#FFD60A]'>Courses</span></p>
//         <h1 className='text-[#F1F2FF] text-3xl font-medium mt-5'>My Course</h1>
//         <div className='border border-[#161D29] rounded-lg mx-auto flex-col flex'>
//             <div>

//             </div>

//         </div>
//     </div>
//   )
// }

// export default MyCourse



import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInstructorCourse } from '../../../../../../services/operations/courseApi';
import CourseCardDashboard from './CourseCardDashboard'

function MyCourse() {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.course);
    const [loading, setLoading] = useState(true);
    const [courseData,setCourseData] = useState([])

    useEffect(() => {
       const response =  dispatch(fetchInstructorCourse()).then(() => setLoading(false));
       console.log("redux data frontend" ,courses)
    }, [dispatch]);

    if (loading) {
        return (
            <div className='min-w-screen min-h-screen flex justify-center items-center'>
                <div className='loader'></div>
            </div>
        );
    }

    return (
        <div className='mt-8'>
            <p className='text-[#838894] text-sm'>
                Home / Dashboard / <span className='text-[#FFD60A]'>Courses</span>
            </p>
            <h1 className='text-[#F1F2FF] text-3xl font-medium mt-5'>My Course</h1>
            <div className='border border-[#161D29] rounded-lg mx-auto flex flex-col py-1 mt-5'>
                <div className='flex justify-between items-center text-[#F1F2FF] font-medium py-1 border-b border-[#161D29] px-4'>
                    <span className='w-2/4'>Courses</span>
                    <span>Duration</span>
                    <span>Price</span>
                    <span>Actions</span>
                </div>
                {courses && courses.length > 0 ? (
                    courses.map((course) => <CourseCardDashboard key={course.id} title={course.courseName} description={course.courseDescription} thumbnail={course.thumbnail} status={'DRAFT'} createdAt={course.createdAt}/>)
                ) : (
                    <p className='text-[#838894] text-center py-4'>No courses available.</p>
                )}
            </div>
        </div>
    );
}

export default MyCourse;
