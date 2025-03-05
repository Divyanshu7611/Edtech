import React from 'react'
import CourseUploadTips from '../../Components/Core/Dashboard/course/Tips'
import CreateCourse from '../../Components/Core/Dashboard/course/CreateCourse'

function AddCourse() {
  return (
    <div className='flex gap-3 justify-between items-center mt-10'>

        <CreateCourse/>
        {/* course details */}
        <CourseUploadTips/>

    </div>
  )
}

export default AddCourse