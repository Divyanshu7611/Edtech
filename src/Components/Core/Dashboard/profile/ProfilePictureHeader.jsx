import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaEdit } from "react-icons/fa";

function ProfilePictureHeader() {
    const [isEdit, setEdit] = useState(false)
    const { user } = useSelector((state) => state.profile)

    return (
        <div className='border-[#2C333F] border rounded-lg bg-[#161D29] mx-auto lg:w-[85%] mt-10 w-full max-h-32'>
            {
                isEdit ? (<div className='flex items-center gap-5 p-5'>
                    <img height={78} width={78} src={user.image || `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`} alt="Error 404" className='rounded-full' />
                    <div className='flex flex-col justify-between items-start gap-3'>
                        <h1 className='text-[#DBDDEA] text-base'>Change Profile Picture</h1>
                        <div className='flex items-center gap-3'>
                            <button className='bg-[#FFD60A] text-[#000814] text-base flex justify-center items-center gap-2 py-1 px-3 rounded-lg hover:scale-105 transition-all duration-200' onClick={() => setEdit(true)}>Change</button>
                            <button className='bg-[#2C333F] text-[#C5C7D4] text-base flex justify-center items-center gap-2 py-1 px-3 rounded-lg hover:scale-105 transition-all duration-200 border border-[#424854]' onClick={() => setEdit(true)}>Remove</button>

                        </div>
                    </div>



                </div>) : (<div className='flex justify-between p-3 items-center'>
                    <div className='flex justify-center items-center gap-4'>
                        <img height={78} width={78} src={user.image || `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`} alt="Error 404" className='rounded-full' />
                        <span className='flex flex-col gap-1'>
                            <h1 className='text-[#F1F2FF] text-lg'>{user.firstName} {user.lastName}</h1>
                            <p className='text-[#838894] text-sm'>{user.email}</p>
                        </span>
                    </div>
                    <div>
                        <button className='bg-[#FFD60A] text-[#000814] text-base flex justify-center items-center gap-2 py-1 px-3 rounded-lg hover:scale-105 transition-all duration-200' onClick={() => setEdit(true)}><FaEdit className='text-xl' /> <span>Edit</span></button>
                    </div>

                </div>)
            }

        </div>
    )
}

export default ProfilePictureHeader