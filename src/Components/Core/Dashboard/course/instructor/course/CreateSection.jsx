import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CiCirclePlus } from "react-icons/ci";
import { createSection } from '../../../../../../services/operations/courseApi';

function CreateSection() {
    const [sectionName,setSectionName] = useState("")
    const {currentCourse} = useSelector((state)=>state.course)
    const {token} = useSelector((state)=>state.auth)
    const dispatch = useDispatch();
    function handleSubmit(e){
      e.preventDefault()
      console.log("The FormSubmitted",sectionName)
      // if (!currentCourse?._id) {
      //   console.error("Current course is not available.");
      //   return;
      // }
      console.log("redux course data",currentCourse._id)
      dispatch(createSection({
          sectionName: sectionName,
          courseId: currentCourse._id,
        },token))
    }
    console.log("course Data",currentCourse)
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            id="sectionName"
            name="sectionName"
            value={sectionName}
            placeholder="Enter course title"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F] text-white"
            onChange={(e)=>setSectionName(e.target.value)}
          />
        </div>
        <button type='submit' className='px-5 py-2 border border-[#FFD60A] text-[#FFD60A] flex justify-center items-center rounded-lg mt-5 gap-2'><span>Create Section</span><CiCirclePlus/></button>
        </form>

    </div>
  )
}

export default CreateSection