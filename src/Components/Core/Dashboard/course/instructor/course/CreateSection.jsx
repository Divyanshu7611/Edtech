import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CiCirclePlus } from "react-icons/ci";

function CreateSection() {
    const {sectionName,setSectionName} = useState("")
    const {currentCourse} = useSelector((state)=>state.course)
    const dispatch = useDispatch();
    function handleSubmit(){
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="courseName">Course Title</label>
          <input
            type="text"
            id="sectionName"
            name="sectionName"
            value={formData.sectionName}
            placeholder="Enter course title"
            className="w-full p-2 rounded-md border-[#65696f91] border bg-[#2C333F]"
            onChange={(e)=>{setSectionName(e.target.value)}}
          />
        </div>
        <button type='submit' className='px-5 py-2 border border-[#FFD60A] text-[#FFD60A] flex justify-center items-center'><span>Create Section</span><CiCirclePlus/></button>
        </form>

    </div>
  )
}

export default CreateSection