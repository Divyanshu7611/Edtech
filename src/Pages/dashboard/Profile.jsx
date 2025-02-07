import React from 'react'
import ProfilePictureHeader from '../../Components/Core/Dashboard/profile/ProfilePictureHeader'

function Profile() {
  return (
    <div className='flex flex-col p-5 justify-center'>
       <div>
        <h1 className='text-[#F1F2FF] text-3xl'>My Profile</h1>
        </div>
        <ProfilePictureHeader/>
    </div>
  )
}

export default Profile