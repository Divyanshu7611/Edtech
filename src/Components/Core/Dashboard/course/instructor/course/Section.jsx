import React,{useState} from 'react'
import CreateSection from './CreateSection'
import GetCourseBuilderDetails from './GetCourseBuilderDetails'

function Section() {
  const [isFetching, setIsFetching] = useState(false);
  return (
    <div className='border border-[#2C333F] rounded-lg bg-[#161D29] flex flex-col p-5 gap-5'>
        <h1 className='text-[#F1F2FF] text-base font-semibold'>Course Builder</h1>
        <GetCourseBuilderDetails isFetching={isFetching} setIsFetching = {setIsFetching}/>
        <CreateSection setIsFetching = {setIsFetching}/>
    </div>
  )
}

export default Section