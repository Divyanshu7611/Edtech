import React from 'react'
import { FaClock } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

function CourseCardDashboard({title,description,thumbnail,createdAt,status}) {
  return (
    <div className='flex max-h-48 gap-5 px-4 py-5'>
        <div>
            <img src={thumbnail} alt='thumbnail' width={171} height={144} className='rounded-xl'/>

        </div>
        <div className='flex flex-col justify-between items-start'>
            <h1 className='text-[#F1F2FF] font-semibold text-xl'>{title}</h1>
            <p className='text-[#AFB2BF] text-xs max-w-sm'>{description}</p>
            <p className='text-[#DBDDEA] font-medium text-sm'>Created: {createdAt}</p>
            <div className='bg-[#2C333F] borded border-[#2C333F] rounded-full py-1 px-5'>

            {
                status === "Published" ? (<div className='flex justify-center items-center text-[#E7C009] text-xs font-medium gap-3'>
                        <FaCheckCircle/> <h1>Published</h1>
                </div>) : (<div className='flex justify-center items-center text-[#F37290] text-sm font-medium gap-1'>
                    <FaClock/> <h1>Drafted</h1>
                </div>)
            }
            </div>


        </div>

    </div>
  )
}

export default CourseCardDashboard