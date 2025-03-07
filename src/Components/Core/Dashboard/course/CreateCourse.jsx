import React from 'react'
import Stepper from './Stepper'
import { useEffect } from 'react'
import { getCategories } from '../../../../services/operations/authApi'
import {toast} from 'react-hot-toast'
import CreateCourseForm from './CreateCourseForm'

function CreateCourse() {

  return (
    <div>
        <Stepper step={1} />
        <CreateCourseForm/>  

    </div>
  )
}

export default CreateCourse