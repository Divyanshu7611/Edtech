import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
function DeleterProfile() {
  return (
    <div className='bg-[#340019] rounded-lg p-5 flex flex-col gap-5 border-[#691432] lg:w-[85%] mx-auto mt-5 border'>
        <div className='flex gap-3'>
            <div>
                <RiDeleteBin6Fill size={40} color='#EF476F'className='bg-[#691432] p-2 rounded-full'/>
            </div>
            <div className='flex flex-col gap-1 justify-start items-start'>
                <h1 className='text-[#FFF1F1] text-lg font-semibold'>Delete Account</h1>
                <p className='text-[#FBC7D1] text-sm mt-2'>Would you like to delete account?</p>
                <p className='text-[#FBC7D1] text-sm'>This account contains Paid Courses. Deleting your account will remove all<br/> the contain associated with it.</p>
                <button className='text-[#D43D63] border-none italic hover:scale-105 mt-2 transition-all duration-200 hover:text-[#FFD60A]'>I want to delete my account</button>
            </div>
        </div>
    </div>
  )
}

export default DeleterProfile